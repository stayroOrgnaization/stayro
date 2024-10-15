// src/stores/cardViewStoreMain.js
import { makeAutoObservable } from 'mobx';

class GridViewStore {
  isTwoPerRow = true; // Initial state: two per row

  constructor() {
    makeAutoObservable(this);
  }

  toggleGridView() {
    this.isTwoPerRow = !this.isTwoPerRow; // Toggle between two and one per row
  }
}

const gridViewStore = new GridViewStore();
export default gridViewStore;
