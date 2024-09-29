import React from 'react'

const VideoView = (props) => {
    const { src } = props 

  return (
    <div>
        <video 
            className="w-full" 
            autoPlay
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