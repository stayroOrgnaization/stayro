"use client";
import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import propertId from "@/stores/Properties/propertyId";
import Loading from "@/app/components/Loading";
import Navbar from "@/app/components/LogedNav";
import PropertyList from "@/app/components/filters/PropertyList";
import housingStore from "@/stores/HousingStore";
import Footer from "@/app/components/Footer";

const Details = observer(({ params }) => {
  const { id } = params; 

  useEffect(() => {
    propertId.fetchProperty(id); 
  }, [id]);

  if (propertId.loading) return <Loading />;

  if (propertId.error) return <Error />;

  return (
    <div>
      {propertId.property ? (
        <>
          <Navbar defaultActiveLink={""} />
          <Footer />
        </>
      ) : (
        <p>No property data available.</p>
      )}
    </div>
  );
});

export default Details;
