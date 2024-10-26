import { makeAutoObservable } from 'mobx';

class PropertyStore {
  property = null;
  loading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchProperty(id) {
    this.loading = true;
    this.error = null;

    try {
      const response = await fetch(`https://api.stayro.com/ar/housing/api/housing/${id}`);
      if (!response.ok) throw new Error('Failed to fetch property');
      this.property = await response.json();
    } catch (error) {
      this.error = error.message;
    } finally {
      this.loading = false;
    }
  }
}

const propertId = new PropertyStore();
export default propertId;
