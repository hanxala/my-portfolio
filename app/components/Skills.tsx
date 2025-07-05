import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Technical Skills */}
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-6 text-primary">Technical Skills</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Languages/Tools</h4>
                <p>Kotlin (Android Studio), HTML, CSS, JavaScript, Python, Firebase</p>
              </div>
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-6 text-primary">Soft Skills</h3>
            <div className="space-y-4">
              <ul className="list-disc list-inside space-y-2">
                <li>Time Management</li>
                <li>Team Player</li>
                <li>Fast Learner</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;