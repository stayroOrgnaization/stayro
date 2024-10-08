// src/app/page.js
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./components/mainnosign/Home.jsx";

export default async function Home() {
  // Fetch data from the API
  const res = await fetch('https://api.stayro.com/ar/housing/api/housing/?name_en__contains=&name_ar__contains=&type=&status=&street__neighborhood__city__country=&street__neighborhood__city=&street__neighborhood=&street=&price__gte=&price__lte=&created_at__date__range=&updated_at__date__range=', {
    next: { revalidate: 10 } // Optional: Set revalidation time
  });

  // Check if the response is okay (status code 200-299)
  if (!res.ok) {
    console.error('Error fetching data:', res.status, res.statusText);
    return <div>Error loading properties. Please try again later.</div>;
  }

  const data = await res.json();
  const properties = data.data;

  return (
    <div>
      <Navbar />
      <main className="overflow-y-scroll scrollbar-hide">
        <HomePage properties={properties} />
      </main>
      <Footer />
    </div>
  );
}
