import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../lib/auth";

export const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const loc = useLocation();

  const linkCls = (path) =>
    `font-mono text-xs uppercase tracking-widest px-3 py-2 transition-colors ${
      loc.pathname === path ? "text-[#FACC15]" : "text-zinc-400 hover:text-white"
    }`;

  return (
    <header className="border-b border-zinc-800 bg-[#09090B] sticky top-0 z-50" data-testid="navbar">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2" data-testid="logo-link">
          <div className="w-8 h-8 bg-[#FACC15] flex items-center justify-center">
            <span className="font-heading font-black text-[#09090B] text-lg">J</span>
          </div>
          <span className="font-heading font-black text-xl tracking-tight">JobPulse<span className="text-[#FACC15]">.</span></span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <Link to="/jobs" className={linkCls("/jobs")} data-testid="nav-jobs">Вакансии</Link>
          {user && user.role === "candidate" && (
            <>
              <Link to="/dashboard" className={linkCls("/dashboard")} data-testid="nav-dashboard">Дашборд</Link>
              <Link to="/profile" className={linkCls("/profile")} data-testid="nav-profile">Профиль</Link>
              <Link to="/applications" className={linkCls("/applications")} data-testid="nav-applications">Отклики</Link>
            </>
          )}
          {user && user.role === "employer" && (
            <>
              <Link to="/employer" className={linkCls("/employer")} data-testid="nav-employer">Кабинет</Link>
              <Link to="/employer/jobs/new" className={linkCls("/employer/jobs/new")} data-testid="nav-new-job">+ Вакансия</Link>
            </>
          )}
        </nav>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <span className="hidden sm:inline font-mono text-xs text-zinc-500 uppercase" data-testid="nav-user-email">{user.email}</span>
              <button onClick={logout} className="btn-ghost text-xs" data-testid="logout-btn">Выйти</button>
            </>
          ) : (
            <>
              <button onClick={() => navigate("/login")} className="btn-ghost text-xs" data-testid="nav-login-btn">Войти</button>
              <button onClick={() => navigate("/register")} className="btn-primary text-xs" data-testid="nav-register-btn">Начать</button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
