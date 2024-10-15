// components/mainnosign/Home.jsx
// Home.jsx
import React from 'react';
import Card from '../HousingCards';


const HomePage = ({ properties, selectedType, isTwoPerRow }) => {
  const filteredProperties = selectedType
    ? properties.filter((property) => property.type === selectedType)
    : properties;

  return (
    <div>
      {/* Properties Grid */}
      <div className={`grid gap-4 mx-16 justify-center ${isTwoPerRow ? 'grid-cols-2' : 'grid-cols-4'}`}>
        {filteredProperties.map((property) => (
          <Card key={property.id} property={property} isTwoPerRow={isTwoPerRow} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;