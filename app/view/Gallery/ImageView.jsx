import React from 'react'

const ImageView = (props) => {
    const {src} = props
  return (
    <div className='overflow-hidden'>
        <img src={src} className='w-full max-h-[90vh] object-contain' alt={src} />
    </div>
  )
}

export default ImageView