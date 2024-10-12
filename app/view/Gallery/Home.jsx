
import React from 'react';
import ImagesList from './ImagesList';
import VideoList from './VideoList';

const Home = () => {

  const galleryDataLeft = [
    {id:1, src:'/assets/carousel2.jpeg'},
    {id:2, src:'/assets/kia.jpg'},
    {id:3, src:'/assets/car1.jpg'},
    {id:4, src:'/assets/carousel1.jpeg'},
    {id:5, src:'/assets/sprinter2.jpg'}
  ]

  const galleryDataRight = [
    {id: 1, src:'/assets/bus1.jpg'},
    {id:2, src:'/assets/carousel3.jpeg'},
    {id:3, src:'/assets/bus2.jpg'},
    {id:4, src:'/assets/carousel4.jpeg'}
  ]

  const galleryDataCenter = [
    {id:1, src:'/assets/videos/inner.mp4'},
    {id:2, src:'/assets/videos/inner3.mp4'},
    {id:3, src:'/assets/videos/inner4.mp4'},
  ]

  return (
    
    <div className="w-full lg:w-10/12 lg:mx-auto h-full py-20">
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2">
        <div className="flex flex-col gap-2">
          {galleryDataLeft?.map((ele)=>(

            <ImagesList 
              key={ele.id}
              data = {ele}
            />
          ))}
        </div>

        <div className="flex flex-col gap-2">
          
           {galleryDataCenter.map((ele)=>(
            <VideoList 
              key={ele.id}
              data = {ele}
            />
          ))}
        </div>

        <div className="flex flex-col gap-2">
          {galleryDataRight.map((ele)=>(
            <ImagesList 
              key={ele.id}
              data = {ele}
            />
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default Home;
