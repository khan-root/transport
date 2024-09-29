import React from 'react'
import { Dialog, DialogBody, DialogHeader } from '@material-tailwind/react'
import { IoClose } from 'react-icons/io5'

const CustomDilaog = (props) => {
  const {open, handleOpen, compo} = props
  return (
    <Dialog open={open} handler={handleOpen} size='lg' className='p-1'>
        <DialogHeader className='flex items-end justify-end'>
          <IoClose onClick={handleOpen} className='cursor-pointer'/>
        </DialogHeader>
        <DialogBody className='p-1'>
          {compo}
        </DialogBody>
      </Dialog>
  )
}

export default CustomDilaog