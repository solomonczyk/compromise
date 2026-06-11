import React, { useState } from "react";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { api } from "../lib/api";
import { useAuth } from "../lib/auth";
import { toast } from "sonner";

export default function Register() {
  const [params] = useSearchParams();
  const initialRole = params.get("role") === "employer" ? "employer" : "candidate";
  const [form, setForm] = useState({ email: "", password: "", name: "", role: initialRole });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { checkAuth } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post("/auth/register", form);
      localStorage.setItem("jp_token", res.data.token);
      await checkAuth();
      toast.success("Аккаунт создан");
      navigate(form.role === "employer" ? "/employer" : "/dashboard");
    } catch (err) {
      toast.error(err.response?.data?.detail || "Ошибка регистрации");
    } finally {
      setLoading(false);
    }
  };

  const onGoogle = () => {
    // REMINDER: DO NOT HARDCODE THE URL, OR ADD ANY FALLBACKS OR REDIRECT URLS, THIS BREAKS THE AUTH
    const redirectUrl = window.location.origin + "/dashboard";
    window.location.href = `https://auth.emergentagent.com/?redirect=${encodeURIComponent(redirectUrl)}`;
  };

  return (
    <div className="min-h-screen bg-[#09090B] grid grid-cols-1 md:grid-cols-2" data-testid="register-page">
      <div className="hidden md:flex flex-col justify-between p-12 border-r border-zinc-800 grid-bg relative">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#FACC15] flex items-center justify-center">
            <span className="font-heading font-black text-[#09090B] text-lg">J</span>
          </div>
          <span className="font-heading font-black text-xl">JobPulse<span className="text-[#FACC15]">.</span></span>
        </Link>
        <div>
          <div className="overline mb-4">// CREATE ACCOUNT</div>
          <h1 className="font-heading font-black text-5xl tracking-tighter leading-tight">
            Найди работу.<br/>
            <span className="text-[#FACC15]">За один вечер.</span>
          </h1>
          <p className="mt-6 text-zinc-400 max-w-md">
            AI подберёт первые 6 вакансий сразу после регистрации. Резюме сгенерируется автоматически.
          </p>
        </div>
        <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
          → Free for candidates  → No CC required  → 30s setup
        </div>
      </div>

      <div className="flex items-center justify-center p-6 md:p-12">
        <form onSubmit={onSubmit} className="w-full max-w-md space-y-6">
          <div>
            <div className="overline mb-3">// 01 / REGISTER</div>
            <h2 className="font-heading font-black text-3xl tracking-tighter mb-2">Создать аккаунт</h2>
            <p className="text-sm text-zinc-400">Уже есть? <Link to="/login" className="text-[#FACC15] hover:underline" data-testid="login-link">Войти</Link></p>
          </div>

          <div className="grid grid-cols-2 gap-0 border border-zinc-800">
            <button
              type="button"
              onClick={() => setForm({ ...form, role: "candidate" })}
              className={`py-3 font-mono text-xs uppercase tracking-widest transition-colors ${
                form.role === "candidate" ? "bg-[#FACC15] text-[#09090B]" : "text-zinc-400 hover:text-white"
              }`}
              data-testid="role-candidate-btn"
            >
              Соискатель
            </button>
            <button
              type="button"
              onClick={() => setForm({ ...form, role: "employer" })}
              className={`py-3 font-mono text-xs uppercase tracking-widest transition-colors border-l border-zinc-800 ${
                form.role === "employer" ? "bg-[#FACC15] text-[#09090B]" : "text-zinc-400 hover:text-white"
              }`}
              data-testid="role-employer-btn"
            >
              Работодатель
            </button>
          </div>

          <div className="space-y-3">
            <input
              type="text"
              required
              placeholder="Имя или название компании"
              className="input-field"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              data-testid="register-name-input"
            />
            <input
              type="email"
              required
              placeholder="email@example.com"
              className="input-field"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              data-testid="register-email-input"
            />
            <input
              type="password"
              required
              minLength={6}
              placeholder="Пароль (минимум 6)"
              className="input-field"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              data-testid="register-password-input"
            />
          </div>

          <button type="submit" disabled={loading} className="btn-primary w-full" data-testid="register-submit-btn">
            {loading ? "Создание..." : "Создать аккаунт →"}
          </button>

          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-zinc-800" />
            <span className="font-mono text-xs text-zinc-500 uppercase">или</span>
            <div className="flex-1 h-px bg-zinc-800" />
          </div>

          <button type="button" onClick={onGoogle} className="btn-ghost w-full" data-testid="google-register-btn">
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
}
