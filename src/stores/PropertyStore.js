import { makeAutoObservable } from 'mobx';

class PropertyStore {
    properties = [];
    filteredProperties = [];
    propertyTypes = []; // New state for property types
    initialMaxPrice = 0; // Initial maximum price derived from properties
    search = "";
    type = "";
    maxPrice = 0; // User-selected max price

    constructor() {
        makeAutoObservable(this);
    }

    setProperties(properties) {
        this.properties = properties;
        this.filteredProperties = properties; // Initially, filtered properties are all properties

        // Set the initial max price only if there are properties
        this.initialMaxPrice = properties.length > 0 ? Math.max(...properties.map(property => property.price), 0) : 0;
        this.maxPrice = this.initialMaxPrice; // Set the initial max price
    }

    setSearch(search) {
        this.search = search;
        this.filterProperties();
    }

    setType(type) {
        this.type = type;
        this.filterProperties();
    }

    setMaxPrice(maxPrice) {
        // Only update maxPrice if it's within the initial range
        if (maxPrice >= 0 && maxPrice <= this.initialMaxPrice) {
            this.maxPrice = maxPrice;
            this.filterProperties();
        }
    }

    filterProperties() {
        this.filteredProperties = this.properties.filter(property => {
            const matchesSearch = property.name.toLowerCase().includes(this.search.toLowerCase()); // Case-insensitive search
            const matchesType = this.type ? property.type === this.type : true; // If type is not selected, return true
            const matchesPrice = property.price <= this.maxPrice; // Compare against user-defined max price

            return matchesSearch && matchesType && matchesPrice; // Return true if all conditions are met
        });
    }
    setPropertyTypes(types) {
      this.propertyTypes = types; // Set the property types
  }
}

export const propertyStore = new PropertyStore();
