import {
  BookOpen, Languages, Settings, LogOut, UserCircle,
  ChevronLeft, ChevronRight, BookText, Calculator,
  LibraryBig, Globe, Microscope, Sparkles, X
} from 'lucide-react';

export default function Sidebar({ isCollapsed, setIsCollapsed, activeSubject, setActiveSubject, isMobileMenuOpen, setIsMobileMenuOpen, onLogout }) {

  const menuItems = [
    { id: 'Hindi', label: 'Hindi (हिंदी)', icon: Languages, color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { id: 'Gujarati', label: 'Gujarati (ગુજરાતી)', icon: BookOpen, color: 'text-green-500', bg: 'bg-green-500/10' },
    { id: 'EnglishGrammar', label: 'English Grammar', icon: BookText, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { id: 'English', label: 'English Literature', icon: LibraryBig, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
    { id: 'Maths', label: 'Mathematics', icon: Calculator, color: 'text-rose-500', bg: 'bg-rose-500/10' },
    { id: 'GK', label: 'General Knowledge', icon: Globe, color: 'text-teal-500', bg: 'bg-teal-500/10' },
    { id: 'Science', label: 'Science', icon: Microscope, color: 'text-purple-500', bg: 'bg-purple-500/10' },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 md:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div className={`fixed inset-y-0 right-0 md:left-0 z-50 md:relative md:z-20 h-screen bg-white border-l md:border-l-0 md:border-r border-slate-200 flex flex-col shrink-0 transition-all duration-300 ease-in-out transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
        } ${isCollapsed ? 'md:w-20 w-72' : 'w-72'}`}>

        {/* Toggle Button - Desktop Only */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden md:flex absolute -right-3.5 top-8 bg-white border border-slate-200 text-slate-400 rounded-full p-1 shadow-sm hover:bg-slate-50 hover:text-slate-600 transition-colors z-50"
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>

        {/* Close Button - Mobile Only */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="md:hidden absolute right-4 top-7 bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700 rounded-full p-1.5 transition-colors z-50"
        >
          <X size={18} />
        </button>

        {/* Logo Area */}
        <div className={`flex items-center h-24 border-b border-slate-100 ${isCollapsed ? 'justify-center' : 'px-8 gap-4'}`}>
          <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex shrink-0 items-center justify-center shadow-lg shadow-indigo-500/30">
            <Sparkles className="text-white" size={20} />
          </div>
          {!isCollapsed && (
            <div className="flex flex-col overflow-hidden">
              <span className="text-lg font-bold tracking-tight text-slate-800 truncate"> YUSUF</span>
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Academic Year 26-27</span>
            </div>
          )}
        </div>

        <div className="flex-1 flex flex-col justify-between py-6 overflow-hidden">
          {/* Main Menu */}
          <div className="px-4 space-y-1">
            {!isCollapsed && <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4 px-4">Subjects</h4>}
            <ul className="space-y-1.5">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSubject === item.id;

                return (
                  <li
                    key={item.id}
                    title={isCollapsed ? item.label : ""}
                    onClick={() => setActiveSubject(item.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 group relative overflow-hidden ${isActive
                        ? 'bg-slate-900 text-white shadow-md'
                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                      } ${isCollapsed ? 'justify-center' : ''}`}
                  >
                    {/* Subtle hover background effect */}
                    {!isActive && <div className="absolute inset-0 bg-slate-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>}

                    <div className={`relative z-10 flex items-center justify-center ${isActive ? 'text-white' : item.color}`}>
                      <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                    </div>

                    {!isCollapsed && (
                      <span className={`relative z-10 font-medium text-sm transition-colors ${isActive ? 'text-white font-semibold' : ''}`}>
                        {item.label}
                      </span>
                    )}

                    {/* Active Indicator line for collapsed state */}
                    {isActive && isCollapsed && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-indigo-500 rounded-r-full"></div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Bottom Settings Menu */}
          <div className="px-4 space-y-1">
            <div className="h-px bg-slate-100 my-4 mx-4"></div>
            <ul className="space-y-1.5">
              <li title={isCollapsed ? "Profile" : ""} className={`flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 cursor-pointer transition-all duration-200 ${isCollapsed ? 'justify-center' : ''}`}>
                <UserCircle size={20} strokeWidth={2} className="text-slate-400" />
                {!isCollapsed && <span className="font-medium text-sm">My Profile</span>}
              </li>
              <li
                title={isCollapsed ? "Logout" : ""}
                onClick={onLogout}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-rose-50 hover:text-rose-600 cursor-pointer transition-all duration-200 ${isCollapsed ? 'justify-center' : ''}`}
              >
                <LogOut size={20} strokeWidth={2} className="text-rose-400" />
                {!isCollapsed && <span className="font-medium text-sm">Sign Out</span>}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
