"use client";

import { useState, useEffect, useRef } from "react";

export default function SearchableDropdown(cityplaceholder) {
  const [cities, setCities] = useState([]); // Stores the list of cities
  const [filteredCities, setFilteredCities] = useState([]); // Stores filtered cities based on search input
  const [selectedCity, setSelectedCity] = useState(""); // Stores the selected city
  const [isOpen, setIsOpen] = useState(false); // Manages the dropdown open/close state
  const [searchTerm, setSearchTerm] = useState(""); // Manages the search term
  const dropdownRef = useRef(null); // Reference for the dropdown container

  // Fetch cities from the API when the component mounts
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch(
          "https://api.stayro.com/ar/city/api/cities/"
        ); // Replace with your actual endpoint
        const result = await response.json();
        console.log("API Response:", result); // Log the full response

        // Access the `data` array from the API response
        if (result.data && result.data.length > 0) {
          setCities(result.data); // Set cities from the data array
          setFilteredCities(result.data); // Initialize filteredCities with all cities
        } else {
          console.log("No cities available in the response.");
        }
      } catch (error) {
        console.error("Error fetching cities:", error); // Log any errors
      }
    };

    fetchCities();
  }, []);

  // Handle selecting a city
  const handleSelectCity = (city) => {
    setSelectedCity(city); // Set the selected city
    setIsOpen(false); // Close the dropdown after selecting
    setSearchTerm(""); // Clear the search term when a city is selected
  };

  // Handle search term change
  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term); // Update the search term
    setSelectedCity(""); // Clear the selected city when typing
    // Filter cities based on search term
    setFilteredCities(
      cities.filter((city) =>
        city.name.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  // this function closes the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Calculate dropdown height based on the number of options (32px each)
  const dropdownHeight = Math.min(filteredCities.length * 32, 205); // Max height of 205px

  return (
    <div className="flex" ref={dropdownRef}>
      <div className="">
        <input
          type="text"
          id="city-search"
          value={searchTerm || selectedCity} // Show search term when typing, otherwise show the selected city
          onChange={handleSearchChange}
          onFocus={() => setIsOpen(true)} // Open dropdown on focus
          placeholder={cityplaceholder?'اختر المدينه':cityplaceholder}
          className="border text-right border-[#303030] bg-[#FFFFFF0D] text-[#A2A2A2] placeholder-[#A2A2A2] p-2 rounded-xl w-[386px] h-[48px]"
        />
        {isOpen && (
          <div
            className="bg-[#FFFFFF0D] border border-black rounded mt-1 w-[386px] overflow-auto shadow-lg"
            style={{ height: `${dropdownHeight}px` }} // Dynamically set the dropdown height
          >
            {filteredCities.length > 0 ? (
              filteredCities.map((city) => (
                <div
                  key={city.id}
                  className="p-2 hover:bg-[#FFFFFF0D] cursor-pointer"
                  onClick={() => handleSelectCity(city.name)}
                  style={{ height: "32px" }} // Set each option's height to 32px
                >
                  {city.name}
                </div>
              ))
            ) : (
              <div className="p-2">لا يوجد</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}