// components/Card.js
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Card = ({ property }) => {
  return (
    <Link href={property.absolute_url}>
      <div className="w-[278.5px] h-[274.68px] boarder-[1px] rounded-[20px] overflow-hidden shadow-lg  flex-col ">
        <div
          className="w-[276.5] h-[180px] bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${property.cover})` }}
        ></div>
        <div className="p-4 !bg-dcardbg flex flex-row " dir="rtl">
          <div className="flex flex-col items-start">
            <h2 className="text-xs font-semibold !text-dcardtext">
              {property.type}
            </h2>
            <p className="text-fcolor">
              {property.description || "No description available."}
            </p>
            <p className="text-fcolor flex row">
              {property.city ? (
                <>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.9063 7.18945C14.9063 11.8561 8.90625 15.8561 8.90625 15.8561C8.90625 15.8561 2.90625 11.8561 2.90625 7.18945C2.90625 5.59815 3.53839 4.07203 4.66361 2.94681C5.78883 1.82159 7.31495 1.18945 8.90625 1.18945C10.4975 1.18945 12.0237 1.82159 13.1489 2.94681C14.2741 4.07203 14.9063 5.59815 14.9063 7.18945Z"
                      stroke="#FF5B2D"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.90625 9.18945C10.0108 9.18945 10.9062 8.29402 10.9062 7.18945C10.9062 6.08488 10.0108 5.18945 8.90625 5.18945C7.80168 5.18945 6.90625 6.08488 6.90625 7.18945C6.90625 8.29402 7.80168 9.18945 8.90625 9.18945Z"
                      stroke="#FF5B2D"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  {property.city}
                </>
              ) : (
                ""
              )}
            </p>
          </div>
          <div className="flex flex-col items-end">
            <Image
              src={property.provider.image_url}
              alt="Profile"
              className="rounded-full object-cover"
              width={40.38} // Add width property here
              height={40.38} // Add height property here
            />

            <div
              className="text-lg mt-2 w-[61px] h-[22px] gap-4 flex flex-row justify-end "
              dir="ltr"
            >
              <p className="text-sm text-gray-400 pt-1">ر.س</p>
              <p>{property.price}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
