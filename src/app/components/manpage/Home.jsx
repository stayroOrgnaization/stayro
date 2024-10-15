// "use client"; // Remove this as the component is a server-side component
import { observer } from 'mobx-react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.jsx";
import HomePage from "../components/mainnosign/Home.jsx";
import PropertyTypeFilter from "../components/filters/PropertyFilter";
import PriceFilter from "../components/filters/PriceFilter";
import SearchFilter from "../components/filters/SearchFilter";
import { propertyStore } from '../../stores/PropertyStore';

const Home = observer(({ searchParams, properties, propertyTypes }) => {
    const { type = "", search = "" } = searchParams;

    // Set properties and types from props to MobX store
    propertyStore.setProperties(properties);
    propertyStore.setPropertyTypes(propertyTypes);

    return (
        <div>
            <Navbar defaultActiveLink={'المساكن'} />
            <main className="overflow-y-scroll scrollbar-hide">
                <div className="mx-32 my-8">
                    <SearchFilter setSearch={propertyStore.setSearch.bind(propertyStore)} />
                    <PriceFilter maxPrice={propertyStore.initialMaxPrice} setMaxPrice={propertyStore.setMaxPrice.bind(propertyStore)} />
                    <PropertyTypeFilter selectedType={propertyStore.type} types={propertyStore.propertyTypes} setType={propertyStore.setType.bind(propertyStore)} />
                </div>
                <HomePage properties={propertyStore.filteredProperties} />
            </main>
            <Footer />
        </div>
    );
});

export async function getServerSideProps(context) {
    const { searchParams } = context;
    const { type = "", search = "" } = searchParams;

    const propertiesUrl = `https://api.stayro.com/ar/housing/api/housing/?name_en__contains=${search}&name_ar__contains=${search}&type=${type}`;
    const propertiesRes = await fetch(propertiesUrl);
    const propertiesData = await propertiesRes.json();

    const typesUrl = `https://api.stayro.com/ar/housing/api/housing/?type`; // Adjust the endpoint for property types
    const typesRes = await fetch(typesUrl);
    const typesData = await typesRes.json();
    
    // If typesData is an array of objects, extract type names
    const propertyTypes = typesData.map(type => type.name); // Adjust based on the structure of the response

    return {
        props: {
            searchParams,
            properties: propertiesData.data || [],
            propertyTypes, // Pass property types as props
        },
    };
}

export default Home;
