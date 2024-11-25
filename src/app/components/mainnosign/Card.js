import React from "react";
import Link from "next/link";
import ReserveButton from "../ReserveButton";

const Card = ({ property }) => {
  return (
    <Link href={`Reserve/${property.id}`}> 
      <div className="w-[500px] h-[137px] border-[1.5px] bg-[#303030] rounded-[12px] overflow-hidden flex row">
        <div className="flex row p-[20px]">
          <div
            className="w-[91.33px] h-[91.33px] bg-cover bg-no-repeat rounded-[8px]"
            style={{ backgroundImage: `url(${property.cover})` }}
          ></div>
          <div className="p-4 flex flex-row" dir="rtl">
            <div className="flex flex-col items-start">
              <h2 className="text-xs font-semibold !text-dcardtext">
                {property.type}
              </h2>
              <p className="text-fcolor">
                {property.city} {property.city ? '-' : ''} {property.neighborhood}
              </p>
              <div className="mt-2 w-[70px] h-[20px] flex flex-row justify-end" dir="ltr">
                <p className="text-sm text-gray-400">ر.س</p>
                <p className="text-xs text-gray-400">{property.price}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end ">
            <div className="mr-24 w-[108px] h-[97px] flex flex-col " dir="ltr">
              <div className="mb-8">
                <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* SVG code */}
                </svg>
                <p className="text-xs text-gray-400">{property.date}</p>
              </div>
              
<Link  href={`/Reserve/${property.id}`} key={property.id} // Call the function when the Link is clicked
      className="w-[108px] h-[33px] flex items-center justify-center px-4 py-1 mr-2 bg-stayro text-gray-100 rounded-[8px] shadow-md hover:bg-opacity-90 transition duration-300"
    >
      <span className="pt-1 text-sm flex no-wrap row font-bold">حجز</span>
    </Link>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
