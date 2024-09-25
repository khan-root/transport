import React from 'react';

const TestimonialList = (props) => {
  const { data } = props;

  return (
    <div className="grid grid-cols-1 gap-10 p-10">
      <div className="relative h-[400px] bg-primary-bluish text-white p-6 cursor-pointer group hover:bg-white hover:text-primary-blackGray transition-all duration-1000 ease-in-out flex flex-col justify-between">
        {/* Centering text and ensuring ellipsis for longer content */}
        <span className="text-center text-lg font-semibold overflow-hidden line-clamp-3 flex-grow flex items-center justify-center">
          {data.description}
        </span>
        <svg 
          className="absolute -bottom-[70px] left-1/2 transform -translate-x-1/2 h-20 w-20 text-primary-bluish rotate-180 group-hover:text-white transition-all duration-1000 ease-in-out"
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
        <h3 className="mt-4 text-lg font-semibold text-gray-800">{data.name}</h3>
        <p className="text-primary-bluish">Engineer</p>
      </div>
    </div>
  );
}

export default TestimonialList;
