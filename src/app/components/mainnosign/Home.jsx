import Card from '../HousingCards'; 

const HomePage = async ({ properties, initialCount }) => {
  const renderCards = (count) => {
    return properties.slice(0, count).map((property) => (
      <div key={property.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 py-2">
        <Card property={property} />
      </div>
    ));
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center pt-8 gap-[32px]">
        {renderCards(initialCount)} 
      </div>
      {initialCount < properties.length && (
        <div className="flex mt-4">
          <a 
            href={`?count=${initialCount + 12}`} 
            className="bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600"
          >
            Show More
          </a>
        </div>
      )}
    </div>
  );
};

export default HomePage;
