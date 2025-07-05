import React from 'react';

interface HobbyCardProps {
  icon: string;
  title: string;
  description: string;
}

const HobbyCard = ({ icon, title, description }: HobbyCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg p-6 transition-transform hover:scale-105">
      <div className="flex items-center mb-4">
        <span className="text-4xl mr-4">{icon}</span>
        <h3 className="text-xl font-bold text-primary">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

interface Hobby {
  icon: string;
  title: string;
  description: string;
}

const Hobbies = () => {
  const hobbies: Hobby[] = [
    {
      icon: '📱',
      title: 'Developing Android Apps',
      description: 'Creating mobile applications using Kotlin and Android Studio, focusing on user-friendly interfaces and practical functionality.'
    },
    {
      icon: '💻',
      title: 'Website Development',
      description: 'Building responsive and modern websites using HTML, CSS, JavaScript, and frameworks like Next.js and React.'
    },
    {
      icon: '📚',
      title: 'Learning New Technologies',
      description: 'Constantly exploring new programming languages, frameworks, and tools to expand my technical knowledge and skills.'
    }
  ];

  return (
    <section id="hobbies" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Hobbies & Interests</h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => (
            <HobbyCard
              key={index}
              icon={hobby.icon}
              title={hobby.title}
              description={hobby.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;