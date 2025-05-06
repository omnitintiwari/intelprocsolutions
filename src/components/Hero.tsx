import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-primary-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      
      {/* Background shapes */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
        className="absolute top-1/3 right-0 w-96 h-96 bg-primary-200 rounded-full filter blur-3xl"
      ></motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-2/3 left-0 w-80 h-80 bg-accent-200 rounded-full filter blur-3xl"
      ></motion.div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-4 inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium">
                End-to-End Procurement Services
              </div>
              <h1 className="heading-1 mb-6 text-gray-900">
                The End to your<br />
                Procurement Nightmares is here
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-2xl">
              With every inch of process expertly handled to ensure you get the best bang for your buck, we're trusted by industry leaders all around the world and boast a 90%+ Repeat customer rate.

              </p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <a href="#contact" className="btn btn-primary text-base md:text-lg">
                  Get Free Consultation <ChevronRight className="ml-1 h-5 w-5" />
                </a>
                <a href="#about" className="btn btn-secondary text-base md:text-lg">
                  Learn More
                </a>
              </motion.div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 p-4 bg-white rounded-lg shadow-lg border border-gray-50 animate-float" style={{animationDelay: "1s"}}>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-accent-100 flex items-center justify-center text-accent-600">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="font-medium text-sm">90%+ Repeat Rate</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 p-4 bg-white rounded-lg shadow-lg border border-gray-50 animate-float" style={{animationDelay: "1.5s"}}>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  </div>
                  <span className="font-medium text-sm">22 Years Experience</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;