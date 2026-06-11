import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { api } from "../lib/api";
import { toast } from "sonner";

const statusLabel = {
  pending: "В ожидании",
  reviewed: "Просмотрено",
  accepted: "Принят",
  rejected: "Отклонён",
};

export default function Applicants() {
  const { jobId } = useParams();
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    try {
      const res = await api.get(`/applications/job/${jobId}`);
      setApps(res.data);
    } catch (e) { toast.error("Ошибка"); }
    finally { setLoading(false); }
  };

  useEffect(() => { load(); /* eslint-disable-next-line */ }, [jobId]);

  const updateStatus = async (appId, status) => {
    try {
      await api.put(`/applications/${appId}/status`, { status });
      toast.success("Обновлено");
      load();
    } catch (e) { toast.error("Ошибка"); }
  };

  return (
    <div className="min-h-screen bg-[#09090B]" data-testid="applicants-page">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="overline mb-3">// APPLICANTS / {jobId}</div>
        <h1 className="font-heading font-black text-4xl tracking-tighter mb-8">Отклики</h1>

        {loading ? (
          <div className="font-mono text-sm text-zinc-500 uppercase">Загрузка...</div>
        ) : apps.length === 0 ? (
          <div className="card-surface p-12 text-center">
            <p className="text-zinc-400">Откликов пока нет.</p>
          </div>
        ) : (
          <div className="space-y-4" data-testid="applicants-list">
            {apps.map((a) => (
              <div key={a.application_id} className="card-surface p-6" data-testid={`applicant-${a.application_id}`}>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="badge-mono">{statusLabel[a.status]}</span>
                      <span className="font-mono text-xs text-zinc-500">{new Date(a.created_at).toLocaleDateString("ru")}</span>
                    </div>
                    <h3 className="font-heading font-bold text-xl">{a.candidate_name}</h3>
                    {a.candidate_profile && (
                      <>
                        <div className="text-sm text-zinc-400 mt-1">
                          {a.candidate_profile.title || "—"} {a.candidate_profile.location ? `· ${a.candidate_profile.location}` : ""}
                        </div>
                        {a.candidate_profile.bio && <p className="text-zinc-300 text-sm mt-3">{a.candidate_profile.bio}</p>}
                        <div className="mt-3 flex flex-wrap gap-2">
                          {(a.candidate_profile.skills || []).slice(0, 8).map((s) => (
                            <span key={s} className="badge-mono">{s}</span>
                          ))}
                        </div>
                      </>
                    )}
                    {a.cover_letter && (
                      <div className="mt-4 border-l-2 border-[#FACC15] pl-4">
                        <div className="overline mb-2">// COVER LETTER</div>
                        <p className="text-sm text-zinc-300 whitespace-pre-wrap">{a.cover_letter}</p>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 shrink-0">
                    <Link to={`/chat/${a.application_id}`} className="btn-ghost text-xs text-center" data-testid={`chat-${a.application_id}`}>Чат →</Link>
                    <select
                      value={a.status}
                      onChange={(e) => updateStatus(a.application_id, e.target.value)}
                      className="input-field text-xs"
                      data-testid={`status-select-${a.application_id}`}
                    >
                      <option value="pending">В ожидании</option>
                      <option value="reviewed">Просмотрено</option>
                      <option value="accepted">Принять</option>
                      <option value="rejected">Отклонить</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
