import React from 'react';
import { Book, Code, Database, Server } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master's graduate in Applied Computing from the University of Windsor, passionate about building innovative and scalable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Background</h3>
            <p className="text-gray-600">
              As a software developer with a strong foundation in both theory and practice, I specialize in building modern web applications 
              using React.js, Node.js, and cloud technologies. My Master's degree has equipped me with advanced knowledge in software 
              architecture, distributed systems, and machine learning.
            </p>
            <p className="text-gray-600">
              I'm passionate about creating efficient, scalable solutions that solve real-world problems. My experience spans from 
              front-end development to backend architecture, with a particular focus on cloud-native applications.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Technical Expertise</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <Code className="w-8 h-8 text-blue-600 mb-2" />
                <h4 className="font-semibold mb-2">Frontend</h4>
                <p className="text-gray-600">React.js, TypeScript, Tailwind CSS</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <Server className="w-8 h-8 text-green-600 mb-2" />
                <h4 className="font-semibold mb-2">Backend</h4>
                <p className="text-gray-600">Node.js, Express, RESTful APIs</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <Database className="w-8 h-8 text-purple-600 mb-2" />
                <h4 className="font-semibold mb-2">Databases</h4>
                <p className="text-gray-600">MongoDB, PostgreSQL</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <Book className="w-8 h-8 text-orange-600 mb-2" />
                <h4 className="font-semibold mb-2">Cloud</h4>
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