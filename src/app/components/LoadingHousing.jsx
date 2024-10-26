// src/components/Loading.js

import React from 'react';

const Loading = () => {
    return (
        <div  className={`grid gap-4 mx-16 sm:mx-8 md:mx-24 justify-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
      <div className="animate-pulse p-4 rounded-lg shadow-lg bg-[#303030] max-w-sm w-full mx-auto">
      <div className="h-48 bg-[#a2a2a2] rounded-md mb-4"></div>
      <div className="h-4 bg-[#a2a2a2] rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-[#a2a2a2] rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-[#a2a2a2] rounded w-full"></div>
    </div>
    <div className="animate-pulse p-4 rounded-lg shadow-lg bg-[#303030] max-w-sm w-full mx-auto">
    <div className="h-48 bg-[#a2a2a2] rounded-md mb-4"></div>
    <div className="h-4 bg-[#a2a2a2] rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-[#a2a2a2] rounded w-1/2 mb-2"></div>
    <div className="h-4 bg-[#a2a2a2] rounded w-full"></div>
  </div>
  <div className="animate-pulse p-4 rounded-lg shadow-lg bg-[#303030] max-w-sm w-full mx-auto">
  <div className="h-48 bg-[#a2a2a2] rounded-md mb-4"></div>
  <div className="h-4 bg-[#a2a2a2] rounded w-3/4 mb-2"></div>
  <div className="h-4 bg-[#a2a2a2] rounded w-1/2 mb-2"></div>
  <div className="h-4 bg-[#a2a2a2] rounded w-full"></div>
</div>
</div>
    );
};

export default Loading;

