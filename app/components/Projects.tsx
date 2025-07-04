import React from 'react';
import Image from 'next/image';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* QuickCart Project */}
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
            <div className="relative h-48">
              <Image 
                src="/portfolio-web.jpg" 
                alt="Portfolio Website" 
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
              <p className="text-text-light mb-4">A personal portfolio website built with Next.js and Tailwind CSS.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm">Next.js</span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm">React</span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm">Tailwind CSS</span>
              </div>
              <div className="flex justify-between">
                <a 
                  href="#" 
                  className="text-primary hover:underline flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>View Code</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="text-primary hover:underline flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Live Demo</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* QuickCart Project */}
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
            <div className="relative h-48">
              <Image 
                src="/exam-elite.jpg" 
                alt="Exam Elite" 
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Exam Elite</h3>
              <p className="text-text-light mb-4">An online examination platform with real-time assessment.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm">React</span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm">Node.js</span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm">MongoDB</span>
              </div>
              <div className="flex justify-between">
                <a 
                  href="#" 
                  className="text-primary hover:underline flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>View Code</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="text-primary hover:underline flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Live Demo</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* QuickCart Project */}
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
            <div className="relative h-48">
              <Image 
                src="/quick-cart.jpg.svg" 
                alt="QuickCart" 
                fill
                style={{ objectFit: 'contain' }}
                className="transition-transform hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">QuickCart</h3>
              <p className="text-text-light mb-4">An e-commerce platform with modern UI and shopping features.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm">React</span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm">CSS</span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm">JavaScript</span>
              </div>
              <div className="flex justify-between">
                <a 
                  href="#" 
                  className="text-primary hover:underline flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>View Code</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a 
                  href="https://quick-cart-u4jo.vercel.app/" 
                  className="text-primary hover:underline flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Live Demo</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;