"use client";
import React, { useRef, useEffect } from 'react';

const Button = ({ title, type = "button", onClick = () => null }) => {
  const btnRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (btnRef.current) {
        const rect = btnRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        btnRef.current.style.setProperty('--x', `${x}px`);
        btnRef.current.style.setProperty('--y', `${y}px`);
      }
    };

    const btn = btnRef.current;
    if (btn) {
      btn.addEventListener('mousemove', handleMouseMove);
    }

    // Cleanup
    return () => {
      if (btn) {
        btn.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn relative overflow-hidden px-4 py-3 w-fit before:bg-white bg-primary-bluish border border-white font-semibold text-xl tracking-widest text-white
        before:absolute before:w-0 before:h-0 before:top-[var(--y)] before:left-[var(--x)] before:rounded-full  
        before:transform before:translate-x-[-50%] before:translate-y-[-50%] before:opacity-0
        hover:before:w-[500px] hover:before:h-[500px] hover:before:opacity-100 before:z-0
        hover:text-black
        before:transition-all before:duration-500
        group`}
      ref={btnRef}
    >
      <div className='relative z-10 flex items-center gap-2'>
        <span>{title}</span>
        <span className='svgContainer'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 transition-transform duration-300 ease-out transform group-hover:translate-x-2 group-hover:scale-110"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </span>
      </div>
    </button>
  );
};

export default Button;
