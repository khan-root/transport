"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import CustomDilaog from '@/components/CustomDilaog'
import ImageView from './ImageView'

const ImagesList = (props) => {
    const { data } = props

    const [show, setShow] = useState(false)
    

    const handleDialog = ()=>{
        setShow(!show)
    }

  return (

    <>
    
    <div className='overflow-hidden'>
        <motion.img
            onClick={handleDialog}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full mb-5 rounded-lg cursor-pointer"
            src={data.src}
            alt={`images-${data.id}`}
        />
    </div>

    {show && 
        <CustomDilaog 
            open={show}
            handleOpen ={handleDialog}
            compo = {
                <ImageView 
                    src = {data.src}
                />
            }
        
        />
    }
    </>


  )
}

export default ImagesList