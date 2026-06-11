import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { api } from "../lib/api";
import { useAuth } from "../lib/auth";
import { toast } from "sonner";

export default function Profile() {
  const { user, profile: initProfile, setProfile: setGlobalProfile, checkAuth } = useAuth();
  const [profile, setProfile] = useState({
    title: "", bio: "", location: "", skills: [], experience: [], education: [],
    company: "", company_website: "", company_description: "",
  });
  const [skillInput, setSkillInput] = useState("");
  const [resumeText, setResumeText] = useState("");
  const [genLoading, setGenLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (initProfile) {
      setProfile({
        title: initProfile.title || "",
        bio: initProfile.bio || "",
        location: initProfile.location || "",
        skills: initProfile.skills || [],
        experience: initProfile.experience || [],
        education: initProfile.education || [],
        company: initProfile.company || "",
        company_website: initProfile.company_website || "",
        company_description: initProfile.company_description || "",
      });
    }
  }, [initProfile]);

  const addSkill = () => {
    if (!skillInput.trim()) return;
    setProfile({ ...profile, skills: [...profile.skills, skillInput.trim().toLowerCase()] });
    setSkillInput("");
  };

  const removeSkill = (s) => setProfile({ ...profile, skills: profile.skills.filter((x) => x !== s) });

  const addExperience = () => {
    setProfile({ ...profile, experience: [...profile.experience, { company: "", role: "", period: "", description: "" }] });
  };
  const updateExp = (i, k, v) => {
    const exp = [...profile.experience]; exp[i][k] = v;
    setProfile({ ...profile, experience: exp });
  };
  const removeExp = (i) => {
    const exp = [...profile.experience]; exp.splice(i, 1);
    setProfile({ ...profile, experience: exp });
  };

  const onSave = async () => {
    setSaving(true);
    try {
      const res = await api.put("/profile", profile);
      setGlobalProfile(res.data);
      toast.success("Профиль обновлён");
      await checkAuth();
    } catch (e) {
      toast.error("Ошибка сохранения");
    } finally {
      setSaving(false);
    }
  };

  const onGenerateResume = async () => {
    setGenLoading(true);
    try {
      const res = await api.post("/ai/resume", { target_role: profile.title });
      setResumeText(res.data.resume);
      toast.success("Резюме сгенерировано");
    } catch (e) {
      toast.error("AI ошибка");
    } finally {
      setGenLoading(false);
    }
  };

  if (!user) return null;
  const isEmployer = user.role === "employer";

  return (
    <div className="min-h-screen bg-[#09090B]" data-testid="profile-page">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="overline mb-3">// PROFILE / {user.role.toUpperCase()}</div>
        <h1 className="font-heading font-black text-4xl md:text-5xl tracking-tighter mb-2">{user.name}</h1>
        <p className="text-zinc-400 mb-10">{user.email}</p>

        <div className="space-y-8">
          {isEmployer ? (
            <div className="card-surface p-6 space-y-3">
              <div className="overline mb-3">// COMPANY</div>
              <input type="text" placeholder="Название компании" className="input-field" value={profile.company} onChange={(e) => setProfile({ ...profile, company: e.target.value })} data-testid="profile-company-input" />
              <input type="text" placeholder="Сайт" className="input-field" value={profile.company_website} onChange={(e) => setProfile({ ...profile, company_website: e.target.value })} data-testid="profile-website-input" />
              <textarea placeholder="О компании" className="input-field min-h-[120px]" value={profile.company_description} onChange={(e) => setProfile({ ...profile, company_description: e.target.value })} data-testid="profile-company-desc-input" />
            </div>
          ) : (
            <>
              <div className="card-surface p-6 space-y-3">
                <div className="overline mb-3">// BASICS</div>
                <input type="text" placeholder="Должность (напр. Senior Python Developer)" className="input-field" value={profile.title} onChange={(e) => setProfile({ ...profile, title: e.target.value })} data-testid="profile-title-input" />
                <input type="text" placeholder="Локация" className="input-field" value={profile.location} onChange={(e) => setProfile({ ...profile, location: e.target.value })} data-testid="profile-location-input" />
                <textarea placeholder="О себе" className="input-field min-h-[120px]" value={profile.bio} onChange={(e) => setProfile({ ...profile, bio: e.target.value })} data-testid="profile-bio-input" />
              </div>

              <div className="card-surface p-6">
                <div className="overline mb-3">// SKILLS</div>
                <div className="flex gap-2 mb-4">
                  <input type="text" placeholder="напр. python, fastapi, postgres" className="input-field" value={skillInput} onChange={(e) => setSkillInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())} data-testid="profile-skill-input" />
                  <button onClick={addSkill} className="btn-ghost" data-testid="add-skill-btn">+ Добавить</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((s) => (
                    <button key={s} onClick={() => removeSkill(s)} className="badge-mono hover:text-[#FACC15]" data-testid={`skill-${s}`}>
                      {s} ×
                    </button>
                  ))}
                </div>
              </div>

              <div className="card-surface p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="overline">// EXPERIENCE</div>
                  <button onClick={addExperience} className="btn-ghost text-xs" data-testid="add-exp-btn">+ Добавить опыт</button>
                </div>
                <div className="space-y-4">
                  {profile.experience.map((exp, i) => (
                    <div key={i} className="border border-zinc-800 p-4 space-y-2">
                      <div className="flex justify-between">
                        <span className="font-mono text-xs text-zinc-500 uppercase">Запись #{i + 1}</span>
                        <button onClick={() => removeExp(i)} className="font-mono text-xs text-red-500 uppercase">Удалить</button>
                      </div>
                      <input type="text" placeholder="Компания" className="input-field" value={exp.company} onChange={(e) => updateExp(i, "company", e.target.value)} />
                      <input type="text" placeholder="Должность" className="input-field" value={exp.role} onChange={(e) => updateExp(i, "role", e.target.value)} />
                      <input type="text" placeholder="Период (2021 — 2024)" className="input-field" value={exp.period} onChange={(e) => updateExp(i, "period", e.target.value)} />
                      <textarea placeholder="Чем занимался" className="input-field min-h-[80px]" value={exp.description} onChange={(e) => updateExp(i, "description", e.target.value)} />
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          <div className="flex flex-wrap gap-3">
            <button onClick={onSave} disabled={saving} className="btn-primary" data-testid="save-profile-btn">
              {saving ? "Сохранение..." : "Сохранить →"}
            </button>
            {!isEmployer && (
              <button onClick={onGenerateResume} disabled={genLoading} className="btn-ghost" data-testid="generate-resume-btn">
                {genLoading ? "AI работает..." : "🤖 AI сгенерировать резюме"}
              </button>
            )}
          </div>

          {resumeText && (
            <div className="card-surface p-6" data-testid="resume-result">
              <div className="overline mb-3">// AI GENERATED RESUME</div>
              <pre className="whitespace-pre-wrap font-mono text-sm text-zinc-300 leading-relaxed">{resumeText}</pre>
              <button onClick={() => { navigator.clipboard.writeText(resumeText); toast.success("Скопировано"); }} className="btn-ghost mt-4">Скопировать</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
