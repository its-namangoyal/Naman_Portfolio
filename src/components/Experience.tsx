import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

// Experience data
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
    ],
    tech: ["React", "Node.js", "Docker", "AWS"]
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
    ],
    tech: ["Node.js", "Express", "React", "Tailwind CSS"]
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
    ],
    tech: ["Python", "TensorFlow", "Machine Learning"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(0,0,0,1)_195%,transparent_200%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12">Professional Experience</h2>
        
        <div className="flex flex-col items-center">
          {experiences.map((exp, index) => (
            <div key={index} className="flex items-start w-full max-w-3xl mb-8 relative">
              {/* Vertical Line for all entries */}
              <div className={`absolute left-6 top-0 bottom-0 w-1 bg-blue-600`}></div>
              {/* Large Checkbox */}
              <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <div className="w-10 h-10 bg-white rounded-full"></div>
              </div>
              <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-full transition-transform transform hover:scale-105 hover:shadow-2xl border border-gray-700">
                <div className="flex flex-col mb-4">
                  <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
                  <p className="text-lg text-blue-400">{exp.company}</p>
                  <div className="flex items-center text-gray-300 mb-1">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-blue-400 rounded-full mt-2 mr-3 shrink-0"></span>
                      <span className="text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-300">Technologies:</h4>
                  <div className="flex flex-wrap mt-1">
                    {exp.tech.map((tech, i) => (
                      <span key={i} className="bg-blue-600 text-white text-xs font-medium mr-2 mb-2 px-3 py-1 rounded-full transition-transform transform hover:scale-105">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;