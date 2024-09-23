
import React from 'react';

const Home = () => {
  return (
    
    <div className="w-full lg:w-10/12 lg:mx-auto h-full py-20">
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2">
        <div className="flex flex-col">
          <img className="w-full mb-5 rounded-lg" src="/assets/carousel2.jpeg" alt="image1" />
          <img className="w-full mb-5 rounded-lg" src="/assets/kia.jpg" alt="image1" />
          <img className="w-full mb-5 rounded-lg" src="/assets/car1.jpg" alt="image1" />
          <img className="w-full mb-5 rounded-lg" src="/assets/carousel1.jpeg" alt="image1" />
          <img className="w-full mb-5 rounded-lg" src="/assets/sprinter2.jpg" alt="image1" />
        </div>

        <div className="flex flex-col">
            <video 
                className="w-full mb-4 rounded-lg"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/assets/videos/inner.mp4" type="video/mp4" />
            </video>
            {/* <video 
                className="w-full mb-4 rounded-lg"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/assets/videos/inner2.mp4" type="video/mp4" />
            </video> */}
            <video 
                className="w-full mb-4 rounded-lg"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/assets/videos/inner3.mp4" type="video/mp4" />
            </video>
            <video 
                className="w-full mb-4 rounded-lg"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/assets/videos/inner4.mp4" type="video/mp4" />
            </video>
        </div>

        <div className="flex flex-col">
          <img className="w-full mb-5 rounded-lg" src="/assets/bus1.jpg" alt="image6" />
          <img className="w-full mb-5 rounded-lg" src="/assets/carousel3.jpeg" alt="image6" />
          <img className="w-full mb-5 rounded-lg" src="/assets/bus2.jpg" alt="image6" />
          <img className="w-full mb-5 rounded-lg" src="/assets/carousel4.jpeg" alt="image6" />
        </div>
      </div>
    </div>
  );
};

export default Home;
