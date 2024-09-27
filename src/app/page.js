import Navbar from './components/Navbar'; // Import the Navbar component
import Footer from './components/Footer'; // Import the Footer component

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen  gap-16 sm: font-[family-name:var(--font-geist-sans)]">
      <header className="w-full">
        <Navbar /> {/* Add the Navbar here */}
      </header>

      <main className="items-center">
        <p>stayro</p>
      </main>

      <Footer /> {/* Footer at the bottom */}
    </div>
  );
}
