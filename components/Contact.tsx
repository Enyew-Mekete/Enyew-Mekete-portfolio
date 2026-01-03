
import React, { useState } from 'react';
import { Icons } from '../constants';
import { dbService } from '../services/dbService';

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    const phoneRegex = /^\+?[\d\s-]{8,}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (min 8 digits)';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    setStatus('sending');
    try {
      await dbService.saveMessage(formData);
      setStatus('sent');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error("Failed to save message", error);
      setStatus('idle');
    }
  };

  const inputClasses = (fieldName: keyof FormErrors) => `
    w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-2 outline-none transition-all duration-300 font-bold
    ${errors[fieldName] 
      ? 'border-red-500 focus:border-red-600' 
      : 'border-transparent focus:border-primary/50 focus:bg-white dark:focus:bg-gray-900'}
    text-gray-900 dark:text-white
  `;

  return (
    <section id="contact" className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-800/30 transition-colors relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Info Side */}
          <div className="space-y-12">
            <div className="space-y-6">
              <p className="text-[#00FF00] font-black text-xs uppercase tracking-[0.4em]">Connect</p>
              <h2 className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-none">
                Let's <span className="text-primary italic">Collaborate</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                Ready to take your digital presence to the next level? Fill out the form below. Every message is securely logged into the <span className="text-primary font-black">entech_db</span> Portfolio table.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-white dark:bg-gray-900 rounded-[1.5rem] shadow-xl flex items-center justify-center text-primary border border-gray-100 dark:border-gray-700 transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                  <Icons.Mail />
                </div>
                <div>
                  <p className="text-xs font-black text-[#00FF00] uppercase tracking-[0.2em] mb-1">Direct Email</p>
                  <p className="text-xl font-black text-gray-900 dark:text-white">enyewmekete65@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-white dark:bg-gray-900 rounded-[1.5rem] shadow-xl flex items-center justify-center text-primary border border-gray-100 dark:border-gray-700 transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                  <Icons.Linkedin />
                </div>
                <div>
                  <p className="text-xs font-black text-[#00FF00] uppercase tracking-[0.2em] mb-1">LinkedIn</p>
                  <p className="text-xl font-black text-gray-900 dark:text-white"><a href="https://www.linkedin.com/in/enyew-mekete-106308372">Enyew Mekete</a></p>
                </div>
              </div>
            </div>

            <div className="pt-8 p-6 bg-white dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-sm">
              <div className="flex items-center gap-3 text-primary dark:text-white mb-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
                <span className="font-black text-sm uppercase tracking-widest">Database Connectivity</span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                Connected to <code className="text-primary font-bold">entech_db.Portfolio</code>. Our system ensures data validation before writing to the table.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-[#00FF00]/10 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="relative bg-white dark:bg-gray-900 p-8 sm:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-700">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest ml-4">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className={inputClasses('name')}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-red-500 text-[10px] font-bold ml-4">{errors.name}</p>}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest ml-4">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className={inputClasses('email')}
                      placeholder="Email address"
                    />
                    {errors.email && <p className="text-red-500 text-[10px] font-bold ml-4">{errors.email}</p>}
                  </div>
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest ml-4">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className={inputClasses('phone')}
                    placeholder="+251 ..."
                  />
                  {errors.phone && <p className="text-red-500 text-[10px] font-bold ml-4">{errors.phone}</p>}
                </div>
                
                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest ml-4">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className={`${inputClasses('message')} resize-none`}
                    placeholder="Tell me about your project..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-[10px] font-bold ml-4">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status !== 'idle'}
                  className="w-full py-6 px-8 rounded-3xl bg-primary text-white font-black text-lg uppercase tracking-widest shadow-[0_20px_50px_rgba(27,94,127,0.3)] hover:shadow-[0_30px_60px_rgba(27,94,127,0.4)] hover:-translate-y-2 transition-all duration-500 disabled:opacity-50 disabled:translate-y-0 group overflow-hidden relative"
                >
                  <div className="relative z-10">
                    {status === 'idle' ? (
                      <span className="flex items-center justify-center gap-4">
                        Send Message
                        <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    ) : status === 'sending' ? (
                      <span className="flex items-center justify-center gap-4">
                        <svg className="animate-spin h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Validating & Writing...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-4 text-[#00FF00]">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                        </svg>
                        Message Sent Successfully!
                      </span>
                    )}
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
