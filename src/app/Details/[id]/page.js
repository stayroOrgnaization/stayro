'use client'
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
  const [selectedDetails, setSelectedDetails] = useState(""); // State for selected details type

  useEffect(() => {
    propertId.fetchProperty(id);
  }, [id]);

  useEffect(() => {
    setSelectedDetails(selectedDetails); // Update state when it changes
  }, [selectedDetails]);

  if (propertId.loading) return <p>Loading...</p>;
  if (propertId.error) return <p>Error loading property data.</p>;

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

            {/* Add the DetailsFilter component */}
            <DetailsFilter
              className="flex flex-row justify-start"
              selectedType={selectedDetails}
              types={['الوصف', 'المرافق', 'الشروط', 'التقييمات']} // Hardcoded types
              setType={setSelectedDetails} // Pass the setSelectedDetails function
            />

      
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
