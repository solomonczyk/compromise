import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { api } from "../lib/api";
import { useAuth } from "../lib/auth";
import { toast } from "sonner";

export default function JobDetail() {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showApply, setShowApply] = useState(false);
  const [coverLetter, setCoverLetter] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [matchResult, setMatchResult] = useState(null);
  const [applying, setApplying] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get(`/jobs/${jobId}`);
        setJob(res.data);
      } catch (e) {
        toast.error("Вакансия не найдена");
      } finally {
        setLoading(false);
      }
    })();
  }, [jobId]);

  const onApply = async () => {
    if (!user) { navigate("/login"); return; }
    if (user.role !== "candidate") { toast.error("Только соискатели могут откликаться"); return; }
    setApplying(true);
    try {
      await api.post("/applications", { job_id: jobId, cover_letter: coverLetter });
      toast.success("Отклик отправлен");
      setShowApply(false);
      navigate("/applications");
    } catch (e) {
      toast.error(e.response?.data?.detail || "Не удалось откликнуться");
    } finally {
      setApplying(false);
    }
  };

  const onAIMatch = async () => {
    if (!user) { navigate("/login"); return; }
    setAiLoading(true);
    try {
      const res = await api.post("/ai/match", { job_id: jobId });
      setMatchResult(res.data);
    } catch (e) {
      toast.error("AI ошибка. Заполните профиль.");
    } finally {
      setAiLoading(false);
    }
  };

  const onGenerateCover = async () => {
    setAiLoading(true);
    try {
      const res = await api.post("/ai/cover-letter", { job_id: jobId });
      setCoverLetter(res.data.cover_letter);
      toast.success("Cover letter сгенерирован");
    } catch (e) {
      toast.error("AI ошибка");
    } finally {
      setAiLoading(false);
    }
  };

  if (loading) return <div className="min-h-screen bg-[#09090B]"><Navbar /><div className="p-12 font-mono text-sm text-zinc-500 uppercase max-w-7xl mx-auto">Загрузка...</div></div>;
  if (!job) return null;

  return (
    <div className="min-h-screen bg-[#09090B]" data-testid="job-detail-page">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="overline mb-3">// JOB / {job.job_id}</div>
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="badge-mono">{job.employment_type}</span>
          {job.remote && <span className="badge-mono text-[#FACC15] border-[#FACC15]">REMOTE</span>}
          <span className="badge-mono">{new Date(job.created_at).toLocaleDateString("ru")}</span>
        </div>
        <h1 className="font-heading font-black text-4xl md:text-5xl tracking-tighter">{job.title}</h1>
        <div className="text-xl text-zinc-400 mt-2">{job.company} · {job.location}</div>
        {(job.salary_min || job.salary_max) && (
          <div className="font-heading font-bold text-2xl text-[#FACC15] mt-3">
            {job.salary_min ? `${(job.salary_min / 1000).toFixed(0)}k` : ""}
            {job.salary_min && job.salary_max ? " — " : ""}
            {job.salary_max ? `${(job.salary_max / 1000).toFixed(0)}k ₽` : ""}
          </div>
        )}

        <div className="flex flex-wrap gap-3 mt-8">
          {user?.role === "candidate" && (
            <>
              <button onClick={() => setShowApply(true)} className="btn-primary" data-testid="apply-btn">Откликнуться</button>
              <button onClick={onAIMatch} disabled={aiLoading} className="btn-ghost" data-testid="ai-match-btn">
                {aiLoading ? "AI работает..." : "🤖 AI Match Score"}
              </button>
            </>
          )}
          {!user && (
            <button onClick={() => navigate("/login")} className="btn-primary" data-testid="login-to-apply-btn">Войти, чтобы откликнуться</button>
          )}
        </div>

        {matchResult && (
          <div className="card-surface p-6 mt-8" data-testid="match-result">
            <div className="flex items-center justify-between mb-4">
              <div className="overline">// AI MATCH ANALYSIS</div>
              <div className="font-heading font-black text-4xl text-[#FACC15]">{matchResult.score}%</div>
            </div>
            <p className="text-zinc-300 mb-4">{matchResult.summary}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="overline mb-2 text-[#22C55E]">→ Сильные стороны</div>
                <ul className="text-sm text-zinc-400 space-y-1">
                  {(matchResult.strengths || []).map((s, i) => <li key={i}>• {s}</li>)}
                </ul>
              </div>
              <div>
                <div className="overline mb-2 text-[#EF4444]">→ Что подтянуть</div>
                <ul className="text-sm text-zinc-400 space-y-1">
                  {(matchResult.gaps || []).map((g, i) => <li key={i}>• {g}</li>)}
                </ul>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="md:col-span-2 card-surface p-6">
            <div className="overline mb-4">// DESCRIPTION</div>
            <div className="text-zinc-300 leading-relaxed whitespace-pre-wrap">{job.description}</div>

            {(job.requirements && job.requirements.length > 0) && (
              <>
                <div className="overline mt-8 mb-4">// REQUIREMENTS</div>
                <ul className="space-y-2 text-zinc-300">
                  {job.requirements.map((r, i) => <li key={i} className="flex gap-3"><span className="text-[#FACC15]">→</span>{r}</li>)}
                </ul>
              </>
            )}
          </div>
          <div className="card-surface p-6">
            <div className="overline mb-4">// STACK</div>
            <div className="flex flex-wrap gap-2">
              {(job.skills || []).map((s) => <span key={s} className="badge-mono">{s}</span>)}
            </div>
          </div>
        </div>
      </div>

      {showApply && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-6 z-50" onClick={() => setShowApply(false)}>
          <div className="card-surface p-8 max-w-2xl w-full" onClick={(e) => e.stopPropagation()} data-testid="apply-modal">
            <div className="overline mb-3">// APPLY</div>
            <h2 className="font-heading font-bold text-2xl mb-6">Отклик на {job.title}</h2>
            <textarea
              placeholder="Cover letter (необязательно)"
              className="input-field min-h-[200px] font-mono text-sm"
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
              data-testid="cover-letter-input"
            />
            <div className="flex flex-wrap gap-3 mt-4">
              <button onClick={onApply} disabled={applying} className="btn-primary" data-testid="submit-apply-btn">
                {applying ? "Отправка..." : "Отправить отклик"}
              </button>
              <button onClick={onGenerateCover} disabled={aiLoading} className="btn-ghost" data-testid="ai-cover-btn">
                {aiLoading ? "AI..." : "🤖 AI сгенерировать"}
              </button>
              <button onClick={() => setShowApply(false)} className="btn-ghost" data-testid="cancel-apply-btn">Отмена</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
