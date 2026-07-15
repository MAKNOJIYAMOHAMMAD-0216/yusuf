import React from 'react';
import { LayoutDashboard, CheckCircle2, Circle, Clock, Check, Menu } from 'lucide-react';

export default function Timetable({ activeSubject, currentChapters, updateStatus, setIsMobileMenuOpen }) {
  const completedChapters = currentChapters.filter(ch => ch.status === 'complete').length;
  const totalChapters = currentChapters.length;
  const progressPercentage = totalChapters === 0 ? 0 : Math.round((completedChapters / totalChapters) * 100);

  const getStatusBadgeClass = (status) => {
    switch(status) {
      case 'complete': return 'bg-emerald-50 text-emerald-600 border-emerald-200';
      case 'incomplete': return 'bg-rose-50 text-rose-600 border-rose-200';
      default: return 'bg-amber-50 text-amber-600 border-amber-200';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'complete': return <CheckCircle2 size={16} className="text-emerald-500" />;
      case 'incomplete': return <Circle size={16} className="text-rose-500" />;
      default: return <Clock size={16} className="text-amber-500" />;
    }
  };

  const getSubjectTitle = () => {
    switch(activeSubject) {
      case 'Hindi': return 'अनुक्रमणिका (Hindi Index)';
      case 'Gujarati': return 'અનુક્રમણિકા (Gujarati Index)';
      case 'EnglishGrammar': return 'English Grammar';
      case 'English': return 'English Literature';
      case 'Maths': return 'Mathematics';
      case 'GK': return 'General Knowledge';
      case 'Science': return 'Science';
      default: return 'Syllabus Tracker';
    }
  };

  return (
    <div className="flex-1 bg-slate-50 overflow-y-auto h-screen relative">
      {/* Decorative top background */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-indigo-50/80 to-transparent pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 md:px-8 py-6 md:py-10">
        
        {/* Mobile Header Menu Button */}
        <div className="md:hidden flex items-center justify-between mb-5 pb-3 border-b border-indigo-100">
          <div className="flex items-center gap-2 text-indigo-700">
            <LayoutDashboard size={18} />
            <span className="font-bold tracking-wide uppercase text-sm">Syllabus Tracker</span>
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-1.5 -mr-1.5 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Header Section */}
        <div className="mb-8 md:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="hidden md:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100/50 border border-indigo-200/50 text-indigo-700 text-xs font-bold tracking-wide uppercase mb-4">
              <LayoutDashboard size={14} />
              <span>Syllabus Tracker</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {getSubjectTitle()}
            </h1>
            <p className="mt-2 text-slate-500 font-medium text-sm flex items-center gap-4">
              <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> Tracking Active</span>
              <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-indigo-500"></div> Sync Enabled</span>
            </p>
          </div>

          {/* Progress Card */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-6 min-w-[240px]">
            <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path className="text-slate-100" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="text-indigo-600 transition-all duration-1000 ease-out" strokeWidth="3" strokeDasharray={`${progressPercentage}, 100`} strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              </svg>
              <span className="absolute text-xs font-bold text-slate-700">{progressPercentage}%</span>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Overall Progress</p>
              <p className="text-lg font-extrabold text-slate-800">{completedChapters} <span className="text-sm font-medium text-slate-400">/ {totalChapters}</span></p>
            </div>
          </div>
        </div>

        {/* Main Table Card */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 bg-slate-50 border-b border-slate-200 px-6 py-4">
            <div className="col-span-1 font-bold text-slate-500 text-xs uppercase tracking-wider">No.</div>
            <div className="col-span-8 font-bold text-slate-500 text-xs uppercase tracking-wider">Chapter Title</div>
            <div className="col-span-3 font-bold text-slate-500 text-xs uppercase tracking-wider text-right pr-2">Status</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-slate-100">
            {currentChapters.map((chapter, index) => {
              
              if (chapter.isSpecial) {
                return (
                  <div key={chapter.id} className="bg-slate-800 text-white px-4 md:px-6 py-3 border-l-4 border-indigo-500">
                    <div className="flex items-center gap-3">
                      <span className="text-indigo-300 font-bold text-sm tracking-wider">{chapter.kram}</span>
                      <span className="font-semibold text-sm tracking-wide">{chapter.title}</span>
                    </div>
                  </div>
                );
              }

              return (
                <div 
                  key={chapter.id} 
                  className={`flex flex-col md:grid md:grid-cols-12  md:gap-4 md:items-center px-4 md:px-6 py-4 md:py-3.5 transition-colors duration-200 hover:bg-slate-50/80 group ${chapter.status === 'complete' ? 'bg-emerald-50/30' : ''}`}
                >
                  {/* Title & Number Mobile Row */}
                  <div className="flex md:contents items-start gap-3">
                    {/* Number */}
                    <div className="md:col-span-1 shrink-0 mt-0.5 md:mt-0">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-500 font-bold text-xs group-hover:bg-slate-200 transition-colors">
                        {chapter.kram}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <div className="md:col-span-8 flex-1 pr-0 md:pr-4">
                      <h3 className={`text-sm font-semibold transition-colors leading-snug ${chapter.status === 'complete' ? 'text-slate-400 line-through' : 'text-slate-700 group-hover:text-slate-900'}`}>
                        {chapter.title}
                      </h3>
                    </div>
                  </div>

                  {/* Status Badges */}
                  <div className="md:col-span-3 flex justify-start md:justify-end mt-2 md:mt-0 pl-10 md:pl-0">
                    <div className="relative">
                      <select 
                        value={chapter.status}
                        onChange={(e) => updateStatus(chapter.id, e.target.value)}
                        className={`pl-6 md:pl-8 pr-6 md:pr-8 py-1 md:py-1.5 rounded-full border appearance-none text-[11px] md:text-xs font-bold cursor-pointer outline-none transition-all shadow-sm min-w-[100px] md:min-w-[120px] ${getStatusBadgeClass(chapter.status)}`}
                        style={{ WebkitAppearance: 'none', MozAppearance: 'none' }}
                      >
                        <option value="pending" className="bg-white text-slate-700 font-medium">Pending</option>
                        <option value="complete" className="bg-white text-slate-700 font-medium">Complete</option>
                        <option value="incomplete" className="bg-white text-slate-700 font-medium">Incomplete</option>
                      </select>
                      <div className="absolute left-1.5 md:left-2.5 top-1/2 -translate-y-1/2 pointer-events-none scale-90 md:scale-100">
                        {getStatusIcon(chapter.status)}
                      </div>
                      <div className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-2 md:w-2.5">
                          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
        </div>

        {/* Footer info */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-400 font-medium">All progress is automatically saved to your local session.</p>
        </div>
      </div>
    </div>
  );
}
