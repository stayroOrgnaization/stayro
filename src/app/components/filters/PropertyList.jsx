// src/components/mainnosign/PropertyList.jsx
import Card from '../mainnosign/Card';

const PropertyList = ({ properties = [] }) => {
  return (
    <div className="overflow-x-auto whitespace-nowrap scrollbar-hide py-4 px-4" dir="rtl">
      {properties.length > 0 ? (
        properties.map((property) => (
          <div className="inline-block mx-2" key={property.id}>
            <Card property={property} />
          </div>
        ))
      ) : (
      ''
      )}
    </div>
  );
};

export default PropertyList;