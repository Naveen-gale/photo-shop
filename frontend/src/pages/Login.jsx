import React, { useState } from "react";
import { Lock, User, Eye, EyeOff, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({ user: "", pass: "" });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: credentials.user, password: credentials.pass }),
      });
      const data = await response.json();

      if (data.success) {
        navigate("/dashboard");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Check console.");
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#151515] flex items-center justify-center p-6 relative overflow-hidden">

      {/* Background Decorative Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#9bc7c5] opacity-[0.07] blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-orange-600 opacity-[0.07] blur-[120px] rounded-full"></div>

      {/* Login Card */}
      <div className="w-full max-w-md z-10">
        <div className="bg-[#1f1f1f]/80 backdrop-blur-2xl border border-white/10 p-10 rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">

          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600/10 border border-orange-500/20 rounded-2xl text-orange-500 mb-4">
              <ShieldCheck size={32} />
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">Admin Portal</h1>
            <p className="text-gray-500 text-sm mt-2">Restricted Access System</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Username Field */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Username</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#9bc7c5] transition-colors">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  placeholder="admin_naveen"
                  className="w-full bg-[#151515] border border-white/5 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-[#9bc7c5]/50 focus:ring-4 focus:ring-[#9bc7c5]/5 transition-all"
                  onChange={(e) => setCredentials({ ...credentials, user: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Secret Key</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-orange-500 transition-colors">
                  <Lock size={18} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full bg-[#151515] border border-white/5 rounded-xl py-4 pl-12 pr-12 text-white focus:outline-none focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/5 transition-all"
                  onChange={(e) => setCredentials({ ...credentials, pass: e.target.value })}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-900/20 transition-all active:scale-[0.98]"
              >
                Unlock Dashboard
              </button>
            </div>
          </form>

          {/* Footer Link */}
          <div className="mt-8 text-center">
            <button
              onClick={() => navigate("/")}
              className="text-gray-500 hover:text-[#9bc7c5] text-sm transition-colors"
            >
              ← Back to Main Site
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;