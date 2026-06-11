import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { api } from "../lib/api";
import { toast } from "sonner";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    q: "", location: "", employment_type: "", remote: "", salary_min: "",
  });
  const navigate = useNavigate();

  const load = async () => {
    setLoading(true);
    try {
      const params = {};
      Object.entries(filters).forEach(([k, v]) => { if (v !== "" && v !== null) params[k] = v; });
      const res = await api.get("/jobs", { params });
      setJobs(res.data);
    } catch (e) {
      toast.error("Не удалось загрузить вакансии");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); /* eslint-disable-next-line */ }, []);

  return (
    <div className="min-h-screen bg-[#09090B]" data-testid="jobs-page">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="overline mb-3">// CATALOG</div>
        <h1 className="font-heading font-black text-4xl md:text-5xl tracking-tighter mb-8">Все вакансии</h1>

        {/* Filters */}
        <div className="card-surface p-6 mb-8 grid grid-cols-1 md:grid-cols-6 gap-3">
          <input
            type="text"
            placeholder="Поиск по названию"
            className="input-field md:col-span-2"
            value={filters.q}
            onChange={(e) => setFilters({ ...filters, q: e.target.value })}
            data-testid="filter-search-input"
          />
          <input
            type="text"
            placeholder="Локация"
            className="input-field"
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            data-testid="filter-location-input"
          />
          <select
            className="input-field"
            value={filters.employment_type}
            onChange={(e) => setFilters({ ...filters, employment_type: e.target.value })}
            data-testid="filter-type-select"
          >
            <option value="">Тип занятости</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contract">Contract</option>
            <option value="internship">Internship</option>
            <option value="remote">Remote</option>
          </select>
          <input
            type="number"
            placeholder="От, ₽"
            className="input-field"
            value={filters.salary_min}
            onChange={(e) => setFilters({ ...filters, salary_min: e.target.value })}
            data-testid="filter-salary-input"
          />
          <button onClick={load} className="btn-primary" data-testid="filter-apply-btn">Найти</button>
        </div>

        {loading ? (
          <div className="font-mono text-sm text-zinc-500 uppercase">Загрузка...</div>
        ) : jobs.length === 0 ? (
          <div className="card-surface p-12 text-center">
            <div className="overline mb-3">// EMPTY</div>
            <div className="text-zinc-400">Вакансий по фильтрам не найдено</div>
          </div>
        ) : (
          <div className="border border-zinc-800 divide-grid" data-testid="jobs-list">
            {jobs.map((job) => (
              <Link
                key={job.job_id}
                to={`/jobs/${job.job_id}`}
                className="block p-6 hover:bg-zinc-900/50 transition-colors"
                data-testid={`job-card-${job.job_id}`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="badge-mono">{job.employment_type}</span>
                      {job.remote && <span className="badge-mono text-[#FACC15] border-[#FACC15]">REMOTE</span>}
                      <span className="font-mono text-xs text-zinc-500">{new Date(job.created_at).toLocaleDateString("ru")}</span>
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-1">{job.title}</h3>
                    <div className="text-sm text-zinc-400">{job.company} · {job.location}</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {(job.skills || []).slice(0, 6).map((s) => (
                        <span key={s} className="badge-mono">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    {(job.salary_min || job.salary_max) && (
                      <div className="font-heading font-bold text-xl">
                        {job.salary_min ? `${(job.salary_min / 1000).toFixed(0)}k` : ""}
                        {job.salary_min && job.salary_max ? "—" : ""}
                        {job.salary_max ? `${(job.salary_max / 1000).toFixed(0)}k ₽` : ""}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
