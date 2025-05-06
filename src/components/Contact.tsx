import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
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
    <section id="contact" className="section bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.div variants={itemVariants} className="mb-4 inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mx-auto">
            Contact Us
          </motion.div>
          <motion.h2 variants={itemVariants} className="heading-2 mb-4">
            Ready to Supercharge Your Procurement?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg max-w-3xl mx-auto text-gray-700">
            Get in touch with us to discuss your procurement needs.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-2xl mx-auto"
        >
          <motion.div 
            variants={itemVariants}
            className="bg-white p-8 rounded-xl shadow-md border border-gray-100"
          >
            <div className="space-y-8">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-primary-600 mr-4" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">+91 7845800822</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-primary-600 mr-4" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">Ray@intelproc.in</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;