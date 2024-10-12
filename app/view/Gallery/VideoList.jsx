"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import VideoView from './VideoView'
import CustomDilaog from '@/app/components/CustomDilaog'

const VideoList = (props) => {
    const { data } = props

    const [show, setShow] = useState(false)
    

    const handleDialog = ()=>{
        setShow(!show)
    }
  return (
    <>
    <div className='overflow-hidden'>
        <motion.video 
            onClick={handleDialog}
            // initial={{ scale: 1 }}
            // whileHover={{ scale: 1.1 }}
            // transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full mb-4 rounded-lg cursor-pointer" 
            // autoPlay
            controls
            muted
            loop
            playsInline
        >
            <source src={data.src} type="video/mp4" />
        </motion.video>
    </div>
    {show && 
        <CustomDilaog 
            open={show}
            handleOpen ={handleDialog}
            compo = {
                <VideoView 
                    src = {data.src}
                />
            }
        
        />
    }
    </>
  )
}

export default VideoList