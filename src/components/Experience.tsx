import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion'; // Import framer-motion

// Experience data
const experiences = [
  {
    title: "Software Engineer",
    company: "EPAM Systems",
    location: "India",
    period: "Oct 2022 - May 2023",
    description: [
      "<strong>Developed and Debugged APIs:</strong> Created and maintained 40+ APIs, streamlining integration between frontend and backend while optimizing server-side code for seamless performance.",
      "<strong>Enhanced Authentication and Testing:</strong> Revamped user authentication processes and implemented automated testing, reducing manual workload from 3 hours to under 1 hour.",
      "<strong>Database and UI/UX Optimization:</strong> Designed 35+ efficient database schemas and improved UI/UX based on feedback from 10K+ users, contributing to a web app with 3.7 million active users."
    ],
    tech: ["React.js", "Node.js", "Rest APIs", "PostgreSQL", "SQL", "Docker", "Jenkins", "AWS"]
  },
  {
    title: "Software Engineer",
    company: "Google Student Developer Club-LPU",
    location: "India",
    period: "Jan 2021 - May 2022",
    description: [
      "<strong>Developed Internship Portal:</strong> Built a MERN stack-based internship portal for a university, streamlining student-company matching and automating application processes, which is projected to increase user engagement by 40%.",
      "<strong>Secure User Authentication & Role-Based Access:</strong> Implemented secure user authentication and dynamic role-based access, effectively managing data for over 500 students and multiple companies.",
      "<strong>Enhanced User Support:</strong> Designed a robust user support system, improving communication and interaction between students and companies through automated workflows and real-time notifications."
    ],
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Firebase", "Git", "GitHub"]
  },
  {
    title: "Teaching Assistant",
    company: "Coding Ninjas",
    location: "India",
    period: "Sept 2020 - Dec 2020",
    description: [
      "<strong>Resolved 1,100+ Doubts:</strong> Provided support on coding assignments and projects, debugging code, and leading doubt-clearing sessions for 50+ students, achieving a 4.8/5 rating.",
      "<strong>Guided Algorithm Implementation:</strong> Mentored students in implementing algorithms and writing clean, efficient code, resulting in a 40% improvement in comprehension.",
      "<strong>Improved Code Efficiency:</strong> Helped students enhance their coding practices, boosting code efficiency by 30% through targeted debugging and optimization strategies."
    ],
    tech: ["C++", "Python", "Java", "Data Structures", "Algorithms", "System Design"]
  }
];

// Reusable Experience Card Component
const ExperienceCard = ({ exp }) => (
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="flex items-start w-full max-w-3xl mb-8 relative"
  >
    {/* Vertical Line */}
    <motion.div
      className="absolute left-6 top-0 bottom-0 w-1 bg-blue-600"
      initial={{ height: 0 }}
      whileInView={{ height: "100%" }}
      transition={{ duration: 0.8 }}
    ></motion.div>

    {/* Large Checkbox */}
    <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
      <div className="w-10 h-10 bg-white rounded-full"></div>
    </div>

    {/* Content Card */}
    <motion.div
      className="bg-gray-800 rounded-lg shadow-lg p-6 w-full border border-gray-700"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Title, Company, Period, and Location */}
      <div className="flex flex-col mb-6">
        {/* Job Title */}
        <h3 className="text-3xl font-semibold text-white mb-2 hover:text-blue-400 transition-colors duration-300">
          {exp.title}
        </h3>

        {/* Company Name */}
        <p className="text-lg text-blue-400 mb-2 font-medium">{exp.company}</p>

        <div className="flex items-center text-gray-300 mb-3">
          {/* Period */}
          <div className="flex items-center text-sm mr-6">
            <Calendar className="w-5 h-5 mr-2" aria-label="Calendar icon" />
            <span>{exp.period}</span>
          </div>

          {/* Location */}
          <div className="flex items-center text-sm">
            <MapPin className="w-5 h-5 mr-2" aria-label="Location icon" />
            <span>{exp.location}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <ul className="space-y-2">
        {exp.description.map((item, i) => (
          <li key={i} className="flex items-start">
            <span className="inline-block w-3 h-3 bg-blue-400 rounded-full mt-2 mr-3 shrink-0"></span>
            <span
              className="text-gray-200"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          </li>
        ))}
      </ul>

      {/* Technologies */}
      <div className="mt-4">
        <h4 className="font-semibold text-gray-300 mb-4">Technologies:</h4>
        <div className="flex flex-wrap mt-1">
          {exp.tech.map((tech, i) => (
            <motion.span
              key={i}
              className="bg-blue-600 text-white text-xs font-large bold mr-3 mb-3 px-5 py-2 rounded-full transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  </motion.div>
);

// Main Experience Component
const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(0,0,0,1)_195%,transparent_200%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          Professional Experience
        </h2>
       

        <div className="flex flex-col items-center">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
