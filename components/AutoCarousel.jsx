"use client"
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
     '/assets/WhatsApp%20Image%202024-08-28%20at%2020.08.04.jpeg',
    '/assets/WhatsApp%20Image%202024-08-28%20at%2020.08.05.jpeg',
    '/assets/WhatsApp%20Image%202024-08-28%20at%2020.08.06.jpeg',
    '/assets/WhatsApp%20Image%202024-08-28%20at%2020.08.07.jpeg',
];

const AutoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);


  return (
    <AnimatePresence>
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      />
    </AnimatePresence>
  );
};

export default AutoCarousel;
