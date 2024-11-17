import React from "react";
import { propertyStore } from "../../../stores/PropertyStore"; // Adjust path as needed

const DetailsFilter = ({ selectedType, setType, types }) => {
  const handleTypeClick = (type) => {
    setType(type); // Update selected type in the parent state
    propertyStore.setPropertyType(type); // Optionally update the store
  };

  return (
    <div className="flex justify-end">
      <div className="flex justify-end px-2 py-2 w-full h-[70px] rounded-[88px] gap-[16px] border border-white space-x-4 my-12 mx-4 sm:mx-12 md:mx-24 lg:mx-32">
        <div className="flex justify-center w-full">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => handleTypeClick(type)} 
              className={`w-[80px] sm:w-[100px] md:w-[122px] h-[46px] rounded-[33px] flex items-center justify-center ${
                selectedType === type ? "bg-white text-gray-500" : "bg-dbg"
              }`}
            >
              <p className="mx-2">{type}</p> 
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsFilter;
