import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { api } from "../lib/api";
import { useAuth } from "../lib/auth";
import { toast } from "sonner";

export default function EmployerDashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState({ jobs_total: 0, jobs_open: 0, applications_total: 0, applications_pending: 0 });
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;
    if (user.role !== "employer") { navigate("/dashboard"); return; }
    (async () => {
      try {
        const [s, j] = await Promise.all([api.get("/stats/employer"), api.get("/jobs/my")]);
        setStats(s.data);
        setJobs(j.data);
      } catch (e) {}
      finally { setLoading(false); }
    })();
  }, [user, navigate]);

  const onDelete = async (jobId) => {
    if (!window.confirm("Удалить вакансию?")) return;
    try {
      await api.delete(`/jobs/${jobId}`);
      setJobs(jobs.filter((j) => j.job_id !== jobId));
      toast.success("Удалено");
    } catch (e) { toast.error("Ошибка"); }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#09090B]" data-testid="employer-dashboard">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="overline mb-3">// DASHBOARD / EMPLOYER</div>
        <div className="flex items-center justify-between mb-10">
          <h1 className="font-heading font-black text-4xl md:text-5xl tracking-tighter">Кабинет работодателя</h1>
          <Link to="/employer/jobs/new" className="btn-primary" data-testid="new-job-btn">+ Новая вакансия</Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-zinc-800 mb-10">
          <div className="p-6 border-r border-b md:border-b-0 border-zinc-800">
            <div className="overline mb-2">// JOBS</div>
            <div className="font-heading font-black text-4xl">{stats.jobs_total}</div>
          </div>
          <div className="p-6 md:border-r border-b md:border-b-0 border-zinc-800">
            <div className="overline mb-2">// OPEN</div>
            <div className="font-heading font-black text-4xl text-[#22C55E]">{stats.jobs_open}</div>
          </div>
          <div className="p-6 border-r border-zinc-800">
            <div className="overline mb-2">// APPS TOTAL</div>
            <div className="font-heading font-black text-4xl">{stats.applications_total}</div>
          </div>
          <div className="p-6">
            <div className="overline mb-2">// PENDING</div>
            <div className="font-heading font-black text-4xl text-[#FACC15]">{stats.applications_pending}</div>
          </div>
        </div>

        <div className="overline mb-4">// MY POSTINGS</div>
        {loading ? (
          <div className="font-mono text-sm text-zinc-500 uppercase">Загрузка...</div>
        ) : jobs.length === 0 ? (
          <div className="card-surface p-12 text-center">
            <p className="text-zinc-400 mb-6">У вас ещё нет вакансий.</p>
            <Link to="/employer/jobs/new" className="btn-primary inline-block">Создать первую →</Link>
          </div>
        ) : (
          <div className="border border-zinc-800 divide-grid" data-testid="my-jobs-list">
            {jobs.map((j) => (
              <div key={j.job_id} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4" data-testid={`my-job-${j.job_id}`}>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`badge-mono ${j.status === "open" ? "text-[#22C55E] border-[#22C55E]" : ""}`}>{j.status === "open" ? "OPEN" : "CLOSED"}</span>
                    <span className="badge-mono">{j.employment_type}</span>
                    {j.remote && <span className="badge-mono text-[#FACC15] border-[#FACC15]">REMOTE</span>}
                  </div>
                  <Link to={`/jobs/${j.job_id}`} className="font-heading font-bold text-xl hover:text-[#FACC15]">{j.title}</Link>
                  <div className="text-sm text-zinc-400">{j.location}</div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Link to={`/employer/jobs/${j.job_id}/applicants`} className="btn-ghost text-xs" data-testid={`view-applicants-${j.job_id}`}>Отклики →</Link>
                  <button onClick={() => onDelete(j.job_id)} className="btn-ghost text-xs hover:border-red-500 hover:text-red-500" data-testid={`delete-job-${j.job_id}`}>Удалить</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
