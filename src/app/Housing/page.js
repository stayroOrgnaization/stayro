"use client";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import CardViewStore from "../../stores/cardViewStore";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.jsx";
import HomePage from "../components/mainnosign/Home.jsx";
import PropertyFilter from "../components/filters/PropertyFilter";
import PropertyList from "../components/filters/PropertyList";
import PriceFilter from "../components/filters/PriceFilter";
import SearchFilter from "../components/filters/SearchFilter";
import Loading from "../components/Loading";
import { propertyStore } from "../../stores/PropertyStore";
import Head from "../components/HousingHead";
import CardViewToggle from "../components/CardViewToggle";

const Home = observer(({ searchParams }) => {
  const { type = "", search = "" } = searchParams;
  const [selectedType, setSelectedType] = useState("");
  const [searchQuery, setSearchQuery] = useState(search);
  const [loading, setLoading] = useState(true);
  const [isTwoPerRow, setIsTwoPerRow] = useState(false); 
  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      try {
        const url = `${process.env.NEXT_PUBLIC_BASE_URL}/ar/housing/api/housing/`;
        const res = await fetch(url);
        const data = await res.json();
        propertyStore.setProperties(data.data || []);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [searchQuery, selectedType]);

  useEffect(() => {
    propertyStore.setSearch(searchQuery);
    propertyStore.setPropertyType(selectedType);
  }, [searchQuery, selectedType]);

  const toggleGridView = () => {
    setIsTwoPerRow(!isTwoPerRow);
  };

  if (loading) {
    return <Loading message="Fetching properties, please wait..." />;
  }

  return (
    <div>
      <Navbar defaultActiveLink={"المساكن"} />
      <div
        className="bg-cover bg-center h-96 w-full mt-4 flex flex-col justify-center items-center"
        style={{ backgroundImage: "url(/head.png)" }}
      >
        
        <h1 className="w-[602px] h-[62px] text-[62px]">
          احجز براحة، اختر ستيرو
        </h1>
        <div className="mt-4 bg-[#1A1A1A} !w-[473px] md:mt-6 lg:mt-8">
          <SearchFilter setSearch={setSearchQuery} />
        </div>
      </div>

      <main className="overflow-y-scroll scrollbar-hide">
        <div className="flex flex-row" dir="rtl">
          <div className="w-1/4 py-20">
            <PriceFilter
              maxPrice={propertyStore.initialMaxPrice}
              setMaxPrice={propertyStore.setMaxPrice.bind(propertyStore)}
              minPrice={propertyStore.initialMinPrice}
            />
          </div>
          <div className="w-3/4 ">
            <div className="flex flex-row items-center justify-between my-8 ml-40">
              <PropertyFilter
                selectedType={selectedType}
                types={Array.from(
                  new Set(
                    propertyStore.properties.map((property) => property.type)
                  )
                )}
                setType={setSelectedType}
              />

              <CardViewToggle
                isTwoPerRow={isTwoPerRow}
                toggleGridView={toggleGridView}
              />
            </div>
            <HomePage
              properties={propertyStore.filteredProperties}
              selectedType={selectedType}
              isTwoPerRow={isTwoPerRow}
            />
          </div>
        </div>
        <div className="mx-32">
          <div className="flex flex-row justify-end gap-[48px]">
            <div className="flex flex-col justify-end items-end text-right">
              <h2 className="text-2xl font-bold my-4">المضافة حديثاً</h2>
              <h3 className="text-xl my-2">تصفح أحدث الشقق المضافة</h3>
            </div>
          </div>
          <PropertyList properties={propertyStore.properties} />
        </div>
      </main>
      <Footer />
    </div>
  );
});

export default Home;
