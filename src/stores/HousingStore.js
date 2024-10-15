import { makeAutoObservable } from 'mobx';
import axios from 'axios';

class HousingStore {
  houses = [];
  loading = true;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  // Fetch data from the API
  async fetchHouses() {
    this.loading = true;
    try {
      const response = await axios.get(`https://api.stayro.com/${process.env.NEXT_PUBLIC_LANG}/housing/api/housing/?name_en__contains=&name_ar__contains=&type=&status=&street__neighborhood__city__country=&street__neighborhood__city=&street__neighborhood=&street=&price__gte=&price__lte=&created_at__date__range=&updated_at__date__range=`);
      this.houses = response.data.data; // assuming 'data' contains the list of houses
      this.error = null;
    } catch (error) {
      this.error = "Failed to load houses";
    } finally {
      this.loading = false;
    }
  }
}

const housingStore = new HousingStore();
export default housingStore;
