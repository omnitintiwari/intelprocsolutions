import React, { useEffect, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    // This effect intentionally left empty as the CSS transitions handle the animations
  }, [inView]);

  return (
    <div ref={ref} className={`reveal ${inView ? 'active' : ''} ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedSection;