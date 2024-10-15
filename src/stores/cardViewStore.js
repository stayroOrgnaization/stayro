import { makeAutoObservable } from 'mobx';

class CardViewStore {
  isGridView = true;

  constructor() {
    makeAutoObservable(this);
  }

  toggleView() {
    this.isGridView = !this.isGridView;
  }
}

export const cardViewStore = new CardViewStore();