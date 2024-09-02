"use client"
import React from 'react'

const CustomInput = (props) => {
    const { placeholder, onChange, name , icon, type="text"} = props
  return (
    <div className='bg-primary-gray flex items-center'>
        <input 
            className='outline-none w-[90%] py-4 px-4 bg-transparent'
            placeholder={placeholder}
            onChange={onChange}
            name={name}
            type={type}
        />
        <span className='text-primary-bluish'>
            {icon}
        </span>
    </div>
  )
}

export default CustomInput