import React from 'react';

const TestimonialList = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <div className="relative bg-blue-500 text-white py-10 px-16 cursor-pointer group hover:bg-white hover:text-primary-blackGray transition-all duration-1000 ease-in-out">
        <p className="text-center text-lg font-semibold">
          "It's all about nautical distancing," said Gavan Hunt, the vice president of sales for Chris-Craft Boats based in Sarasota, Florida. "Truly, it was a freedom people needed and wanted."
        </p>
        <svg 
          className="absolute -bottom-[70px] left-1/2 transform -translate-x-1/2 h-20 w-20 text-blue-500 rotate-180 group-hover:text-white transition-all duration-1000 ease-in-out"
          viewBox="0 0 24 24" 
          fill="currentColor" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 14l-8 8h16l-8-8zM12 0v12" />
        </svg>
      </div>
      <div className="mt-12 text-center">
        <img
          src="https://via.placeholder.com/80"
          alt="Profile"
          className="w-20 h-20 rounded-full mx-auto"
        />
        <h3 className="mt-4 text-lg font-semibold text-gray-800">Najriya Nazim</h3>
        <p className="text-blue-600">Engineer</p>
      </div>
    </div>
  );
}

export default TestimonialList;
