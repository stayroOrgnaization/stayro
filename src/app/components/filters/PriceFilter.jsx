import React from 'react';
import { observer } from 'mobx-react';
import { propertyStore } from '../../../stores/PropertyStore';
export default function PriceFilter({ maxPrice, setMaxPrice }) {
  return (
      <div>
          <input
              type="range"
              min="0"
              max={maxPrice}
              defaultValue={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
          <span>Max Price: {maxPrice} </span>
      </div>
  );
}
