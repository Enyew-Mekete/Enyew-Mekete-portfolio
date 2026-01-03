
import React from 'react';

const SKILLS = [
  'React / Next.js', 'Node.js / Express', 'TypeScript', 'MySQL / PostgreSQL', 
  'Tailwind CSS', 'Docker', 'AWS / Google Cloud', 'RESTful & GraphQL APIs'
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              I'm a passionate Full Stack Developer with over 2 years of experience in building Enterprise-level web applications. My journey started with a deep curiosity for how things work on the web, leading me to master the entire stack from UI design to server-side optimization.
            </p>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              I believe in clean code, robust architectures, and creating user experiences that are not just functional, but delightful.
            </p>
            
            <div className="mt-10 grid grid-cols-2 gap-4">
              {SKILLS.map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 grid grid-cols-2 gap-4 h-full">
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col justify-center text-center">
                <span className="text-4xl font-bold text-primary">2+</span>
                <span className="mt-2 text-gray-500 dark:text-gray-400 font-medium">Years Experience</span>
             </div>
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col justify-center text-center mt-8">
                <span className="text-4xl font-bold text-primary">50+</span>
                <span className="mt-2 text-gray-500 dark:text-gray-400 font-medium">Projects Delivered</span>
             </div>
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col justify-center text-center">
                <span className="text-4xl font-bold text-primary">20+</span>
                <span className="mt-2 text-gray-500 dark:text-gray-400 font-medium">Happy Clients</span>
             </div>
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col justify-center text-center mt-8">
                <span className="text-4xl font-bold text-primary">100%</span>
                <span className="mt-2 text-gray-500 dark:text-gray-400 font-medium">Client Satisfaction</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
