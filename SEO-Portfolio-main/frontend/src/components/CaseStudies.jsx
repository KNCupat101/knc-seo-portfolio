import React from 'react';
import { caseStudiesData } from '../mock';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { TrendingUp } from 'lucide-react';

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600">
            Proven results across multiple industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudiesData.map((study, index) => (
            <Card
              key={study.id}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col transform hover:-translate-y-2 border-2 hover:border-blue-400 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {study.title}
                </CardTitle>
                <p className="text-sm font-semibold text-blue-600">
                  {study.client}
                </p>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Challenge:
                    </h4>
                    <p className="text-gray-700 text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Solution:
                    </h4>
                    <p className="text-gray-700 text-sm">{study.solution}</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <TrendingUp size={18} className="text-green-600" />
                      Results:
                    </h4>
                    <ul className="space-y-1">
                      {study.results.map((result, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-gray-700 text-sm"
                        >
                          <span className="inline-block w-1.5 h-1.5 bg-green-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
