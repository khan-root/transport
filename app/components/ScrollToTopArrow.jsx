"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollToTopArrow = () => {
  const [showArrow, setShowArrow] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage = (currentScroll / totalHeight) * 100;

      setScrollProgress(scrollPercentage);
      setShowArrow(currentScroll > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const radius = 20; // Adjust this based on your SVG's viewBox and size
  const circumference = 2 * Math.PI * radius;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: showArrow ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-8 right-8 flex items-center justify-center cursor-pointer z-[9999]"
      onClick={scrollToTop}
    >
      <div className="relative w-16 h-16">
        <svg
          className="absolute inset-0 transform -rotate-90"
          width="100%"
          height="100%"
          viewBox="0 0 50 50"
        >
          <circle
            cx="25"
            cy="25"
            r={radius}
            stroke="gray"
            strokeWidth="4"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (scrollProgress / 100) * circumference}
            style={{ transition: 'stroke-dashoffset 0.2s ease-in-out' }}
          />
        </svg>
        <div className="flex items-center justify-center w-full h-full bg-white rounded-full shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default ScrollToTopArrow;
