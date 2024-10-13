"use client"; // Make this a Client Component
import { observer } from "mobx-react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.jsx";
import HomePage from "../components/mainnosign/Home.jsx";
import PropertyTypeFilter from "../components/filters/PropertyFilter";
import PriceFilter from "../components/filters/PriceFilter";
import SearchFilter from "../components/filters/SearchFilter";
import { propertyStore } from "../../stores/PropertyStore";

const Home = observer(({ searchParams }) => {
  const { type = "", search = "" } = searchParams;

  useEffect(() => {
    const fetchProperties = async () => {
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}/ar/housing/api/housing/?name_en__contains=${search}&name_ar__contains=${search}&type=${type}`;
      const res = await fetch(url);
      const data = await res.json();
      propertyStore.setProperties(data.data || []);
    };

    fetchProperties();
  }, [search, type]); // Dependency on search and type

  return (
    <div>
      <Navbar defaultActiveLink={"المساكن"} />
      <main className="overflow-y-scroll scrollbar-hide">
        <div className="flex flex-row" dir="rtl">
          <div className="w-1/4 pt-40">
            <PriceFilter
              maxPrice={propertyStore.initialMaxPrice}
              setMaxPrice={propertyStore.setMaxPrice.bind(propertyStore)}
            />
          </div>
          <div className="w-3/4 pt-20">
            <div className="flex flex-row py-12 justify-center">
              <PropertyTypeFilter
                selectedType={propertyStore.type}
                properties={propertyStore.filteredProperties}
                setType={propertyStore.setType.bind(propertyStore)}
              />
              <SearchFilter
                setSearch={propertyStore.setSearch.bind(propertyStore)}
              />
            </div>
            <HomePage properties={propertyStore.filteredProperties} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
});

export default Home;
