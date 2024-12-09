import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Code2, Terminal } from 'lucide-react';
import { Link } from 'react-scroll'; // Import from react-scroll

const Hero = () => {
  return (
    <>
      <section id="home" className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(0,0,0,1)_70%,transparent_110%)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-700/50">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-300">Open to opportunities</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gray-400">
                  <Terminal className="w-5 h-5" />
                  <code className="font-mono">Hello World, I'm</code>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                    Naman Goyal
                  </span>
                </h1>

                <div className="flex flex-wrap items-center gap-3 text-2xl font-semibold">
                  <span className="text-gray-100">Software Engineer</span>
                  <span className="text-gray-500">/</span>
                  <span className="text-blue-500">Full Stack Developer</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                Crafting exceptional digital experiences with modern web technologies.
                Specialized in building scalable applications with clean code practices.
              </p>

              {/* Tech Stack */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Code2 className="w-4 h-4" />
                  <span className="font-mono">TECH STACK</span>
                </div>

                <div className="flex flex-wrap gap-3">
                  {['React.js', 'Node.js', 'SQL', 'Express.js', 'MongoDB', 'Angular', 'TypeScript', 'Django', 'AWS', 'Next.js'].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 
                      hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="projects"
                  smooth={true}
                  duration={800}
                  offset={-50} // Adjust for fixed headers
                  className="group px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 
                  transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  View Projects
                  <ArrowRight
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500 ease-in-out"
                  />
                </Link>
                <a
                  href="Naman_Goyal_Resume.pdf" target='_blank'
                  className="group px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-lg 
                  border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800/80 
                  transition-all duration-300 flex items-center gap-2"
                >
                  Download CV
                  <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-6 pt-8">
                <a href="https://github.com/its-namangoyal" target='_blank' className="text-gray-400 hover:text-white transition-colors duration-300">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/-naman-goyal/" target='_blank' className="text-gray-400 hover:text-white transition-colors duration-300">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Right Content - Animated Code Block */}
            <div className="relative hidden lg:block">
              <div className="relative z-10 rounded-lg overflow-hidden bg-gray-900/80 backdrop-blur-sm p-8 border border-gray-700/50">
                <pre className="text-sm font-mono text-gray-300">
                  <code>{`{
  "name": "Naman Goyal",
  "title": "Full Stack Developer",
  "skills": {
    "frontend": ["React", "Next.js", "Angular", "TypeScript"],
    "backend": ["Node.js","SQL", "Express", "MongoDB"],
    "cloud": ["AWS", "Docker", "CI/CD", "Kubernetes"]
  },
  "status": "Available for opportunities"
}`}</code>
                </pre>
              </div>

              {/* Experience Badge */}
              <div
                className="absolute -bottom-6 -right-6 bg-gray-800/80 backdrop-blur-sm p-6 
      rounded-lg border border-gray-700/50 z-20"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="h-12 w-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 
          flex items-center justify-center font-bold text-xl"
                  >
                    1+
                  </div>
                  <div>
                    <p className="font-medium text-gray-200">Years of</p>
                    <p className="text-gray-400">Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
