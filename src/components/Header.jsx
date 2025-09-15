import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, User, Briefcase, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Works', href: '#works', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const handleNavClick = (href) => {
    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/20'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#hero');
              }}
              className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 transition-colors duration-300"
            >
              Ahmed<span className="text-blue-600">.</span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            className="hidden md:flex items-center space-x-6 lg:space-x-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-sm lg:text-base font-medium text-gray-700 hover:text-gray-900 transition-colors duration-300 relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-300"
            onClick={toggleMenu}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden overflow-hidden"
        initial={{ opacity: 0, maxHeight: 0 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          maxHeight: isMenuOpen ? 400 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-200/20 shadow-lg">
          <div className="px-4 py-6 space-y-3">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="flex items-center gap-3 px-4 py-3 text-sm sm:text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <IconComponent className="h-5 w-5" />
                  <span>{item.name}</span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
