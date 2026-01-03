
import React from 'react';
import { SKILLS_DATA } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-white dark:bg-gray-900 transition-colors relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] dark:opacity-[0.05] pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#00FF00] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center mb-20">
          <p className="text-[#00FF00] font-black text-xs uppercase tracking-[0.4em] mb-4">Tech Stack</p>
          <h2 className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-none">
            Known & <span className="text-primary italic">Familiar</span>
          </h2>
          <p className="mt-6 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            A comprehensive overview of the programming languages and frameworks I use to build world-class digital solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Frontend Section */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#00FF00]/20 to-transparent rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative p-8 sm:p-10 bg-gray-50 dark:bg-gray-800/50 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-sm">
              <div className="flex items-center gap-5 mb-10">
                <div className="w-14 h-14 bg-[#00FF00]/10 rounded-2xl flex items-center justify-center text-[#00FF00]">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-wider">Frontend</h3>
                  <p className="text-xs font-bold text-[#00FF00] uppercase tracking-widest mt-1">Client-Side Excellence</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {SKILLS_DATA.frontend.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="flex flex-col items-center gap-4 group/item"
                  >
                    <div className="w-20 h-20 bg-white dark:bg-gray-900 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-center transition-all duration-500 group-hover/item:shadow-xl group-hover/item:border-[#00FF00]/30 group-hover/item:-translate-y-2 group-hover/item:rotate-3">
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-10 h-10 object-contain transition-all duration-500 group-hover/item:scale-125" 
                      />
                    </div>
                    <span className="text-gray-800 dark:text-gray-200 font-bold text-sm text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Backend Section */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-transparent rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative p-8 sm:p-10 bg-gray-50 dark:bg-gray-800/50 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-sm">
              <div className="flex items-center gap-5 mb-10">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-wider">Backend</h3>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mt-1">Server-Side Authority</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {SKILLS_DATA.backend.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="flex flex-col items-center gap-4 group/item"
                  >
                    <div className="w-20 h-20 bg-white dark:bg-gray-900 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-center transition-all duration-500 group-hover/item:shadow-xl group-hover/item:border-primary/30 group-hover/item:-translate-y-2 group-hover/item:-rotate-3">
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-10 h-10 object-contain transition-all duration-500 group-hover/item:scale-125" 
                      />
                    </div>
                    <span className="text-gray-800 dark:text-gray-200 font-bold text-sm text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
