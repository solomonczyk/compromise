import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { api } from "../lib/api";
import { useAuth } from "../lib/auth";
import { toast } from "sonner";

export default function JobCreate() {
  const { user, profile } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    company: profile?.company || user?.name || "",
    location: "",
    employment_type: "full-time",
    salary_min: "",
    salary_max: "",
    description: "",
    requirements: "",
    skills: "",
    remote: false,
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = {
        ...form,
        salary_min: form.salary_min ? Number(form.salary_min) : null,
        salary_max: form.salary_max ? Number(form.salary_max) : null,
        requirements: form.requirements.split("\n").map((s) => s.trim()).filter(Boolean),
        skills: form.skills.split(",").map((s) => s.trim().toLowerCase()).filter(Boolean),
      };
      await api.post("/jobs", payload);
      toast.success("Вакансия опубликована");
      navigate("/employer");
    } catch (e) {
      toast.error(e.response?.data?.detail || "Ошибка");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#09090B]" data-testid="job-create-page">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="overline mb-3">// NEW POSTING</div>
        <h1 className="font-heading font-black text-4xl tracking-tighter mb-8">Новая вакансия</h1>
        <form onSubmit={onSubmit} className="space-y-3">
          <input type="text" required placeholder="Название (Senior Python Developer)" className="input-field" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} data-testid="job-title-input" />
          <input type="text" required placeholder="Компания" className="input-field" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} data-testid="job-company-input" />
          <input type="text" required placeholder="Локация" className="input-field" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} data-testid="job-location-input" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <select className="input-field" value={form.employment_type} onChange={(e) => setForm({ ...form, employment_type: e.target.value })} data-testid="job-type-select">
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
              <option value="internship">Internship</option>
              <option value="remote">Remote</option>
            </select>
            <input type="number" placeholder="Зарплата от" className="input-field" value={form.salary_min} onChange={(e) => setForm({ ...form, salary_min: e.target.value })} data-testid="job-salary-min-input" />
            <input type="number" placeholder="Зарплата до" className="input-field" value={form.salary_max} onChange={(e) => setForm({ ...form, salary_max: e.target.value })} data-testid="job-salary-max-input" />
          </div>

          <label className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-400 cursor-pointer">
            <input type="checkbox" checked={form.remote} onChange={(e) => setForm({ ...form, remote: e.target.checked })} data-testid="job-remote-checkbox" />
            Удалённая работа
          </label>

          <textarea required placeholder="Описание вакансии" className="input-field min-h-[180px]" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} data-testid="job-desc-input" />
          <textarea placeholder="Требования (каждое с новой строки)" className="input-field min-h-[120px]" value={form.requirements} onChange={(e) => setForm({ ...form, requirements: e.target.value })} data-testid="job-reqs-input" />
          <input type="text" placeholder="Навыки через запятую (python, fastapi, postgres)" className="input-field" value={form.skills} onChange={(e) => setForm({ ...form, skills: e.target.value })} data-testid="job-skills-input" />

          <button type="submit" disabled={loading} className="btn-primary mt-3" data-testid="submit-job-btn">
            {loading ? "Публикация..." : "Опубликовать →"}
          </button>
        </form>
      </div>
    </div>
  );
}
