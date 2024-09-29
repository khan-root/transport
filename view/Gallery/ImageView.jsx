import React from 'react'

const ImageView = (props) => {
    const {src} = props
  return (
    <div className='h-full'>
        <img src={src} className='h-full w-full object-contain' alt={src}/>
    </div>
  )
}

export default ImageView