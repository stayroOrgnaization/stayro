"use client"
import React from 'react';
import Link from 'next/link';

const PropertyFilter = ({ selectedType, types = [] }) => {
  return (
    <div className='flex justify-center sm:justify-end'>
      <div className="flex justify-center px-2 py-2 w-full max-w-[450px] h-[70px] rounded-[88px] gap-[16px] border border-white space-x-4 my-12 mx-4 sm:mx-12 md:mx-24 lg:mx-32">
        <div className='flex justify-center w-full'>
          {types.length > 0 ? (
            types.map((type) => (
              <Link key={type} href={`/?type=${type}`} passHref>
                <button
                  className={`w-[80px] sm:w-[100px] md:w-[122px] h-[46px] rounded-[33px] flex items-center justify-center ${
                    selectedType === type ? 'bg-white text-gray-500' : 'bg-dbg'
                  }`}
                >
                  {selectedType === type && <span className="ml-2"><svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.8307 1.51953L4.4974 8.85286L1.16406 5.51953" stroke="#1A1A1A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>} <p className='mx-2'>{type}</p>
                </button>
              </Link>
            ))
          ) : (
            <p>No property types available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyFilter;
