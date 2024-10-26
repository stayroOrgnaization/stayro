import React, { Suspense } from 'react';
import Card from '../HousingCards';
import Loading from '../Loading';

const HomePage = ({ properties, selectedType, isTwoPerRow }) => {
  const filteredProperties = selectedType
    ? properties.filter((property) => property.type === selectedType)
    : properties;

  return (
    <div>
      {/* Properties Grid */}
      <div
        className={`grid gap-4 mx-4 sm:mx-8 md:mx-16 justify-center ${
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

// Wrap the component in React.lazy for code-splitting
const LazyHomePage = React.lazy(() => import('./Home'));

export default function HomePageWrapper(props) {
  return (
    <Suspense fallback={<Loading />}>
      <HomePage {...props} />
    </Suspense>
  );
}
