'use client';

import React, { useState } from 'react';

interface SkillBarProps {
  name: string;
  level: number;
  icon: string;
}

const SkillBar = ({ name, level, icon }: SkillBarProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="mb-6 group" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          {icon && (
            <span className={`mr-2 text-xl transition-all duration-300 ${isHovered ? 'scale-125 rotate-12' : ''}`}>
              {icon}
            </span>
          )}
          <span className={`font-medium transition-all duration-300 ${isHovered ? 'text-primary font-semibold' : ''}`}>
            {name}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative w-8 h-8">
            <svg className="w-8 h-8 transform -rotate-90" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="16" fill="none" className="stroke-gray-200 dark:stroke-gray-700" strokeWidth="3"></circle>
              <circle 
                cx="18" 
                cy="18" 
                r="16" 
                fill="none" 
                className="stroke-primary" 
                strokeWidth="3" 
                strokeDasharray={`${level} 100`}
                strokeLinecap="round"
              ></circle>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold">
              {level}%
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700 overflow-hidden">
        <div 
          className={`bg-primary h-3 rounded-full relative transition-all duration-500 ${isHovered ? 'animate-pulse' : ''}`}
          style={{ width: `${level}%`, transitionDelay: '0.1s' }}
        >
          <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/20 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

interface Skill {
  name: string;
  level: number;
  icon: string;
}

const Skills = () => {
  const technicalSkills: Skill[] = [
    { name: 'Kotlin (Android Studio)', level: 90, icon: '📱' },
    { name: 'HTML & CSS', level: 85, icon: '🌐' },
    { name: 'JavaScript', level: 80, icon: '💻' },
    { name: 'Python', level: 75, icon: '🐍' },
    { name: 'Firebase', level: 85, icon: '🔥' },
  ];

  const softSkills: Skill[] = [
    { name: 'Time Management', level: 95, icon: '⏱️' },
    { name: 'Team Collaboration', level: 90, icon: '👥' },
    { name: 'Fast Learning', level: 95, icon: '🚀' },
    { name: 'Problem Solving', level: 85, icon: '🧩' },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3 animate-pulse">My Expertise</span>
          <h2 className="text-3xl font-bold relative inline-block">
            Skills & Abilities
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary"></span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my technical proficiency and personal strengths that I bring to every project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Technical Skills */}
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:translate-y-[-10px] border border-gray-100 dark:border-gray-700 relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full"></div>
            <div className="flex items-center mb-8 relative z-10">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-2xl font-bold text-primary">Technical Skills</h3>
            </div>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <SkillBar 
                  key={index}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                />
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:translate-y-[-10px] border border-gray-100 dark:border-gray-700 relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full"></div>
            <div className="flex items-center mb-8 relative z-10">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-2xl font-bold text-primary">Soft Skills</h3>
            </div>
            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <SkillBar 
                  key={index}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;