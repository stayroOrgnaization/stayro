import Card from '../HousingCards'; 

const HomePage = ({ properties }) => {
  return (
    <div className="flex flex-wrap justify-center  ">
      {properties.map((property) => (
        <Card key={property.id} property={property} />
      ))}
    </div>
  );
};

export default HomePage;
