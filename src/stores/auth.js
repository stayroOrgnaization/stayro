import { makeAutoObservable, runInAction } from "mobx";
import Cookies from "js-cookie";

class AuthStore {
  formData = {
    phone: "",
    role: "customer",
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
    country: "",
    city: "",
    gender: "",
    otp_token: "",
  };
  access_token = ""; // To store the access token
  // refreshToken = ""; // To store the refresh token
  profileImage = null;

  errorMessage = "";
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
    this.loadTokenFromCookie();
  }

  resetFormData() {
    this.formData = {
      phone: "",
      role: "customer", // Reset to default
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
      otp_token,
    };
  }

  // Method to update form data
  setFormData(field, value) {
    this.formData[field] = value;
  }

  // Method to store access token in both MobX and a cookie
  setAccessToken(token) {
    runInAction(() => {
      this.access_token = token; // Store the access token in the MobX state
      Cookies.set("access_token", token, {
        expires: 30, // Set cookie expiration to 7 days (adjust as necessary)
        secure: true, // Only send cookie over HTTPS
        sameSite: "Strict", // Prevent CSRF attacks by limiting cross-site requests
      });
      console.log("Access token set in both state and cookie.");
    });
  }

  setProfileImage(image) {
    runInAction(() => {
      this.profileImage = image;
    });
  }

  // clearAccessToken() {
  //   runInAction(() => {
  //     this.accessToken = "";
  //     Cookies.remove("accessToken"); // Remove the token from the cookie
  //   });
  // }

  // Example of loading token from cookie (e.g., on app load)
  loadTokenFromCookie() {
    const token = Cookies.get("access_token");
    if (token) {
      this.access_token = token;
    }
  }

  // Login method
  async login() {
    this.errorMessage = "";
    this.isLoading = true;

    const dataToSend = new FormData();
    dataToSend.append("phone_number", this.formData.phone);
    dataToSend.append("password", this.formData.password);
    dataToSend.append("username", this.formData.username);
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

  // Method to check if the user is authenticated
  isAuthenticated() {
    console.log("access token", this.access_token);
    return !!this.access_token; // Return true if access_token is set
  }

  // Method to log the access token and check if user is authenticated
  logTokenAndCheckAuthentication() {
    const tokenFromCookie = Cookies.get("access_token");
    console.log("Access Token from Cookie:", tokenFromCookie); // Log the token

    if (this.isAuthenticated()) {
      console.log("User is authenticated.", this.access_token);
    } else {
      console.log("User is not authenticated.");
    }
  }

  async updateProfile() {
    this.errorMessage = "";
    this.isLoading = true;

    const dataToSend = new FormData();
    dataToSend.append("phone_number", this.formData.phone);
    dataToSend.append("name", this.formData.name);
    dataToSend.append("email", this.formData.email);
    dataToSend.append("country", this.formData.country);
    dataToSend.append("city", this.formData.city);
    dataToSend.append("gender", this.formData.gender);

    // Include profile picture if it exists
    if (this.profileImage) {
      dataToSend.append("profile_image", this.profileImage);
    }

    try {
      const response = await fetch(
        "https://api.stayro.com/ar/customer/api/profile/",
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${this.access_token}`,
          },
          body: dataToSend,
        }
      );

      if (response.ok) {
        runInAction(() => {
          this.isLoading = false;
          console.log("Profile updated successfully.");
        });
      } else {
        const errorData = await response.json();
        runInAction(() => {
          this.errorMessage = errorData.message || "Unknown error";
          this.isLoading = false;
        });
      }
    } catch (error) {
      runInAction(() => {
        this.errorMessage = "An error occurred while updating the profile.";
        this.isLoading = false;
      });
    }
  }
  isAuthenticated() {
    console.log("access token from isAuthenticated", this.access_token);
    return !!this.access_token;
  }
}

export const authStore = new AuthStore();
