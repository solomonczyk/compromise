import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../lib/api";
import { useAuth } from "../lib/auth";

export default function AuthCallback() {
  const navigate = useNavigate();
  const { checkAuth } = useAuth();
  const hasProcessed = React.useRef(false);

  useEffect(() => {
    if (hasProcessed.current) return;
    hasProcessed.current = true;

    const hash = window.location.hash;
    const m = hash.match(/session_id=([^&]+)/);
    if (!m) {
      navigate("/login");
      return;
    }
    const session_id = m[1];

    (async () => {
      try {
        await api.post("/auth/google/session", null, {
          headers: { "X-Session-ID": session_id },
        });
        await checkAuth();
        // clean hash
        window.history.replaceState(null, "", window.location.pathname);
        navigate("/dashboard");
      } catch (e) {
        console.error(e);
        navigate("/login");
      }
    })();
  }, [navigate, checkAuth]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#09090B]" data-testid="auth-callback">
      <div className="font-mono text-sm text-zinc-400 uppercase tracking-widest">Авторизация...</div>
    </div>
  );
}
