import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Java', 'Kotlin', 'C', 'C++', 'Python', 'JavaScript', 'TypeScript']
    },
    {
      category: 'Web Development',
      skills: ['HTML', 'CSS', 'React.js', 'Next.js', 'Node.js', 'Express.js', 'Tailwind CSS']
    },
    {
      category: 'Mobile Development',
      skills: ['Android Studio', 'Kotlin', 'Firebase', 'Room Database', 'Retrofit', 'MVVM Architecture']
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'MongoDB', 'Firebase Firestore', 'SQLite']
    },
    {
      category: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Adobe XD']
    },
    {
      category: 'Soft Skills',
      skills: ['Problem Solving', 'Team Collaboration', 'Time Management', 'Communication', 'Quick Learning']
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card p-6">
              <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;