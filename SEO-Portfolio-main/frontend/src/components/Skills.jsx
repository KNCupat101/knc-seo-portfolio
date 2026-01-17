import React from 'react';
import { skillsData } from '../mock';
import { Badge } from './ui/badge';

const Skills = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive SEO skillset for sustainable growth
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {skillsData.map((skill, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="px-6 py-3 text-base font-medium bg-gray-100 hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-default"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
