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
    <div className="relative w-full h-[200px] lg:h-full overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}  // Show only the current image
          initial={{ x: '100%' }}  // Start from the right
          animate={{ x: 0 }}  // Animate to center
          exit={{ x: '-100%' }}  // Exit to the left
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full object-contain"  // Ensure image takes full width and height
          style={{ position: 'absolute', top: 0, left: 0 }}  // Ensure it's absolutely positioned
        />
      </AnimatePresence>
    </div>
  );
};

export default AutoCarousel;
