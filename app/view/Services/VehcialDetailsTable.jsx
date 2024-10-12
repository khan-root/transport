"use client"
import { Typography } from '@material-tailwind/react'
import React from 'react'

const VehcialDetailsTable = (props) => {
  const { tableData,  tableDesctription,tableHeader} = props
  return (
    <div className='space-y-2'>
      <div className='text-[20px] text-black'>
        <span>{tableDesctription}</span>
      </div>
      <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {tableHeader?.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
              {tableData?.map((ele,i)=>{
                const isLast = i === tableData.length - 1;
            const classes = isLast ? "p-4 " : "p-4 border-b border-blue-gray-50 ";
              
            return(
                <tr key={i} className="even:bg-blue-gray-50/50">
                    <td className={classes}>
                      <Typography
                         variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                      >
                        {ele.title}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                         variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                      >
                        {ele.time}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                         variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70 flex items-center gap-3"
                      >
                        <span>
                          {ele.price}
                        </span>
                        <span>AED/$</span>
                      </Typography>
                    </td>
                </tr>
              )})}
          </tbody>
      </table>
    </div>
  )
}

export default VehcialDetailsTable
