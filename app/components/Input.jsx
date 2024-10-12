import React from 'react'

const Input = ({placeholder, onChange, name}) => {
  return (
    <input 
        className='outline-none w-[90%] py-2 pl-2 pr-4 bg-transparent'
        placeholder={placeholder}
        onChange={onChange}
        name={name}
    />
  )
}

export default Input