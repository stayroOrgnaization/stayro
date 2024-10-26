import { makeAutoObservable } from 'mobx';

class HousingStore {
  houses = [];
  loading = true;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  // Fetch data from the API using the fetch API
  async fetchHouses() {
    this.loading = true;
    try {
      const response = await fetch(`https://api.stayro.com/housing/api/housing/`);
      const data = await response.json(); // Parse the response as JSON

      if (response.ok) {
        this.houses = data.data; // assuming 'data' contains the list of houses
        this.error = null;
      } else {
        this.error = "Failed to load houses";
      }
    } catch (error) {
      this.error = "Failed to load houses";
    } finally {
      this.loading = false;
    }
  }
}

const housingStore = new HousingStore();
export default housingStore;
