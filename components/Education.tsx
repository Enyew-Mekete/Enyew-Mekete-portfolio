
import React from 'react';
import { EDUCATION_DATA, CERTIFICATES, AWARDS_DATA } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 sm:py-32 bg-white dark:bg-gray-900 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-16">
          <p className="text-[#00FF00] font-black text-xs uppercase tracking-[0.4em] mb-4">Background</p>
          <h2 className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-none">
            Education & <span className="text-primary italic">Certifications</span>
          </h2>
        </div>
        
        {/* Education Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {EDUCATION_DATA.map((edu) => (
            <div key={edu.id} className="group p-8 rounded-[2.5rem] bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white group-hover:text-primary transition-colors">{edu.degree}</h3>
                  <p className="text-primary font-bold mt-1">{edu.institution}</p>
                </div>
                <span className="bg-primary text-white px-4 py-2 rounded-2xl text-xs font-black tracking-widest uppercase">
                  {edu.year}
                </span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                {edu.description}
              </p>
            </div>
          ))}
        </div>

        {/* Awards Section */}
        <div className="mb-24">
          <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-10 flex items-center gap-5">
             <div className="w-12 h-2 bg-[#00FF00] rounded-full"></div>
             Awards & Recognitions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {AWARDS_DATA.map((award) => (
              <div key={award.id} className="group relative flex flex-col sm:flex-row bg-gray-50 dark:bg-gray-800 rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-500">
                <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden relative bg-white flex items-center justify-center p-4">
                  <img 
                    src={award.image} 
                    alt={award.title} 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1578357078586-491adc1bbd02?q=80&w=1000&auto=format&fit=crop";
                    }}
                  />
                  {award.title.toLowerCase().includes('gold') && (
                    <div className="absolute top-4 left-4 w-8 h-8 bg-yellow-400 rounded-full blur-md opacity-40 animate-pulse"></div>
                  )}
                </div>
                <div className="sm:w-3/5 p-8 flex flex-col justify-center">
                  <p className="text-[#00FF00] font-black text-[10px] uppercase tracking-[0.3em] mb-2">Award Winner</p>
                  <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-2">{award.title}</h4>
                  <p className="text-primary font-bold text-sm uppercase tracking-wider">{award.issuer}</p>
                  <p className="text-gray-400 text-xs mt-4 font-black">{award.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div>
          <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-10 flex items-center gap-5">
             <div className="w-12 h-2 bg-primary rounded-full"></div>
             Professional Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATES.map((cert) => (
              <div key={cert.id} className="group bg-gray-50 dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden bg-white relative p-6">
                  <img 
                    src={cert.image} 
                    alt={cert.name} 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6">
                  <h4 className="font-black text-gray-900 dark:text-white text-sm line-clamp-2 min-h-[40px] leading-snug">{cert.name}</h4>
                  <p className="text-primary text-[10px] font-black mt-3 uppercase tracking-widest truncate">{cert.issuer}</p>
                  <p className="text-gray-400 text-[9px] mt-1 font-bold uppercase tracking-widest">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
