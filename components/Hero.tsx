
import React from 'react';
import { Icons } from '../constants';
import { IMAGES } from '../assets/images';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-28 pb-16 lg:pt-36 lg:pb-28 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-7 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-5xl">
              <span className="block">Building High-Quality</span>
              <span className="block text-primary">Full-Stack Solutions</span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 dark:text-gray-400 sm:mt-8 sm:text-2xl lg:text-xl xl:text-2xl leading-relaxed">
              Specializing in React, Node.js, and Modern Web Architectures. I turn complex requirements into elegant, efficient, and scalable Digital products.
            </p>
            <div className="mt-10 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 flex flex-wrap gap-5">
              <a
                href="#projects"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-bold rounded-2xl shadow-xl text-white bg-primary hover:bg-primary/90 transition transform hover:-translate-y-1 hover:shadow-primary/30"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-200 dark:border-gray-700 text-lg font-bold rounded-2xl text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition transform hover:-translate-y-1"
              >
                Contact Me
              </a>
            </div>
            <div className="mt-10 flex gap-8 sm:justify-center lg:justify-start">
              <a href="https://github.com/Enyew-Mekete" className="text-gray-400 hover:text-primary transition-all hover:scale-125"><Icons.Github /></a>
              <a href="https://www.linkedin.com/in/Enyew-Mekete-106308372" className="text-gray-400 hover:text-primary transition-all hover:scale-125"><Icons.Linkedin /></a>
              <a href="mailto:enyewmekete@gmail.com" className="text-gray-400 hover:text-primary transition-all hover:scale-125"><Icons.Mail /></a>
            </div>
          </div>
          <div className="mt-16 relative sm:max-w-xl sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-5 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-[2.5rem] shadow-2xl lg:max-w-lg overflow-hidden ring-8 ring-primary/10 group">
              <img
                className="w-full h-full object-cover transition-all duration-1000 transform group-hover:scale-110"
                src={IMAGES.profile}
                alt="Mr. Enyew Mekete"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";
                }}
              />
              
              {/* Professional Label Overlay */}
              <div className="absolute bottom-0 left-0 right-30 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="backdrop-blur-md bg-white/10 p-4 rounded-2xl border border-white/20 shadow-2xl">
                   <h3 className="text-white font-black text-xl tracking-wide">Mr. Enyew Mekete</h3>
                   <p className="font-bold text-sm uppercase tracking-widest mt-1 drop-shadow-sm" style={{ color: '#00ffc3ff' }}>Founder and CEO of  <br />En-Tech S.C</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] -z-10"></div>
    </section>
  );
};

export default Hero;
