import { makeAutoObservable } from "mobx";

class PropertyStore {
    properties = [];
    filteredProperties = [];
    allTypes = []; // Add this line to store all types
    initialMaxPrice = 0;
    initialMinPrice = 0;
    initialMaxArea = 0;

    search = "";
    type = ""; // Corrected to singular 'type'
    maxPrice = 0;
    minPrice = 0;
    maxArea = 0;

    constructor() {
        makeAutoObservable(this);
    }

    setProperties(properties) {
        this.properties = properties;
        this.filteredProperties = properties;

        if (properties.length > 0) {
            this.initialMaxPrice = Math.max(...properties.map(property => property.price));
            this.initialMinPrice = Math.min(...properties.map(property => property.price));
            this.initialMaxArea = Math.max(...properties.map(property => property.area));

            // Extract and set all property types
            this.allTypes = Array.from(new Set(properties.map(property => property.type)));
        } else {
            this.initialMaxPrice = 0;
            this.initialMinPrice = 0;
            this.initialMaxArea = 0;
            this.allTypes = []; // Reset types if no properties
        }

        this.maxPrice = this.initialMaxPrice;
        this.minPrice = this.initialMinPrice;
        this.maxArea = this.initialMaxArea;

        this.filterProperties();
    }

    setSearch(search) {
        this.search = search;
        this.filterProperties();
    }

    setPropertyType(type) {
        this.type = type;
        this.filterProperties();
    }

    setMaxPrice(maxPrice) {
        if (maxPrice >= this.initialMinPrice && maxPrice <= this.initialMaxPrice) {
            this.maxPrice = maxPrice;
            this.filterProperties();
        }
    }

    setMinPrice(minPrice) {
        if (minPrice >= 0 && minPrice <= this.initialMaxPrice) {
            this.minPrice = minPrice;
            this.filterProperties();
        }
    }

    setMaxArea(maxArea) {
        if (maxArea >= 0 && maxArea <= this.initialMaxArea) {
            this.maxArea = maxArea;
            this.filterProperties();
        }
    }

    filterProperties() {
        console.log("Filtering properties with search:", this.search, "type:", this.type); // Debugging line
        this.filteredProperties = this.properties.filter(property => {
            const matchesSearch = property.name.toLowerCase().includes(this.search.toLowerCase());
            const matchesType = this.type ? property.type === this.type : true;
            const matchesPrice = property.price >= this.minPrice && property.price <= this.maxPrice;
            const matchesArea = property.area <= this.maxArea;

            return matchesSearch && matchesType && matchesPrice && matchesArea;
        });
        console.log("Filtered properties:", this.filteredProperties); // Debugging line
    }
}

export const propertyStore = new PropertyStore();
