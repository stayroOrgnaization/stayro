'use client'; // Necessary for using client-side hooks like useRouter
import React from 'react';// Import useRouter from next/navigation
import { observer } from 'mobx-react-lite'; // Import observer for MobX
import Link from 'next/link';

const ReserveButton = (id) => { // Accept only the property id as a prop

  return (
<Link href={`/Reserve/${id}`} key={id} // Call the function when the Link is clicked
      className="w-[108px] h-[33px] flex items-center justify-center px-4 py-1 mr-2 bg-stayro text-gray-100 rounded-[8px] shadow-md hover:bg-opacity-90 transition duration-300"
    >
      <span className="pt-1 text-sm flex no-wrap row font-bold">حجز</span>
    </Link>
  );
};

export default ReserveButton;
