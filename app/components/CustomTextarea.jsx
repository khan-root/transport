"use client";
import React from 'react';

const CustomTextarea = (props) => {
    const { placeholder, onChange, name, icon } = props;
    return (
        <div className="bg-primary-gray flex items-start">
            <textarea 
                className="outline-none w-[95%] py-4 px-4 bg-transparent resize-none"
                placeholder={placeholder}
                onChange={onChange}
                name={name}
                rows={4}  // You can adjust the number of rows as needed
            />
            {icon && (
                <span className="text-primary-bluish pt-4 px-2 flex self-start ">
                    {icon}
                </span>
            )}
        </div>
    );
}

export default CustomTextarea;
