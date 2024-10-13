// src/components/mainnosign/Home.jsx
import PropertyFilter from '../filters/PropertyFilter'; // Import the PropertyFilter component
import Card from '../HousingCards';
import PropertyList from '../filters/PropertyList';

const HomePage = ({ properties, selectedType }) => {
  // Filter properties based on the selected type
  const filteredProperties = selectedType
    ? properties.filter((property) => property.type === selectedType)
    : properties;

  return (
    <div>
      {/* Filter Dropdown */}

      <div className="flex flex-wrap justify-center gap-4">
        {filteredProperties.map((property) => (
          <Card key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;





