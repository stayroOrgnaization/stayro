// src/app/page.js
// import {Tajawal} from 'next/font/google' // Import localFont from next/font/local
import Navbar from "./Customer/components/Navbar.jsx";
import Footer from "./Customer/components/Footer.jsx";
import Profile from "./Customer/components/Profile.jsx";

export default function Home() {
  return (
    <div>
      <Navbar />

      <main className="overflow-y-scroll scrollbar-hide ">
        <p>home</p>
      </main>

      <Footer />
    </div>
  );
}
