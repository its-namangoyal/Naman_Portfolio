import { Menu, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm transition-all duration-300 ease-in-out">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <span className="text-xl font-bold text-gray-800">Portfolio</span>
          
          <div className="hidden md:flex space-x-8">
            <Link to="home" smooth={true} duration={500} className="text-gray-600 hover:text-gray-900 transition-colors duration-200 cursor-pointer">Home</Link>
            <Link to="about" smooth={true} duration={500} className="text-gray-600 hover:text-gray-900 transition-colors duration-200 cursor-pointer">About</Link>
            <Link to="experience" smooth={true} duration={500} className="text-gray-600 hover:text-gray-900 transition-colors duration-200 cursor-pointer">Experience</Link>
            <Link to="projects" smooth={true} duration={500} className="text-gray-600 hover:text-gray-900 transition-colors duration-200 cursor-pointer">Projects</Link>
            <Link to="contact" smooth={true} duration={500} className="text-gray-600 hover:text-gray-900 transition-colors duration-200 cursor-pointer">Contact</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/its-namangoyal" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/-naman-goyal/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
              <Linkedin className="w-5 h-5" />
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