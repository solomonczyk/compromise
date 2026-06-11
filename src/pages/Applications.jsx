import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { api } from "../lib/api";

const statusColor = {
  pending: "text-[#FACC15] border-[#FACC15]",
  reviewed: "text-blue-400 border-blue-400",
  accepted: "text-[#22C55E] border-[#22C55E]",
  rejected: "text-red-400 border-red-400",
};

const statusLabel = {
  pending: "В ожидании",
  reviewed: "Просмотрено",
  accepted: "Принят",
  rejected: "Отклонён",
};

export default function Applications() {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get("/applications/my");
        setApps(res.data);
      } catch (e) {}
      finally { setLoading(false); }
    })();
  }, []);

  return (
    <div className="min-h-screen bg-[#09090B]" data-testid="applications-page">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="overline mb-3">// MY APPLICATIONS</div>
        <h1 className="font-heading font-black text-4xl tracking-tighter mb-8">Мои отклики</h1>

        {loading ? (
          <div className="font-mono text-sm text-zinc-500 uppercase">Загрузка...</div>
        ) : apps.length === 0 ? (
          <div className="card-surface p-12 text-center">
            <div className="overline mb-3">// EMPTY</div>
            <p className="text-zinc-400 mb-6">Вы ещё не откликались на вакансии.</p>
            <Link to="/jobs" className="btn-primary inline-block">Смотреть вакансии →</Link>
          </div>
        ) : (
          <div className="border border-zinc-800 divide-grid" data-testid="apps-list">
            {apps.map((a) => (
              <div key={a.application_id} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4" data-testid={`app-row-${a.application_id}`}>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`badge-mono ${statusColor[a.status] || ""}`}>{statusLabel[a.status]}</span>
                    <span className="font-mono text-xs text-zinc-500">{new Date(a.created_at).toLocaleDateString("ru")}</span>
                  </div>
                  <Link to={`/jobs/${a.job_id}`} className="font-heading font-bold text-xl hover:text-[#FACC15]">{a.job_title}</Link>
                  <div className="text-sm text-zinc-400">{a.company}</div>
                </div>
                <Link to={`/chat/${a.application_id}`} className="btn-ghost text-xs" data-testid={`chat-btn-${a.application_id}`}>Открыть чат →</Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
