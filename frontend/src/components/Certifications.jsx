import React from 'react';
import { certificationsData } from '../mock';
import { Card, CardContent } from './ui/card';
import { ExternalLink } from 'lucide-react';

const Certifications = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Certifications
          </h2>
          <p className="text-xl text-gray-600">
            Industry-recognized credentials
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificationsData.map((cert) => (
            <a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-blue-400 cursor-pointer">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="h-16 mb-4 flex items-center">
                        <img
                          src={cert.logo}
                          alt={`${cert.title} logo`}
                          className="max-h-12 w-auto object-contain"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-gray-600 mb-1 font-medium">{cert.issuer}</p>
                      <p className="text-sm text-gray-500">{cert.period}</p>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-600 transition-colors">
                      <ExternalLink className="text-blue-600 group-hover:text-white transition-colors" size={20} />
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <span className="text-blue-600 text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                      View Certificate
                      <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// Import ArrowRight at the top
import { ArrowRight } from 'lucide-react';

export default Certifications;
