import React from 'react';
import { Menu, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <span className="text-xl font-bold text-gray-800">Portfolio</span>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
            <a href="#experience" className="text-gray-600 hover:text-gray-900">Experience</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-gray-900">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <button className="md:hidden">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;