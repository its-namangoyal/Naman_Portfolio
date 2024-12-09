import React from 'react';
import { Book, Code, Database, Server } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 transition-transform transform hover:scale-105 duration-300">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master's graduate in Applied Computing from the University of Windsor, passionate about building innovative and scalable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-gray-900">Background</h3>
            <p className="text-gray-600 text-lg">
              As a software developer with a strong foundation in both theory and practice, I specialize in building modern web applications 
              using React.js, Node.js, and cloud technologies. My Master's degree has equipped me with advanced knowledge in software 
              architecture, distributed systems, and machine learning.
            </p>
            <p className="text-gray-600 text-lg">
              I'm passionate about creating efficient, scalable solutions that solve real-world problems. My experience spans from 
              front-end development to backend architecture, with a particular focus on cloud-native applications.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-gray-900">Technical Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 border border-gray-200">
                <div className="flex items-center mb-2">
                  <Code className="w-8 h-8 text-blue-600 mr-2" />
                  <h4 className="font-semibold text-lg">Frontend</h4>
                </div>
                <p className="text-gray-600">React.js, TypeScript, Tailwind CSS</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 border border-gray-200">
                <div className="flex items-center mb-2">
                  <Server className="w-8 h-8 text-green-600 mr-2" />
                  <h4 className="font-semibold text-lg">Backend</h4>
                </div>
                <p className="text-gray-600">Node.js, Express, RESTful APIs</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 border border-gray-200">
                <div className="flex items-center mb-2">
                  <Database className="w-8 h-8 text-purple-600 mr-2" />
                  <h4 className="font-semibold text-lg">Databases</h4>
                </div>
                <p className="text-gray-600">MongoDB, PostgreSQL</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 border border-gray-200">
                <div className="flex items-center mb-2">
                  <Book className="w-8 h-8 text-orange-600 mr-2" />
                  <h4 className="font-semibold text-lg">Cloud</h4>
                </div>
                <p className="text-gray-600">AWS, Docker, Microservices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;