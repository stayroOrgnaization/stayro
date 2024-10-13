// src/app/page.js
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import HomePage from "./components/mainnosign/Home.jsx";
import PropertyFilter from "./components/filters/PropertyFilter";
import PropertyList from "./components/filters/PropertyList";

export default async function Home({ searchParams }) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/ar/housing/api/housing/?name_en__contains=&name_ar__contains=&type=&status=&street__neighborhood__city__country=&street__neighborhood__city=&street__neighborhood=&street=&price__gte=&price__lte=&created_at__date__range=&updated_at__date__range=`, {
      cache: "no-store"  
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch properties: ${res.statusText}`);
    }

    const data = await res.json();
    const properties = data.data || [];
    const selectedType = searchParams.type || "";

    // Extract unique property types
    const types = Array.from(new Set(properties.map((property) => property.type)));

    return (
      <div>
        <Navbar />
        <main className="overflow-y-scroll scrollbar-hide">
          <PropertyFilter selectedType={selectedType} types={types} />
          <HomePage properties={properties} selectedType={selectedType} />
          <div className="mx-32">
            <div className="flex flex-row justify-end gap-[48px]">
              <div className="flex flex-col justify-end items-end text-right">
                <h2 className="text-2xl font-bold my-4">المضافة حديثاً</h2>
                <h3 className="text-xl my-2">تصفح أحدث الشقق المضافة</h3>
              </div>
            </div>
            <PropertyList properties={properties} />
          </div>
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error(error.message);
    return <div>Error loading properties. Please try again later.</div>;
  }
}
