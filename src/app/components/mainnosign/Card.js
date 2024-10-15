
import React from "react";
import Link from "next/link";

const Card = ({ property }) => {
  return (
    <Link href={property.absolute_url}>
      <div className=" w-[500px] h-[137px] boarder-gray-700 border-[1.5px] rounded-[12px] overflow-hidden shadow-lg flex row">
        <div className="flex row p-[20px]">
        <div
          className="w-[91.33px] h-[91.33px] bg-cover bg-no-repeat rounded-[8px]"
          style={{ backgroundImage: `url(${property.cover})` }}
        ></div>
        <div className="p-4  flex flex-row" dir="rtl">
          <div className="flex flex-col items-start">
            <h2 className="text-xs font-semibold !text-dcardtext">
              {property.type}
            </h2>
            <p className="text-fcolor">
              {property.city  } {property.city ? '-': ''} {property.neighborhood}
            </p>
            <div className="mt-2 w-[70px] h-[20px] flex flex-row justify-end" dir="ltr">
              <p className="text-sm text-gray-400">ر.س</p>
              <p className="text-xs text-gray-400">{property.price}</p>
            </div>
          </div>
          </div>
          <div className="flex flex-col items-end">
           
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
