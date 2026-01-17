import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-gray-900/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div 
            className="text-xl font-bold cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="text-white">Kenneth</span>
            <span className="text-blue-500"> Cupat</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-200 hover:text-blue-400 transition-colors font-medium relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-gray-200 hover:text-blue-400 transition-colors font-medium relative group"
            >
              Experience
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('case-studies')}
              className="text-gray-200 hover:text-blue-400 transition-colors font-medium relative group"
            >
              Case Studies
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-200 hover:text-blue-400 transition-colors font-medium relative group"
            >
              Testimonials
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Let's Connect
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-200 hover:text-blue-400 transition-colors font-medium text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-gray-200 hover:text-blue-400 transition-colors font-medium text-left"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('case-studies')}
                className="text-gray-200 hover:text-blue-400 transition-colors font-medium text-left"
              >
                Case Studies
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-200 hover:text-blue-400 transition-colors font-medium text-left"
              >
                Testimonials
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white w-full"
              >
                Let's Connect
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
