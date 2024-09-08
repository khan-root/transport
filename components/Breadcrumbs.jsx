// components/CustomBreadcrumbs.js
"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const CustomBreadcrumbs = () => {
  const path = usePathname();

  // Split the pathname into parts and filter out any empty strings
  const pathParts = path.split('/').filter(part => part);

  return (
    <nav aria-label="breadcrumb">
      <div className='py-4'>
        <span className='capitalize text-[30px] text-white font-bold'>{pathParts}</span>
      </div>
      <div className="flex items-center space-x-2 text-black text-[20px] font-semibold">
        <Link href="/" className="hover:text-primary-bluish">Home</Link>
        {pathParts.map((part, index) => {
          const href = `/${pathParts.slice(0, index + 1).join('/')}`;
          return (
            <div key={index} className="flex items-center">
              <span className="mx-2">/</span>
              {index < pathParts.length - 1 ? (
                <Link href={href} className=" capitalize hover:text-primary-bluish">{part}</Link>
              ) : (
                <span className="capitalize hover:text-primary-bluish">{part}</span>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default CustomBreadcrumbs;
