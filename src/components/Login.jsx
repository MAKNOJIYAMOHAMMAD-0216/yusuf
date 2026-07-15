import React, { useState } from 'react';
import { UserCircle, Lock, AlertCircle, ArrowRight, BookOpen } from 'lucide-react';

export default function Login({ onLogin }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulated network delay for a premium feel
    setTimeout(() => {
      if (name.toLowerCase() === 'yusuf' && password === 'farid') {
        onLogin();
      } else {
        setError('Invalid name or password. Please try again.');
        setIsLoading(false);
      }
    }, 600);
  };

  return (
    <div className="min-h-screen w-full flex bg-[#F8FAFC] font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Left Side - Branding & Visual (Hidden on mobile) */}
      <div className="hidden lg:flex w-1/2 bg-slate-900 relative overflow-hidden flex-col justify-between p-12">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-slate-900 z-10 pointer-events-none"></div>
        
        {/* Abstract shapes for background */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full border-[1px] border-white/5 opacity-20"></div>
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full border-[1px] border-white/5 opacity-30"></div>
        
        <div className="relative z-20 flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center">
            <BookOpen className="text-white" size={20} />
          </div>
          <span className="text-white font-bold text-xl tracking-tight">Student Portal</span>
        </div>

        <div className="relative z-20 max-w-md">
          <h2 className="text-4xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            Manage your syllabus seamlessly.
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            The all-in-one tracker designed for students to organize subjects, monitor chapter progress, and achieve academic goals.
          </p>
        </div>
        
        <div className="relative z-20 flex items-center gap-4">
          <div className="flex -space-x-3">
            <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-700"></div>
            <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-indigo-500 flex items-center justify-center text-xs text-white font-bold">YF</div>
          </div>
          <span className="text-slate-400 font-medium text-sm">Created for Yusuf Farid</span>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 relative">
        <div className="w-full max-w-[420px] space-y-8">
          
          {/* Mobile Header (Only visible when Left side is hidden) */}
          <div className="lg:hidden flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-md shadow-indigo-200">
              <BookOpen className="text-white" size={20} />
            </div>
            <span className="text-slate-900 font-bold text-xl tracking-tight">Student Portal</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Welcome back</h1>
            <p className="text-slate-500 font-medium">Please enter your details to sign in.</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-100 flex items-start gap-3 text-rose-600 animate-in fade-in slide-in-from-top-2 duration-300">
              <AlertCircle size={20} className="shrink-0 mt-0.5" />
              <span className="text-sm font-medium">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Name</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-600 transition-colors">
                  <UserCircle size={18} strokeWidth={2.5} />
                </div>
                <input 
                  type="text" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-900 placeholder:text-slate-400 shadow-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-slate-700">Password</label>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-600 transition-colors">
                  <Lock size={18} strokeWidth={2.5} />
                </div>
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-900 placeholder:text-slate-400 shadow-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 group transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed shadow-sm shadow-slate-900/20"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Footer Info */}
          <p className="text-center text-sm font-medium text-slate-500 pt-6">
            Secure portal access for academic tracking.
          </p>

        </div>
      </div>
    </div>
  );
}
