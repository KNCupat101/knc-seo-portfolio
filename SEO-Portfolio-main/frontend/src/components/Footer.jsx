import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { contactInfo } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Kenneth Noel Cupat</h3>
            <p className="text-gray-400">SEO Specialist & Team Lead</p>
            <p className="text-gray-400 mt-2">{contactInfo.location}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#case-studies"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Kenneth Noel Cupat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
