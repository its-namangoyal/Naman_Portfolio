import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { FiChevronDown } from 'react-icons/fi'; // Importing the arrow icon

const projects = [
  {
    title: 'TravelBuddyAI',
    description: 'TravelBuddyAI is a revolutionary platform designed to simplify trip planning. Utilizing the power of AI through Google Gemini, it delivers personalized travel recommendations tailored to budget, duration, and group size. With secure email authentication, users can seamlessly create, customize, and optimize their travel experiences.',
    image: 'src/images/TBAI.png',
    tech: ['React.js','Node.js','Express.js', 'Tailwind CSS','Google Gemini'],
    github: 'https://github.com/its-namangoyal/TravelBuddyAI',
    demo: 'https://github.com/its-namangoyal/TravelBuddyAI'
  },
  {
    title: 'Point of Sale App',
    description: 'Point of Sale App is a dynamic PHP platform with an intuitive admin panel that simplifies food ordering and management. Users can browse, order, and cancel food from multiple restaurants, while admins can manage items, add restaurants, handle accounts, and track orders, streamlining operations for any food service business.',
    image: 'src/images/Foody.png',
    tech: ['PHP', 'JavaSript', 'Tailwind CSS', 'SQL', 'Bootstrap', 'RestAPIs'],
    github: 'https://github.com/its-namangoyal/Point_of_Sale_App',
    demo: 'https://github.com/its-namangoyal/Point_of_Sale_App'
  },
  {
    title: 'Netflix Clone',
    description: 'Netflix Clone is a feature-rich streaming platform with personalized recommendations, user authentication, and a responsive design. It also includes payment integration, content management, secure user profiles, advanced search, and content categorization, offering a seamless and engaging experience across all devices.',
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80',
    tech: ['React.js','Node.js','Express.js', 'Tailwind CSS', 'Firebase', 'TMDB API'],
    github: 'https://github.com/its-namangoyal/Netflix_Clone_App',
    demo: 'https://github.com/its-namangoyal/Netflix_Clone_App'
  },
  {
    title: 'TrackLine Solution',
    description: 'Trackline Solutions is a fleet management system that streamlines operations with real-time asset tracking, route optimization, and maintenance management. It helps businesses reduce costs, improve safety, and ensure compliance while enhancing communication between drivers, dispatchers, and customers.',
    image: 'src/images/easyGo.png',
    tech: ['React.js','Node.js', 'Express.js','MongoDB', 'Socket.io', 'Firebase'],
    github: 'https://github.com/its-namangoyal/Trackline_Solution',
    demo: 'https://github.com/its-namangoyal/Trackline_Solution'
  },
  {
    title: 'PortalX',
    description: 'PortalX is a comprehensive platform that streamlines internship management for students, professors, and companies. It offers features like easy application tracking, advanced search filters, seamless communication, project management tools, and customized internship listings. PortalX simplifies the process of finding and managing internships, ensuring a smooth experience for all users.',
    image: 'src/images/Portalx.png',
    tech: ['React.js','Node.js', 'Express.js','MongoDB', 'Firebase', 'Tailwind CSS',],
    github: 'https://github.com/its-namangoyal/PortalX',
    demo: 'https://github.com/its-namangoyal/PortalX'
  },
  {
    title: 'E-Waste Recycling Network',
    description: 'E-Waste Recycling Network streamlines e-waste disposal with easy request posting, advanced search filters, secure file uploads, and seamless communication with recycling centers. It helps users manage electronic waste efficiently, promoting eco-friendly disposal while connecting individuals and businesses to trusted recycling solutions.',
    image: 'src/images/Ewaste.png',
    tech: ['React.js','Django','CSS', 'Python'],
    github: 'https://github.com/its-namangoyal/e_waste_network',
    demo: 'https://github.com/its-namangoyal/e_waste_network'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-12 tracking-wider leading-tight">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${index * 100}ms` }} // Staggered animation
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover rounded-t-3xl transform hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black opacity-30 rounded-t-3xl"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h3>
                <p className="text-gray-600 text-lg mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-3 mb-5">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center gap-10 mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-blue-600 transition-all duration-300"
                  >
                    <Github className="w-8 h-8" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-blue-600 transition-all duration-300"
                  >
                    <ExternalLink className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* See More Projects Button */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/its-namangoyal?tab=repositories" // Replace with your GitHub projects link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-black text-white font-semibold rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
          >
            See More Projects
            <FiChevronDown className="inline-block ml-2 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
