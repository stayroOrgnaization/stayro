// src/app/page.js
import {Tajawal} from 'next/font/google' // Import localFont from next/font/local
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

// Load the font from the 'public/fonts' directory
const tajawal = Tajawal({ // Adjust the path as needed
  subsets: ['arabic'],
  weight: ['400', '700'],
  preload: false,
});

export default function Home() {
  return (
    <div>
     <Navbar/>

      <main className='overflow-y-scroll scrollbar-hide '>
        <p>stayro</p>
      </main>

      
    <Footer/>
    </div>
  );
}
