import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { api } from "../lib/api";
import { useAuth } from "../lib/auth";

export default function CandidateDashboard() {
  const { user, profile } = useAuth();
  const [stats, setStats] = useState({ applications_total: 0, pending: 0, accepted: 0 });
  const [recs, setRecs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;
    if (user.role === "employer") { navigate("/employer"); return; }
    (async () => {
      try {
        const [s, r] = await Promise.all([
          api.get("/stats/candidate"),
          api.post("/ai/recommend"),
        ]);
        setStats(s.data);
        setRecs(r.data.jobs || []);
      } catch (e) {}
      finally { setLoading(false); }
    })();
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#09090B]" data-testid="candidate-dashboard">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="overline mb-3">// DASHBOARD / CANDIDATE</div>
        <h1 className="font-heading font-black text-4xl md:text-5xl tracking-tighter mb-2">Привет, {user.name.split(" ")[0]}</h1>
        <p className="text-zinc-400 mb-10">Вот что AI подобрал для тебя.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-zinc-800 mb-10">
          <div className="p-6 border-b md:border-b-0 md:border-r border-zinc-800">
            <div className="overline mb-2">// TOTAL APPS</div>
            <div className="font-heading font-black text-5xl">{stats.applications_total}</div>
          </div>
          <div className="p-6 border-b md:border-b-0 md:border-r border-zinc-800">
            <div className="overline mb-2">// PENDING</div>
            <div className="font-heading font-black text-5xl text-[#FACC15]">{stats.pending}</div>
          </div>
          <div className="p-6">
            <div className="overline mb-2">// ACCEPTED</div>
            <div className="font-heading font-black text-5xl text-[#22C55E]">{stats.accepted}</div>
          </div>
        </div>

        {!profile?.skills?.length && (
          <div className="card-surface p-6 mb-10 border-l-4 border-l-[#FACC15]">
            <div className="overline mb-2 text-[#FACC15]">// ACTION REQUIRED</div>
            <h3 className="font-heading font-bold text-xl mb-2">Заполни профиль для AI-подбора</h3>
            <p className="text-zinc-400 mb-4">Без навыков AI не сможет подобрать вакансии точно.</p>
            <Link to="/profile" className="btn-primary inline-block" data-testid="fill-profile-btn">Заполнить →</Link>
          </div>
        )}

        <div className="flex items-end justify-between mb-6">
          <div>
            <div className="overline mb-2">// AI RECOMMENDED</div>
            <h2 className="font-heading font-black text-3xl tracking-tighter">Подобрано для вас</h2>
          </div>
          <Link to="/jobs" className="font-mono text-xs uppercase tracking-widest text-[#FACC15] hover:underline">Все вакансии →</Link>
        </div>

        {loading ? (
          <div className="font-mono text-sm text-zinc-500 uppercase">Анализ...</div>
        ) : recs.length === 0 ? (
          <div className="card-surface p-12 text-center">
            <p className="text-zinc-400">Нет рекомендаций. Заполните профиль или посмотрите <Link to="/jobs" className="text-[#FACC15] hover:underline">все вакансии</Link>.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recs.map((job) => (
              <Link
                key={job.job_id}
                to={`/jobs/${job.job_id}`}
                className="card-surface p-6 hover:border-[#FACC15] transition-colors block"
                data-testid={`rec-job-${job.job_id}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="badge-mono">{job.employment_type}</span>
                  {job.remote && <span className="badge-mono text-[#FACC15] border-[#FACC15]">REMOTE</span>}
                </div>
                <h3 className="font-heading font-bold text-xl mb-1">{job.title}</h3>
                <div className="text-sm text-zinc-400">{job.company} · {job.location}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {(job.skills || []).slice(0, 4).map((s) => (
                    <span key={s} className="badge-mono">{s}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
