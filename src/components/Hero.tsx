import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Software Developer
              <span className="block text-blue-600">Master's in Applied Computing</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Passionate about building innovative solutions with React.js, Node.js, MongoDB, and AWS.
              Graduate from University of Windsor with expertise in full-stack development.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Projects <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a
                href="/resume.pdf"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors"
              >
                Download CV <Download className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
              alt="Professional headshot"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <p className="font-semibold text-gray-900">4+ Years Experience</p>
              <p className="text-sm text-gray-600">Full Stack Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;