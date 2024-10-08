import { makeAutoObservable } from "mobx";

class LanguageStore {
  language = "en"; // default language

  constructor() {
    makeAutoObservable(this);
  }

  setLanguage(newLanguage) {
    this.language = newLanguage;
  }

  get currentLanguage() {
    return this.language;
  }
}

const languageStore = new LanguageStore();
export default languageStore;
