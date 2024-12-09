import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: "Software Developer",
    company: "Trackline Solution",
    location: "Toronto, ON",
    period: "2022 - Present",
    description: [
      "Led the development of a real-time tracking system using React and Node.js, improving delivery efficiency by 40%",
      "Implemented microservices architecture using Docker and AWS, resulting in 30% better system scalability",
      "Mentored junior developers and conducted code reviews to maintain high code quality standards"
    ]
  },
  {
    title: "Full Stack Developer Intern",
    company: "Portax",
    location: "Windsor, ON",
    period: "2021 - 2022",
    description: [
      "Developed and maintained RESTful APIs using Node.js and Express, serving 10,000+ daily users",
      "Optimized database queries resulting in 50% faster response times",
      "Collaborated with UX designers to implement responsive web interfaces using React and Tailwind CSS"
    ]
  },
  {
    title: "Graduate Research Assistant",
    company: "University of Windsor",
    location: "Windsor, ON",
    period: "2020 - 2021",
    description: [
      "Conducted research on machine learning algorithms for predictive analytics",
      "Published 2 research papers in international conferences",
      "Developed a prototype using Python and TensorFlow for real-time data analysis"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Professional Experience</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">{exp.title}</h3>
                  <p className="text-lg text-blue-600">{exp.company}</p>
                </div>
                <div className="flex flex-col md:items-end mt-2 md:mt-0">
                  <div className="flex items-center text-gray-600 mb-1">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-blue-600 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;