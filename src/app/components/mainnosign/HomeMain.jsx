import React, { Suspense } from 'react';
import Card from '../HousingCards';
import Loading from '../Loading';

const HomePage = ({ properties, selectedType, isTwoPerRow }) => {
  const filteredProperties = selectedType
    ? properties.filter((property) => property.type === selectedType)
    : properties;

  return (
    <div className='px-[70px]'>
      <div
        className={`grid gap-4 sm:mx-8 md:mx-16 mr-0  ${
          isTwoPerRow ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
        }`}
      >
        {filteredProperties.map((property) => (
          <Card key={property.id} property={property} isTwoPerRow={isTwoPerRow} />
        ))}
      </div>
    </div>
  );
};
export default function HomePageWrapper(props) {
  return (
    <Suspense fallback={<Loading />}>
      <HomePage {...props} />
    </Suspense>
  );
}
