// src/stores/authStore.js
import { makeAutoObservable } from "mobx";

class AuthStore {
  isAuthenticated = false;
  user = null;
  loading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  async login(username, password) {
    this.loading = true;
    this.error = null;

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed!");
      }

      const data = await response.json();
      this.isAuthenticated = true;
      this.user = data.user; // Assuming the API returns user info

    } catch (err) {
      this.error = err.message;
    } finally {
      this.loading = false;
    }
  }

  logout() {
    this.isAuthenticated = false;
    this.user = null;
  }
}

export const authStore = new AuthStore();
