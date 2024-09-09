"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaFacebookMessenger } from 'react-icons/fa';

const ReachOutTab = () => {
  const [showPopover, setShowPopover] = useState(false);

  const handleMouseEnter = () => {
    setShowPopover(true);
  };

  const handleMouseLeave = () => {
    setShowPopover(false);
  };

  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div
      className="fixed left-0 bottom-0 z-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="flex items-center justify-center p-2 bg-primary-bluish text-white cursor-pointer rounded-tr-md "
        whileHover={{ y: 0 }}
      >
        Reach Out
      </motion.div>

      {showPopover && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="absolute left-0 bottom-full mb-0 p-4 bg-white shadow-lg rounded-lg"
        >
          <div className="flex flex-col items-center space-y-4">
            <motion.span 
                whileHover={{scale:1.2}}
                className='cursor-pointer'
            >

                <FaWhatsapp
                    className="text-green-500 cursor-pointer"
                    size={24}
                    onClick={() => openLink('https://wa.me/your-number')}
                />
              </motion.span>
              <motion.span 
                whileHover={{scale:1.2}}
                className='cursor-pointer'
              >
                <FaFacebookMessenger
                    className="text-blue-500 cursor-pointer"
                    size={24}
                    onClick={() => openLink('https://m.me/your-username')}
                />
            </motion.span>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ReachOutTab;
