"use client"
import React, { useEffect, useState } from 'react';



const VehcialImages = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const [imageArray, setImageArray] = useState([]);

  useEffect(()=>{
    setImageArray(images)
  },[images])

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="flex flex-col items-center space-y-4 w-ful">
      {/* Large Image */}
      <div className="w-full">
        <img
          src={imageArray && imageArray[selectedImageIndex]}
          alt={`Vehicle Image ${selectedImageIndex + 1}`}
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      {/* Small Thumbnails */}
      <div className="flex overflow-hidden">
        <div className="flex space-x-4">
          {imageArray?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`w-20 h-20 rounded-lg cursor-pointer object-cover transition-transform duration-300 ${
                selectedImageIndex === index ? 'scale-110' : 'opacity-70 hover:opacity-100'
              }`}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VehcialImages;
