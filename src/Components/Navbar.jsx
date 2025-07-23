import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Code, Sparkles, ArrowUpRight } from 'lucide-react';
import { NavLink, Link } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'About', href: '/about', id: 'about' },
    { name: 'Projects', href: '/projects', id: 'projects' },
    { name: 'Skills', href: '/skills', id: 'skills' },
    { name: 'Experience', href: '/experience', id: 'experience' },
    { name: 'Contact', href: '/contact', id: 'contact' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/TaFhiM12', label: 'GitHub', color: 'hover:text-gray-900' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/tanvir-mahtab-tafhim/', label: 'LinkedIn', color: 'hover:text-blue-600' },
  ];

  return (
    <div>
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50  max-w-screen-xl px-4">
        <div className="relative">
          <div 
            className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3 shadow-2xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="hidden lg:flex items-center justify-between relative z-10">
              <NavLink 
                to="/" 
                className="flex items-center space-x-2 pr-6 border-r border-white/10"
                onClick={() => setActiveSection('home')}
              >
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Code className="w-4 h-4 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <span className="text-white font-semibold text-lg">Portfolio</span>
              </NavLink>

              <div className="flex items-center space-x-6 mx-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.id}
                    to={item.href}
                    className={({ isActive }) => `relative text-sm font-medium transition-all duration-300 group ${
                      isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                    onClick={() => setActiveSection(item.id)}
                  >
                    {item.name}
                    <div className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full ${
                      activeSection === item.id ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </NavLink>
                ))}
              </div>

              <div className="flex items-center space-x-3 pl-6 border-l border-white/10">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/10 rounded-lg`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:hidden flex items-center justify-between">
              <NavLink 
                to="/" 
                className="flex items-center space-x-2"
                onClick={() => {
                  setActiveSection('home');
                  setIsOpen(false);
                }}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Code className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-semibold">Portfolio</span>
              </NavLink>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {isHovered && (
            <div className="absolute inset-0 pointer-events-none">
              <Sparkles className="absolute -top-2 -left-2 w-4 h-4 text-purple-400 animate-pulse" />
              <Sparkles 
                className="absolute -bottom-2 -right-2 w-3 h-3 text-cyan-400 animate-pulse" 
                style={{ animationDelay: '0.5s' }} 
              />
              <Sparkles 
                className="absolute top-1/2 -right-4 w-2 h-2 text-blue-400 animate-pulse" 
                style={{ animationDelay: '1s' }} 
              />
            </div>
          )}
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="lg:hidden fixed inset-0 z-40"
          >
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            ></div>
            
            <div className="absolute top-0 right-0 h-full w-80 max-w-[90vw] bg-black/95 backdrop-blur-xl border-l border-white/10">
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Code className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Portfolio</h3>
                      <p className="text-gray-400 text-sm">Menu</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.id}
                    to={item.href}
                    onClick={() => {
                      setActiveSection(item.id);
                      setIsOpen(false);
                    }}
                    className={({ isActive }) => `flex items-center justify-between p-4 rounded-xl transition-all duration-300 group ${
                      isActive 
                        ? 'bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white border border-white/10' 
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="font-medium">{item.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </NavLink>
                ))}
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="border-t border-white/10 pt-6">
                  <p className="text-gray-400 text-sm mb-4">Connect with me</p>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/10 rounded-xl flex-1 text-center`}
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5 mx-auto" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <NavLink
          to="/contact"
          className="group bg-gradient-to-r from-purple-500 to-cyan-500 text-white p-4 rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110 flex items-center space-x-2"
          onClick={() => setActiveSection('contact')}
        >
          <Mail className="w-5 h-5" />
          <span className="hidden group-hover:block text-sm font-medium pr-2">
            Let's Connect
          </span>
        </NavLink>
      </motion.div>
    </div>
  );
};

export default Navbar;