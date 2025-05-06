import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AlertTriangle, BarChart2, Clock, PuzzleIcon } from 'lucide-react';

const Problem: React.FC = () => {
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

  const challenges = [
    {
      icon: <AlertTriangle className="h-6 w-6 text-red-500" />,
      title: 'Complex Supply Chains',
      description: 'Navigating multi-tier suppliers across global markets.'
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-orange-500" />,
      title: 'Cost Pressures',
      description: 'Balancing quality requirements with budget constraints.'
    },
    {
      icon: <Clock className="h-6 w-6 text-yellow-500" />,
      title: 'Time Constraints',
      description: 'Meeting tight deadlines with limited procurement resources.'
    },
    {
      icon: <PuzzleIcon className="h-6 w-6 text-blue-500" />,
      title: 'Regulatory Compliance',
      description: 'Keeping up with changing industry regulations and standards.'
    }
  ];

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
    <section className="section bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="heading-2 mb-4">
            Let's face it: Finding the right procurement provider is <span className="text-primary-600">hard</span>.
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
            You're faced with thousands of false promises, too many options, and far too little time to make a sound decision that might just be the one that makes or breaks your entire corporation.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="mb-4 p-3 inline-flex rounded-lg bg-gray-50">
                {challenge.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{challenge.title}</h3>
              <p className="text-gray-600">{challenge.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-primary-50 border border-primary-100 p-6 md:p-8 rounded-xl max-w-4xl mx-auto"
        >
          <p className="text-lg md:text-xl font-medium text-primary-900 text-center">
            But what if we told you, there's a way out of this loop of misery?<br />
            <span className="font-semibold text-primary-700">A procurement solution that puts an end to it all.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;