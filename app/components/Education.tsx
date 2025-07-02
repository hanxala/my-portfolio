import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: 'B.Sc. in Information Technology',
      institution: 'K.P.B Hinduja College, Mumbai University',
      year: '2022 - 2025',
      grade: 'CGPI 8.62'
    },
    {
      degree: 'HSC (12th Grade)',
      institution: 'Akbar Peerbhoy College, Mumbai',
      year: '2021 - 2022',
      grade: 'Percentage: 75.83%'
    },
    {
      degree: 'SSC (10th Grade)',
      institution: 'Anjuman-I-Islam Allana English High School (C.S.T), Mumbai',
      year: '2019 - 2020',
      grade: 'Percentage: 70.60%'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Education</h2>
        
        <div className="space-y-8 mt-8">
          {educationData.map((item, index) => (
            <div key={index} className="card p-6 flex flex-col md:flex-row md:items-center gap-4">
              <div className="md:w-1/4">
                <span className="text-text-light">{item.year}</span>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold">{item.degree}</h3>
                <p className="text-text-light">{item.institution}</p>
                <p className="mt-2">{item.grade}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;