"use client";
import { useEffect, useState } from "react";
import Script from "next/script";

const MapComponent = () => {
  const [houses, setHouses] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [map, setMap] = useState(null);

  // Initialize the Google Map
  const initMap = () => {
    const mapOptions = {
      center: { lat: 24.7136, lng: 46.6753 }, // Default center: Riyadh
      zoom: 10,
    };
    const googleMap = new google.maps.Map(
      document.getElementById("map"),
      mapOptions
    );
    setMap(googleMap);
    console.log("Google Map initialized.");
  };

  useEffect(() => {
    window.initMap = initMap;

    return () => {
      delete window.initMap;
    };
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://api.stayro.com/ar/housing/api/housing"
      );
      const apiResponse = await response.json();
      console.log("API Response:", apiResponse);

      const houseList = Array.isArray(apiResponse.data) ? apiResponse.data : [];
      const normalizedInput = userInput.trim().toLowerCase();

      const filteredHouses = houseList.filter((house) => {
        const city = house.city ? house.city.toLowerCase() : "";
        const neighborhood = house.neighborhood
          ? house.neighborhood.toLowerCase()
          : "";
        return (
          (city.includes(normalizedInput) ||
            neighborhood.includes(normalizedInput)) &&
          house.latitude !== null &&
          house.longitude !== null
        );
      });

      console.log("Filtered Houses:", filteredHouses);
      setHouses(filteredHouses);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // Render custom cards on the map
  useEffect(() => {
    if (map && houses.length > 0) {
      houses.forEach((house) => {
        if (house.latitude && house.longitude) {
          const position = new google.maps.LatLng(
            house.latitude,
            house.longitude
          );

          const CustomOverlay = new google.maps.OverlayView();
          CustomOverlay.onAdd = function () {
            const div = document.createElement("div");
            div.className = "house-card";
            div.style.position = "absolute";
            div.style.width = "75px";
            div.style.height = "80px";
            div.style.backgroundColor = "white";
            div.style.border = "1px solid black";
            div.style.textAlign = "center";
            div.style.padding = "5px";
            div.innerHTML = `<strong>${house.name}</strong><br />Price: ${house.price}`;

            const panes = this.getPanes();
            panes.overlayLayer.appendChild(div);

            this.div = div;
          };

          CustomOverlay.draw = function () {
            const projection = this.getProjection();
            const pos = projection.fromLatLngToDivPixel(position);
            this.div.style.left = `${pos.x - 37.5}px`;
            this.div.style.top = `${pos.y - 40}px`;
          };

          CustomOverlay.onRemove = function () {
            if (this.div) {
              this.div.parentNode.removeChild(this.div);
              this.div = null;
            }
          };

          CustomOverlay.setMap(map);
          console.log(
            `Card created for house: ${house.name}, at position:`,
            position
          );
        } else {
          console.warn("House has no valid coordinates:", house);
        }
      });
    }
  }, [map, houses]);

  return (
    <div>
      <Script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBq5wl_l9ZEBSb0eHz6ckiM4kapQGVaRPQ&callback=initMap"
        strategy="afterInteractive"
      />
      <input
        type="text"
        placeholder="Enter city or neighborhood"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && fetchData()}
        className="text-black"
      />
      <div id="map" style={{ width: "100%", height: "500px" }}></div>

      <style jsx>{`
        .house-card {
          font-size: 12px;
          color: black;
        }
      `}</style>
    </div>
  );
};

export default MapComponent;
