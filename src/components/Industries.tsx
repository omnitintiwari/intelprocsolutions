import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Radio, Droplet, Monitor, Anchor, Zap, Heart } from 'lucide-react';

const Industries: React.FC = () => {
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
        staggerChildren: 0.15
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

  const industries = [
    {
      icon: <Radio className="h-10 w-10" />,
      name: 'Telecom',
      color: 'bg-blue-50 text-blue-600 border-blue-100'
    },
    {
      icon: <Droplet className="h-10 w-10" />,
      name: 'Oil & Gas',
      color: 'bg-amber-50 text-amber-600 border-amber-100'
    },
    {
      icon: <Monitor className="h-10 w-10" />,
      name: 'IT',
      color: 'bg-indigo-50 text-indigo-600 border-indigo-100'
    },
    {
      icon: <Anchor className="h-10 w-10" />,
      name: 'Shipping & Marine',
      color: 'bg-cyan-50 text-cyan-600 border-cyan-100'
    },
    {
      icon: <Zap className="h-10 w-10" />,
      name: 'Energy',
      color: 'bg-yellow-50 text-yellow-600 border-yellow-100'
    },
    {
      icon: <Heart className="h-10 w-10" />,
      name: 'Healthcare',
      color: 'bg-rose-50 text-rose-600 border-rose-100'
    }
  ];

  return (
    <section id="industries" className="section bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.div variants={itemVariants} className="mb-4 inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mx-auto">
            Industries Served
          </motion.div>
          <motion.h2 variants={itemVariants} className="heading-2 mb-4">
            Specialized Expertise Across Sectors
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg max-w-3xl mx-auto text-gray-700">
            We have a deep understanding of the unique procurement challenges faced by various industries, allowing us to provide tailored solutions.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className={`${industry.color} p-6 rounded-xl border shadow-sm hover:shadow-md transition-all text-center`}
            >
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-white mb-4 shadow-sm">
                {industry.icon}
              </div>
              <h3 className="text-xl font-semibold">{industry.name}</h3>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 bg-gray-50 p-8 rounded-xl max-w-4xl mx-auto"
        >
          <h3 className="heading-3 mb-4 text-center">Vendor Partnerships</h3>
          <p className="text-gray-700 mb-6 text-center">
            Our vendor portfolio includes prominent names like Fujikura, Fujitsu, Garmin, ITT, Intel, Muhlbauer, Nexans, and Tesa.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {['Fujikura', 'Fujitsu', 'Garmin', 'Intel', 'ITT', 'Muhlbauer', 'Nexans', 'Tesa'].map((vendor, index) => (
              <div key={index} className="bg-white py-4 px-2 rounded-lg flex items-center justify-center shadow-sm">
                <span className="font-medium text-gray-800">{vendor}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;