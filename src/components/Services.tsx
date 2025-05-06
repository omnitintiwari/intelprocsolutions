import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Package, DollarSign, Truck, HeadphonesIcon } from 'lucide-react';

const Services: React.FC = () => {
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

  const services = [
    {
      icon: <Search className="h-8 w-8 text-primary-600" />,
      title: 'Finding the Right Suppliers',
      description: 'We understand what you need and suggest the best suppliers that match your requirements and standards.'
    },
    {
      icon: <Package className="h-8 w-8 text-primary-600" />,
      title: 'Sourcing Products and Equipment',
      description: 'We recommend the right products for your business and ensure they pass our industry-leading standards.'
    },
    {
      icon: <DollarSign className="h-8 w-8 text-primary-600" />,
      title: 'Negotiating Deals',
      description: 'We get you the best prices and terms, including extras like support and warranties wherever possible.'
    },
    {
      icon: <Truck className="h-8 w-8 text-primary-600" />,
      title: 'Managing Delivery',
      description: 'We organize shipping that saves time and costs, ensuring your products arrive on schedule.'
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8 text-primary-600" />,
      title: 'After-Sales Support',
      description: 'We construct training that helps you use the products effectively and offer ongoing support services.'
    }
  ];

  return (
    <section id="services" className="section bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.div variants={itemVariants} className="mb-4 inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mx-auto">
            Our Services
          </motion.div>
          <motion.h2 variants={itemVariants} className="heading-2 mb-4">
            End-to-End Procurement Excellence
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg max-w-3xl mx-auto text-gray-700">
            We take care of every step in the buying process, providing comprehensive procurement solutions tailored to your specific needs.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
            >
              <div className="mb-5 p-3 rounded-lg bg-primary-50 inline-block">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <a href="#contact" className="btn btn-primary inline-flex items-center">
            Discuss Your Procurement Needs
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;