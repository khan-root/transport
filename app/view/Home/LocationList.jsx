"use client";
import { motion } from 'framer-motion';
import React from 'react';

const LocationList = () => {
  return (
    <div className="shadow-md rounded-md overflow-hidden cursor-pointer">
      <div className="relative group"> {/* Add the 'group' class */}
        {/* Image with hover scale */}
        <motion.img
          src="/assets/WhatsApp Image 2024-08-28 at 20.08.08 (1).jpeg"
          alt="bus"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full object-cover"
        />

        {/* Text and blur effect container */}
        <div className="absolute inset-x-0 bottom-0 h-[50px] flex items-center justify-center">
          <motion.div
            className="w-full h-full flex items-center justify-center backdrop-blur-md bg-gray-400/5 group-hover:backdrop-blur-0 group-hover:bg-transparent transition-all duration-1000 ease-in-out"
          >
            <span className="text-white font-bold text-[20px]">Location</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LocationList;
