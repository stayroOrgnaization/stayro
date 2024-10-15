import { propertyStore } from "../../../stores/PropertyStore"; // Import the store

export default function SearchFilter() {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      propertyStore.setSearch(e.target.value); // Update the search in the store
    }
  };

  return (
    <div className="relative w-[473px]  sm:w-auto">
      <svg
        width="20" // Adjust the width to fit your design
        height="20" // Adjust the height to fit your design
        viewBox="0 0 20 20"
        fill="none"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" // Absolute positioning and center vertically
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8.68475 16.5404C12.7758 16.5404 16.0922 13.224 16.0922 9.133C16.0922 5.042 12.7758 1.72559 8.68475 1.72559C4.59375 1.72559 1.27734 5.042 1.27734 9.133C1.27734 13.224 4.59375 16.5404 8.68475 16.5404Z" stroke="#FF5B2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.9457 18.392L13.918 14.3643" stroke="#FF5B2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <input
  type="text"
  dir="rtl"
  className="w-full h-[57px] bg-[#1A1A1A] px-4 py-2 rounded-full border border-gray-700 text-fcolor focus:outline-none shadow-md transition-all duration-200 ease-in-out pr-10" 
  onKeyDown={handleKeyDown}
  placeholder="بحث"
/>

    </div>
  );
}

