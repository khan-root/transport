import Image from 'next/image'
import React from 'react'

const ImageView = (props) => {
    const {src} = props
    console.log(src)
  return (
    <div className='overflow-hidden'>
      <div className="relative w-full h-[90vh]"> {/* Apply max-h-[90vh] here */}
        <Image
          src={src}
          alt={src}
          fill // Makes the image fill the parent container
          className="object-contain" // Apply object-contain behavior
          // loading="lazy"
        />
      </div>

    </div>
  )
}

export default ImageView