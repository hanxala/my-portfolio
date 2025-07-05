import React from 'react';

const Hobbies = () => {
  return (
    <section id="hobbies" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Hobbies</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg p-6">
            <ul className="list-disc list-inside space-y-2">
              <li>Developing Android Apps</li>
              <li>Website Development</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;