
import React from 'react';
import { Icons, NAV_ITEMS } from '../constants';
import { IMAGES } from '../assets/images';

const Footer: React.FC = () => {
  // Filter out 'Project' and 'Experience' specifically for the footer display
  const footerNavItems = NAV_ITEMS.filter(
    (item) => item.label !== 'Project' && item.label !== 'Experience'
  );

  return (
    <footer className="bg-[#04325fff] text-white py-16 border-t border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Column 1: Identity */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white rounded-full overflow-hidden flex items-center justify-center border-2 border-white/20 shadow-lg">
                <img 
                  src={IMAGES.logo} 
                  alt="Logo" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Dev&background=fff&color=1B5E7F&bold=true";
                  }}
                />
              </div>
              <h2 className="text-2xl font-bold tracking-tight">Enyew Mekete</h2>
            </div>
            <p className="text-white/80 text-lg leading-relaxed max-w-md">
              Full Stack Developer & Founder of En-Tech S.C. Solutions. Building scalable digital solutions with modern technologies like React, Node.js, and Cloud Architectures.
            </p>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {footerNavItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? "_blank" : "_self"}
                    rel={item.href.startsWith('http') ? "noopener noreferrer" : ""}
                    className="text-white/70 hover:text-white transition-colors text-base font-medium flex items-center gap-2 group"
                  >
                    {/* Bullet symbols removed as requested */}
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Let's Connect */}
          <div className="md:col-span-4">
            <h3 className="text-xl font-bold mb-6">Let's Connect</h3>
            <p className="text-white/70 mb-6 text-base">
              Open to new opportunities and interesting projects.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/Enyew-Mekete" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-all duration-300 ring-1 ring-white/20">
                <Icons.Github />
              </a>
              <a href="https://www.linkedin.com/in/enyew-mekete-106308372" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-all duration-300 ring-1 ring-white/20">
                <Icons.Linkedin />
              </a>
              <a href="mailto:enyewmekete65@gmail.com" className="p-3 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-all duration-300 ring-1 ring-white/20">
                <Icons.Mail />
              </a>
              <a href="https://t.me/En_TechSC" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-all duration-300 ring-1 ring-white/20">
                <Icons.Telegram />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom bar - Centered exactly as requested with green top border */}
        <div className="mt-16 pt-8 border-t border-[#00FF00] flex flex-col items-center justify-center text-center space-y-2 text-white/90 text-sm md:text-base">
          <p className="font-medium">
            Designed and Developed By Enyew.M - Founder and CEO of En-Tech S.C
          </p>
          <p className="text-white/60">
            October, 2025 © All Rights Reserved!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
