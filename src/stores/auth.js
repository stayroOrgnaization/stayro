import { makeAutoObservable, runInAction } from "mobx";

class AuthStore {
  formData = {
    phone: "",
    role: "customer", // Default to customer
    email: "",
    password: "",
    confirmPassword: "",
  };
  //   accessToken = ""; // To store the access token
  // refreshToken = ""; // To store the refresh token

  errorMessage = "";
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  resetFormData() {
    this.formData = {
      phone: "",
      role: "customer", // Reset to default
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  // Method to update form data
  setFormData(field, value) {
    this.formData[field] = value;
  }

  setAccessToken(token) {
    this.accessToken = token;
  }

  // Login method
  async login() {
    this.errorMessage = "";
    this.isLoading = true;

    const dataToSend = new FormData();
    dataToSend.append("phone_number", this.formData.phone);
    dataToSend.append("password", this.formData.password);
    dataToSend.append("username", this.formData.username); // You may want to adjust how username is handled
    dataToSend.append("role", this.formData.role);
    dataToSend.append("method", "sms");

    try {
      const response = await fetch(
        "https://api.stayro.com/ar/auth/api/login/",
        {
          method: "POST",
          body: dataToSend,
        }
      );

      if (response.ok) {
        runInAction(() => {
          this.isLoading = false;
          console.log("Login successful.");
        });
      } else {
        const errorData = await response.json();
        runInAction(() => {
          this.errorMessage =
            errorData.username?.[0] ||
            errorData.password?.[0] ||
            "Unknown error";
          this.isLoading = false;
        });
      }
    } catch (error) {
      runInAction(() => {
        this.errorMessage = "An error occurred during login.";
        this.isLoading = false;
      });
    }
  }

  // Sign-up method
  // Sign-up method
  async signUp() {
    this.errorMessage = ""; // Clear previous errors
    this.isLoading = true;

    const dataToSend = new FormData();
    dataToSend.append("phone_number", this.formData.phone);
    dataToSend.append("email", this.formData.email);
    dataToSend.append("password", this.formData.password);
    dataToSend.append("confirm_password", this.formData.confirmPassword);
    dataToSend.append("role", this.formData.role);

    try {
      const response = await fetch(
        "https://api.stayro.com/ar/auth/api/register/",
        {
          method: "POST",
          body: dataToSend,
        }
      );

      if (response.ok) {
        runInAction(() => {
          this.isLoading = false;
          console.log("Sign-up successful.");
        });
      } else {
        const errorData = await response.json();
        runInAction(() => {
          this.errorMessage =
            errorData.username?.[0] ||
            errorData.email?.[0] ||
            errorData.password?.[0] ||
            errorData.phone_number?.[0] ||
            "حدث خطأ"; // Capture specific errors
          this.isLoading = false;
        });
      }
    } catch (error) {
      runInAction(() => {
        this.errorMessage = "حدث خطأ إثناء التسجيل";
        this.isLoading = false;
      });
    }
  }
}

export const authStore = new AuthStore();
