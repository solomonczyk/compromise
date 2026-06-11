import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { api } from "../lib/api";
import { useAuth } from "../lib/auth";
import { toast } from "sonner";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { checkAuth } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post("/auth/login", form);
      localStorage.setItem("jp_token", res.data.token);
      await checkAuth();
      toast.success("Добро пожаловать");
      navigate(res.data.user.role === "employer" ? "/employer" : "/dashboard");
    } catch (err) {
      toast.error(err.response?.data?.detail || "Ошибка входа");
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
    <div className="min-h-screen bg-[#09090B] flex items-center justify-center p-6" data-testid="login-page">
      <div className="w-full max-w-md">
        <Link to="/" className="flex items-center gap-2 mb-12">
          <div className="w-8 h-8 bg-[#FACC15] flex items-center justify-center">
            <span className="font-heading font-black text-[#09090B] text-lg">J</span>
          </div>
          <span className="font-heading font-black text-xl">JobPulse<span className="text-[#FACC15]">.</span></span>
        </Link>

        <div className="overline mb-3">// SIGN IN</div>
        <h1 className="font-heading font-black text-4xl tracking-tighter mb-2">С возвращением.</h1>
        <p className="text-sm text-zinc-400 mb-8">Нет аккаунта? <Link to="/register" className="text-[#FACC15] hover:underline" data-testid="register-link">Зарегистрироваться</Link></p>

        <form onSubmit={onSubmit} className="space-y-3">
          <input
            type="email"
            required
            placeholder="email@example.com"
            className="input-field"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            data-testid="login-email-input"
          />
          <input
            type="password"
            required
            placeholder="Пароль"
            className="input-field"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            data-testid="login-password-input"
          />
          <button type="submit" disabled={loading} className="btn-primary w-full mt-3" data-testid="login-submit-btn">
            {loading ? "Вход..." : "Войти →"}
          </button>
        </form>

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-zinc-800" />
          <span className="font-mono text-xs text-zinc-500 uppercase">или</span>
          <div className="flex-1 h-px bg-zinc-800" />
        </div>

        <button onClick={onGoogle} className="btn-ghost w-full" data-testid="google-login-btn">
          Continue with Google
        </button>
      </div>
    </div>
  );
}
