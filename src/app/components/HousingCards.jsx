// components/Card.js
import React from 'react';
import Link from 'next/link';

const Card = ({ property }) => {
    return (
        <Link href={property.absolute_url} >
        <div className="w-[278.5px] h-[274.68px] boarder-[1px] rounded-[20px] overflow-hidden shadow-lg m-4 flex-col">
           <div className="w-[276.5] h-[180px] bg-cover bg-no-repeat" style={{ backgroundImage: `url(${property.cover})` }}></div> 
            <div className="p-4 !bg-dcardbg flex flex-row justify-center items-center" dir='rtl'>
                <div>
                <h2 className="text-xs font-semibold !text-dcardtext">{property.type}</h2>
                <p className="text-fcolor">{property.description || 'No description available.'}</p>
                </div>
                <div>
                <img src={property.provider.image_url}
        alt="Profile" 
        className="rounded-full w-[40.38px] h-[40.38px] object-cover mr-16"
      />
                <p className="text-lg mt-2 w-[61px] h-[22px] gap-4 flex flex-row justify-center " dir='ltr'> <p className='text-sm text-gray-400 pt-1'>ر.س</p> <p>{property.price}</p> </p>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Card;
