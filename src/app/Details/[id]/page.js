'use client';
import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import propertId from "@/stores/Properties/propertyId";
import Navbar from "@/app/components/LogedNav";
import PropertyList from "@/app/components/filters/PropertyList";
import Footer from "@/app/components/Footer";
import DetailsFilter from "@/app/components/filters/DetailsFilter";
import housingStore from "@/stores/HousingStore";

const Details = observer(({ params }) => {
  const { id } = params;
  const [selectedDetails, setSelectedDetails] = useState(""); 

  useEffect(() => {
    propertId.fetchProperty(id);
  }, [id]);

  useEffect(() => {
    setSelectedDetails(selectedDetails); 
  }, [selectedDetails]);

  if (propertId.loading) return <p></p>;
  if (propertId.error) return <p></p>;

  const renderDetailsContent = () => {
    switch (selectedDetails) {
      case 'الوصف':
        return (
          <div className="mt-4 p-4">
            <h3 className="text-xl font-bold">الوصف</h3>
            <p>{propertId.property.description}</p>
          </div>
        );
      case 'المرافق':
        return (
          <div className="mt-4 p-4">
            <h3 className="text-xl font-bold">المرافق</h3>
            <ul>
              {propertId.property.amenities?.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          </div>
        );
      case 'الشروط':
        return (
          <div className="mt-4 p-4">
            <h3 className="text-xl font-bold">الشروط</h3>
            <p>{propertId.property.terms}</p>
          </div>
        );
      case 'التقييمات':
        return (
          <div className="mt-4 p-4">
            <h3 className="text-xl font-bold">التقييمات</h3>
            <ul>
              {propertId.property.reviews?.map((review, index) => (
                <li key={index}>{review.comment}</li>
              ))}
            </ul>
          </div>
        );
      default:
        return <p></p>;
    }
  };

  return (
    <div>
      {propertId.property ? (
        <>
          <Navbar />
          <div className="flex flex-col justify-between items-start py-20" dir="rtl">
            <div className="w-[1320px] h-[475px] mx-40 overflow-hidden flex row">
              <div className="flex row p-[20px]">
                <div
                  className="w-[639px] h-[435px] bg-cover bg-no-repeat rounded-[8px]"
                  style={{ backgroundImage: `url(${propertId.property.cover})` }}
                ></div>
                <div className="p-4 flex flex-row" dir="rtl">
                  <div className="flex flex-col items-start">
                    <h2 className="text-xs font-semibold text-dcardtext">{propertId.property.type}</h2>
                    <div className="mt-8 w-[140px] h-[20px] flex flex-row justify-end" dir="ltr">
                      <p className="text-fcolor">
                        {propertId.property.city}
                        {propertId.property.city ? " - " : ""}
                        {propertId.property.neighborhood}
                      </p>
                    </div>
                    <div className="mt-12 w-[140px] h-[20px] flex flex-row-reverse items-end" dir="ltr">
                      <p className="text-fcolor mt-8 text-6xl font-bold">{propertId.property.price}</p>
                      <div className="m-[4px]"></div>
                      <p className="text-fcolor text-2xl font-bold ">{propertId.property.price ? " ر.س " : ""}</p>
                    </div>
                    <div>
                      <button className="w-[609px] h-[57px] bg-stayro mt-52 rounded-[18px]">تأكيد الحجز</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <DetailsFilter
              className="flex flex-row justify-start"
              selectedType={selectedDetails}
              types={['الوصف', 'المرافق', 'الشروط', 'التقييمات']}
              setType={setSelectedDetails}
            />
            {/* Display the selected content */}
            <div className="mt-10">
              {renderDetailsContent()}
            </div>
            <PropertyList properties={housingStore.houses} />
            <Footer />
          </div>
        </>
      ) : (
        <p></p>
      )}
    </div>
  );
});

export default Details;
