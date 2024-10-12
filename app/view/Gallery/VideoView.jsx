import React from 'react'

const VideoView = (props) => {
    const { src } = props 

  return (
    <div className='overflow-hidden'>
        <video 
            className="w-full max-h-[90vh] object-contain" 
            controls
            muted
            loop
            playsInline
        >
            <source src={src} type="video/mp4" />
        </video>
    </div>
  )
}

export default VideoView