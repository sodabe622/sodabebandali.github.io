import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero'; // Effectively 'About' now
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ChatWidget from './components/ChatWidget';
import ProfileSidebar from './components/ProfileSidebar';
import News from './components/News';
import AdminModal from './components/AdminModal';
import { ResumeProvider } from './context/ResumeContext';

const App: React.FC = () => {
  return (
    <ResumeProvider>
      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-primary/20 selection:text-primary-dark">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Left Sidebar */}
            <div className="md:col-span-4 lg:col-span-3">
              <div className="md:sticky md:top-24">
                <ProfileSidebar />
              </div>
            </div>

            {/* Right Content */}
            <div className="md:col-span-8 lg:col-span-9 space-y-4">
               <Hero />
               <div className="my-12 h-px bg-slate-100 w-full" />
               <News />
               <div className="my-12 h-px bg-slate-100 w-full" />
               <Projects />
               <div className="my-12 h-px bg-slate-100 w-full" />
               <Experience />
               <div className="my-12 h-px bg-slate-100 w-full" />
               <Skills />
            </div>
          </div>
        </main>

        <footer className="py-8 border-t border-slate-100 text-center text-slate-400 text-sm bg-slate-50 mt-12">
          <p>&copy; {new Date().getFullYear()} Built with React & Gemini API.</p>
        </footer>

        <ChatWidget />
        <AdminModal />
      </div>
    </ResumeProvider>
  );
};

export default App;
