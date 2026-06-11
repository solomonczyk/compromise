import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import { AuthProvider, useAuth } from "./lib/auth";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthCallback from "./pages/AuthCallback";
import Jobs from "./pages/Jobs";
import JobDetail from "./pages/JobDetail";
import CandidateDashboard from "./pages/CandidateDashboard";
import Profile from "./pages/Profile";
import Applications from "./pages/Applications";
import Chat from "./pages/Chat";
import EmployerDashboard from "./pages/EmployerDashboard";
import JobCreate from "./pages/JobCreate";
import Applicants from "./pages/Applicants";

const ProtectedRoute = ({ children, role }) => {
  const { user, loading } = useAuth();
  if (loading) return <div className="min-h-screen bg-[#09090B] flex items-center justify-center font-mono text-sm text-zinc-500 uppercase">Загрузка...</div>;
  if (!user) return <Navigate to="/login" replace />;
  if (role && user.role !== role) return <Navigate to={user.role === "employer" ? "/employer" : "/dashboard"} replace />;
  return children;
};

const AppRouter = () => {
  const location = useLocation();
  // Handle session_id in URL fragment FIRST (synchronously during render)
  if (location.hash?.includes("session_id=")) {
    return <AuthCallback />;
  }
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/jobs/:jobId" element={<JobDetail />} />
      <Route path="/dashboard" element={<ProtectedRoute role="candidate"><CandidateDashboard /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      <Route path="/applications" element={<ProtectedRoute role="candidate"><Applications /></ProtectedRoute>} />
      <Route path="/chat/:appId" element={<ProtectedRoute><Chat /></ProtectedRoute>} />
      <Route path="/employer" element={<ProtectedRoute role="employer"><EmployerDashboard /></ProtectedRoute>} />
      <Route path="/employer/jobs/new" element={<ProtectedRoute role="employer"><JobCreate /></ProtectedRoute>} />
      <Route path="/employer/jobs/:jobId/applicants" element={<ProtectedRoute role="employer"><Applicants /></ProtectedRoute>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRouter />
        <Toaster theme="dark" position="top-right" />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
