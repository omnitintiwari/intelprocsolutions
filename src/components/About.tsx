import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, Shield, Users, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-4 inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium">
              About IntelProc Solutions
            </motion.div>
            <motion.h2 variants={itemVariants} className="heading-2 mb-4">
              22 Years of Procurement Excellence
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-gray-700 mb-6">
              With our industry-leading processes created by expert innovators, we pave the way for the best procurement solutions that exist in the industry.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg text-gray-700 mb-6">
              Our experience working with top OEM industry leaders in the Telecom, Oil & Gas, IT, Shipping and Marine helps us set the industry standard that makes your buying easier.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg text-gray-700 mb-8">
              Driven by the personal experience of our founder in the Procurement Industry as a customer before, IntelProc was created to ensure that none of our clients' needs go unmet.
            </motion.p>
            
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-2" />
                <span className="text-gray-700">Trusted by global leaders</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-2" />
                <span className="text-gray-700">90%+ Repeat customer rate</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-2" />
                <span className="text-gray-700">End-to-end solutions</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-2" />
                <span className="text-gray-700">Industry-specific expertise</span>
              </div>
            </motion.div>
          </motion.div>
          
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-br from-primary-50 to-white p-1 rounded-2xl shadow-xl"
            >
              <div className="bg-white p-8 rounded-xl border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-primary-50 p-6 rounded-lg">
                    <Shield className="h-10 w-10 text-primary-600 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Industry Experience</h3>
                    <p className="text-gray-700">Over two decades of specialized procurement expertise across multiple sectors.</p>
                  </div>
                  
                  <div className="bg-accent-50 p-6 rounded-lg">
                    <Users className="h-10 w-10 text-accent-600 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
                    <p className="text-gray-700">Procurement specialists with deep industry knowledge and negotiation skills.</p>
                  </div>
                  
                  <div className="bg-secondary-50 p-6 rounded-lg">
                    <TrendingUp className="h-10 w-10 text-secondary-600 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
                    <p className="text-gray-700">Consistent cost savings and efficiency improvements for our clients.</p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 mb-4">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                    <h3 className="text-lg font-semibold mb-2">Quality Assurance</h3>
                    <p className="text-gray-700">Rigorous standards to ensure only the best products and services.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-primary-100 rounded-full opacity-30 blur-2xl"></div>
            <div className="absolute -z-10 -top-6 -left-6 w-48 h-48 bg-accent-100 rounded-full opacity-30 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;