// src/components/filters/AreaFilter.jsx
import React from 'react';
import { observer } from 'mobx-react';

const AreaFilter = ({ maxArea, setMaxArea }) => {
  return (
    <div>
      <input
        type="range"
        className='accent-stayro'
        min="0"
        max={maxArea}
        defaultValue={maxArea}
        onChange={(e) => setMaxArea(Number(e.target.value))}
      />
      <span>Max Area: {maxArea} m²</span>
    </div>
  );
};

export default observer(AreaFilter);
