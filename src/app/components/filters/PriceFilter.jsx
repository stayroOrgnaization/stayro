import React from 'react';
import { observer } from 'mobx-react';
import { propertyStore } from '../../../stores/PropertyStore';
export default function PriceFilter({ maxPrice, setMaxPrice ,minPrice }) {
  return (
      <div>
        <div className='flex justify-between px-24'>  <span>ر.س {minPrice}</span> <span>ر.س {maxPrice} </span></div>

          <input
              type="range"
              className=' accent-stayro'
              min={minPrice}
              max={maxPrice}
              defaultValue={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
          
      </div>
  );
}