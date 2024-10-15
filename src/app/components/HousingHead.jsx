"use client";
import React from "react";
import SearchFilter from './filters/SearchFilter';
import Link from "next/link";


export default function Head(setSearchQuery) {
  return (
    <div
    className="bg-cover bg-center h-96 w-full mt-4"
    style={{ backgroundImage:  'url(/head.png)'}} 
>

<SearchFilter setSearch={setSearchQuery} />
</div>
  );
}
