import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {/* B.Sc. in Information Technology */}
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
              <h3 className="text-xl font-bold">B.Sc. in Information Technology</h3>
              <span className="text-text-light">2022 — 2025</span>
            </div>
            <p className="text-primary font-medium">K.P.B Hinduja College, Mumbai University, Mumbai</p>
            <p className="mt-2">CGPI: 8.62</p>
          </div>
          
          {/* HSC (12th Grade) */}
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
              <h3 className="text-xl font-bold">HSC (12th Grade)</h3>
              <span className="text-text-light">2021 — 2022</span>
            </div>
            <p className="text-primary font-medium">Akbar Peerbhoy College, Mumbai</p>
            <p className="mt-2">Percentage: 75.83%</p>
          </div>
          
          {/* SSC (10th Grade) */}
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
              <h3 className="text-xl font-bold">SSC (10th Grade)</h3>
              <span className="text-text-light">2019 — 2020</span>
            </div>
            <p className="text-primary font-medium">Anjuman-I-Islam Allana English High School (C.S.T), Mumbai</p>
            <p className="mt-2">Percentage: 70.60%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;