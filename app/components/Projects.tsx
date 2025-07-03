import React from 'react';
import Image from 'next/image';

const Projects = () => {
  const projects = [
  {
    title: 'Exam Elite - Student Competition App',
    description: 'Developed an Android application using Kotlin and Firebase that allows students to participate in quizzes and coding competitions. Features include authentication, competition lists, and real-time leaderboard functionality.',
    technologies: ['Kotlin', 'Android Studio', 'Firebase', 'MVVM', 'Material Design'],
    image: '/exam-elite.jpg', // <-- updated
    link: '#'
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio website built with Next.js and Tailwind CSS to showcase my projects, skills, and experience.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    image: '/portfolio-web.jpg', // <-- updated
    link: '#'
  },
    {
      title: 'Task Manager',
      description: 'A full-stack task management application with user authentication, task creation, editing, and categorization features.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      image: '/project-placeholder.jpg',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Recent Work</h2>
        <p className="text-text-light max-w-3xl mb-10">
          Solving user & business problems with clean, efficient code. Here are some of my recent projects that demonstrate my skills and experience.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card overflow-hidden flex flex-col h-full">
              <div className="h-48 relative">
                <Image
                  src="/project-placeholder.svg"
                  alt={project.title}
                  width={400}
                  height={225}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-text-light mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="inline-flex items-center gap-2 text-primary hover:underline mt-auto"
                >
                  Know more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;