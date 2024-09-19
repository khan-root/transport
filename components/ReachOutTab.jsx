"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaFacebookMessenger } from 'react-icons/fa';
import { IoLogoWechat } from 'react-icons/io5';

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
      className="fixed left-0 bottom-[50%] translate-y-[-50%] z-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="flex items-center justify-center p-4 bg-primary-bluish text-white cursor-pointer rounded-tr-md rounded-br-md border border-primary-bluish hover:text-primary-bluish hover:bg-white "
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
                  onClick={() => openLink('https://wa.me/+923116565767')}
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
            <motion.span 
              whileHover={{scale:1.2}}
              className='cursor-pointer'
            >
              <IoLogoWechat
                  className="text-green-500 cursor-pointer"
                  size={24}
                  // onClick={() => openLink('https://u.wechat.com/kNBMWkz1GC6nMdmVchaRnBk')}
              />
            </motion.span>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ReachOutTab;
