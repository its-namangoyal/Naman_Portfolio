import { useState } from 'react';
import { Menu, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling mobile menu

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm transition-all duration-300 ease-in-out">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <span className="text-xl font-bold text-gray-800">Portfolio</span>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="home" smooth={true} duration={500} className="text-gray-600 hover:text-gray-900 transition-colors duration-200 cursor-pointer">Home</Link>
            <Link to="about" smooth={true} duration={500} className="text-gray-600 hover:text-gray-900 transition-colors duration-200 cursor-pointer">About</Link>
            <Link to="experience" smooth={true} duration={500} className="text-gray-600 hover:text-gray-900 transition-colors duration-200 cursor-pointer">Experience</Link>
            <Link to="projects" smooth={true} duration={500} className="text-gray-600 hover:text-gray-900 transition-colors duration-200 cursor-pointer">Projects</Link>
            <Link to="contact" smooth={true} duration={500} className="text-gray-600 hover:text-gray-900 transition-colors duration-200 cursor-pointer">Contact</Link>
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/its-namangoyal" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/-naman-goyal/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute left-0 right-0 top-16 bg-white shadow-md`}>
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link to="home" smooth={true} duration={500} onClick={toggleMenu} className="text-gray-600 hover:text-gray-900 transition-colors duration-200 cursor-pointer">Home</Link>
            <Link to="about" smooth={true} duration={500} onClick={toggleMenu} className="text-gray-600 hover:text-gray-900 transition-colors duration-200 cursor-pointer">About</Link>
            <Link to="experience" smooth={true} duration={500} onClick={toggleMenu} className="text-gray-600 hover:text-gray-900 transition-colors duration-200 cursor-pointer">Experience</Link>
            <Link to="projects" smooth={true} duration={500} onClick={toggleMenu} className="text-gray-600 hover:text-gray-900 transition-colors duration-200 cursor-pointer">Projects</Link>
            <Link to="contact" smooth={true} duration={500} onClick={toggleMenu} className="text-gray-600 hover:text-gray-900 transition-colors duration-200 cursor-pointer">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
