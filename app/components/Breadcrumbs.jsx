"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const CustomBreadcrumbs = () => {
  const path = usePathname();

  // Split the path into parts and filter out empty strings
  const pathParts = path.split('/').filter(part => part);

  // Get the last part of the path (for the simplified version)
  const lastPart = pathParts[pathParts.length - 1];

  return (
    <nav aria-label="breadcrumb">
      <div className="py-4">
        {/* Show the last part of the URL in the title */}
        <span className="capitalize text-[30px] text-white font-bold">{lastPart}</span>
      </div>

      <div className="flex items-center space-x-2 text-black text-[20px] font-semibold">
        {/* Link to home */}
        <Link href="/" className="hover:text-primary-bluish">Home</Link>

        {/* Simplified version: Home / [Last Part of URL] */}
        {lastPart && (
          <div className="flex items-center">
            <span className="mx-2">/</span>
            <span className="capitalize hover:text-primary-bluish">{lastPart}</span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default CustomBreadcrumbs;
