// src/app/page.js
// import {Tajawal} from 'next/font/google' // Import localFont from next/font/local
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

export default function Home() {
  return (
    <div>
      <Navbar />

      <main className="overflow-y-scroll scrollbar-hide ">
        <p></p>
      </main>

      <Footer />
    </div>
  );
}
