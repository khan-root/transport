"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaFacebookMessenger } from 'react-icons/fa';
import { IoLogoWechat } from 'react-icons/io5';
import { BiPhoneCall } from 'react-icons/bi';

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
      className="fixed right-0 bottom-[50%] translate-y-[-50%] z-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative flex items-center justify-center">
        <motion.div
          className="flex items-center justify-center p-4 bg-primary-bluish text-white cursor-pointer rounded-full border border-primary-bluish hover:text-primary-bluish hover:bg-white"
          whileHover={{ y: 0 }}
        >
          <span><BiPhoneCall /></span>
        </motion.div>

        {/* SVG for circular text */}
        <svg className="absolute" width="100" height="100" viewBox="0 0 100 100">
          <defs>
            <path
              id="circlePath"
              d="M 75, 75 m -60, 0 a 60,60 0 1,1 110,0 a 60,60 0 1,1 -110,0"
            />
          </defs>

          <text className="text-primary-bluish font-semibold">
            <textPath href="#circlePath" startOffset="0">
              Contact Us
            </textPath>
          </text>
        </svg>
      </div>


      

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
                  onClick={() => openLink('https://wa.me/+971568681888')}
              />
            </motion.span>
            <motion.span 
              whileHover={{scale:1.2}}
              className='cursor-pointer'
            >
              <FaFacebookMessenger
                  className="text-blue-500 cursor-pointer"
                  size={24}
                  onClick={() => openLink('https://www.facebook.com/profile.php?id=61564524538991&mibextid=ZbWKwL')}
              />
            </motion.span>
            <motion.span 
              whileHover={{scale:1.2}}
              className='cursor-pointer'
            >
              <IoLogoWechat
                  className="text-green-500 cursor-pointer"
                  size={24}
                  onClick={() => openLink('https://u.wechat.com/kNBMWkz1GC6nMdmVchaRnBk')}
              />
            </motion.span>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ReachOutTab;