"use client"; // This is a Client Component

import React from "react";
import PriceFilter from "./PriceFilter";
import PropertyTypeFilter from "./PropertyTypeFilter";
import SearchFilter from "./SearchFilter";
import propertyStore from "../../../stores/PropertyStore"; // Import the MobX store

export default function Filters() {
  return (
    <div className="mx-32 my-8">
      <SearchFilter 
        searchQuery={propertyStore.search} 
        setSearch={(search) => propertyStore.setSearch(search)} // Set search in MobX store
      />
      <PriceFilter 
        maxPrice={propertyStore.initialMaxPrice} 
        setMaxPrice={(maxPrice) => propertyStore.setMaxPrice(maxPrice)} // Set max price in MobX store
      />
      <PropertyTypeFilter 
        selectedType={propertyStore.type} 
        setType={(type) => propertyStore.setType(type)} // Set type in MobX store
      />
    </div>
  );
}
