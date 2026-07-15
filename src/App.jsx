import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Timetable from './components/Timetable';
import Login from './components/Login';
import { hindiData } from './subjects/hindiData';
import { gujratiData } from './subjects/gujratiData';
import { englishgrammarData as englishGrammarData } from './subjects/englishgrammarData';
import { englishData } from './subjects/englishData';
import { mathsData } from './subjects/mathsData';
import { gkData } from './subjects/gkData';
import { scienceData } from './subjects/scienceData';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const [activeSubject, setActiveSubject] = useState('Hindi');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const [hindiChapters, setHindiChapters] = useState(hindiData);
  const [gujratiChapters, setGujratiChapters] = useState(gujratiData);
  const [englishGrammarChapters, setEnglishGrammarChapters] = useState(englishGrammarData);
  const [englishChapters, setEnglishChapters] = useState(englishData);
  const [mathsChapters, setMathsChapters] = useState(mathsData);
  const [gkChapters, setGkChapters] = useState(gkData);
  const [scienceChapters, setScienceChapters] = useState(scienceData);

  const currentChapters = activeSubject === 'Hindi' ? hindiChapters : 
                          activeSubject === 'Gujarati' ? gujratiChapters : 
                          activeSubject === 'EnglishGrammar' ? englishGrammarChapters : 
                          activeSubject === 'English' ? englishChapters : 
                          activeSubject === 'Maths' ? mathsChapters : 
                          activeSubject === 'GK' ? gkChapters : scienceChapters;

  const updateStatus = (id, newStatus) => {
    if (activeSubject === 'Hindi') {
      setHindiChapters(hindiChapters.map(ch => ch.id === id ? { ...ch, status: newStatus } : ch));
    } else if (activeSubject === 'Gujarati') {
      setGujratiChapters(gujratiChapters.map(ch => ch.id === id ? { ...ch, status: newStatus } : ch));
    } else if (activeSubject === 'EnglishGrammar') {
      setEnglishGrammarChapters(englishGrammarChapters.map(ch => ch.id === id ? { ...ch, status: newStatus } : ch));
    } else if (activeSubject === 'English') {
      setEnglishChapters(englishChapters.map(ch => ch.id === id ? { ...ch, status: newStatus } : ch));
    } else if (activeSubject === 'Maths') {
      setMathsChapters(mathsChapters.map(ch => ch.id === id ? { ...ch, status: newStatus } : ch));
    } else if (activeSubject === 'GK') {
      setGkChapters(gkChapters.map(ch => ch.id === id ? { ...ch, status: newStatus } : ch));
    } else {
      setScienceChapters(scienceChapters.map(ch => ch.id === id ? { ...ch, status: newStatus } : ch));
    }
  };

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="h-screen w-full flex bg-[#F8FAFC] font-sans text-slate-800 overflow-hidden">
      
      <Sidebar 
        isCollapsed={isCollapsed} 
        setIsCollapsed={setIsCollapsed} 
        activeSubject={activeSubject} 
        setActiveSubject={(sub) => {
          setActiveSubject(sub);
          setIsMobileMenuOpen(false); // Close mobile menu when subject selected
        }} 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        onLogout={() => setIsAuthenticated(false)}
      />

      <Timetable 
        activeSubject={activeSubject} 
        currentChapters={currentChapters} 
        updateStatus={updateStatus} 
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
    </div>
  );
}
