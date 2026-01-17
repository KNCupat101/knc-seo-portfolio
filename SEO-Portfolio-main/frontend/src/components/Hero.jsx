import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { heroData } from '../mock';
import { ArrowRight, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroData.heroImage}
          alt="Professional workspace"
          className="w-full h-full object-cover scale-105 animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-blue-900/70"></div>
        
        {/* Animated overlay particles */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <div className={`max-w-4xl transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-400 text-sm font-semibold backdrop-blur-sm">
              SEO Specialist & Team Lead
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Driving <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Sustainable</span>
            <br />
            Organic Growth
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-3xl">
            6+ years of experience helping service-based businesses rank on Google, 
            scale SEO operations, and achieve long-term results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg px-8 py-6 flex items-center gap-2 shadow-xl hover:shadow-blue-500/50 transition-all transform hover:scale-105"
            >
              <Mail size={20} />
              Let's Connect
            </Button>
            <Button
              onClick={() => scrollToSection('experience')}
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-6 flex items-center gap-2 transition-all transform hover:scale-105"
            >
              View Experience
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
        >
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
