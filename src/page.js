// src/app/page.js
// import {Tajawal} from 'next/font/google' // Import localFont from next/font/local
import Navbar from "./app/components/Navbar.jsx";
import Footer from "./app/components/Footer.jsx";

export default function Home() {
  return (
    <div>
      <Navbar />

      <main className="overflow-y-scroll scrollbar-hide ">
        <p>stayro</p>
      </main>

      <Footer />
    </div>
  );
}
