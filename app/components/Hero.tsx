import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2 animate-fadeIn">
          <div className="mb-2 inline-block bg-primary/10 px-3 py-1 rounded-full">
            <span className="text-primary font-medium">Hello, I'm</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 relative">
            Hanzala Khan
            <span className="absolute -bottom-2 left-0 w-20 h-1 bg-primary"></span>
          </h1>
          <h2 className="text-xl md:text-2xl text-text-light mb-6 animate-slideUp">Fresher — Software / Android App Developer</h2>
          
          <div className="mb-6 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg mb-4 leading-relaxed">
              Motivated and enthusiastic fresher with a Bachelor&apos;s degree in Information Technology. Passionate 
              about Android app development and full-stack technologies. Looking to begin a career as a Software 
              or Android Developer, with a strong foundation in Kotlin, Firebase, and web development. Known 
              for quick learning, time management, and collaborative work ethic.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <a href="#contact" className="btn-primary text-center transform transition-transform hover:scale-105">
              Get in Touch
            </a>
            <a href="#projects" className="border border-border-color px-6 py-2 rounded text-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-all hover:shadow-md">
              View Projects
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary shadow-xl transform transition-transform hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10"></div>
            <Image
            src="/hanzala-profile3.jpg"
            alt="Hanzala Khan"
            width={256}
            height={256}
            className="object-cover"
            priority
            />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-10">
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-text-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Mumbai, Maharashtra</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-text-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>+91 8779603467</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-text-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>hanzalakhan0913@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-text-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span>hanzala-khan</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;