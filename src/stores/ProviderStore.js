import { makeAutoObservable, runInAction } from "mobx";
import Cookies from "js-cookie";

class AuthStore {
  formData = {
    phone: "",
    role: "provider",
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    country: "",
    city: "",
    gender: "",
    otp_token: "",
  };
  access_token = "";
  // refreshToken = "";
  profileImage = null;

  errorMessage = "";
  isLoading = false;

  isDeleting = false;

  constructor() {
    makeAutoObservable(this);
    this.loadTokenFromCookie();
  }

  resetFormData() {
    this.formData = {
      phone: "",
      role: "provider",
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
    };
  }

  // Method to update form data
  setFormData(field, value) {
    this.formData[field] = value;
  }

  // Method to store access token in both MobX and a cookie
  setAccessToken(token) {
    runInAction(() => {
      this.access_token = token;
      Cookies.set("access_token", token, {
        expires: 30,
        secure: true,
        sameSite: "Strict",
      });
      console.log("Access token set in both state and cookie.");
    });
  }

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
    dataToSend.append("username", this.formData.phone);
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
        // Try to parse error data
        let errorData;
        try {
          errorData = await response.json();
        } catch (parseError) {
          console.error("Failed to parse error response:", parseError);
          errorData = null;
        }

        runInAction(() => {
          // Capture specific fields or fallback to the full error response
          this.errorMessage =
            errorData?.message ||
            errorData?.detail ||
            JSON.stringify(errorData.__all__[0]) || // Stringify errorData if no known fields
            "Unknown error occurred";
          console.error("Full error data:", errorData);

          this.isLoading = false;
        });
      }
    } catch (error) {
      runInAction(() => {
        this.errorMessage = "حدث خطأ في تسجيل الدخول";
        this.isLoading = false;
      });
      console.error("Login error:", error);
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
            errorData.message ||
            errorData.detail ||
            Object.values(errorData).flat().join(", ") || // Combine all errors
            "Unknown error occurred during sign-up.";
          this.isLoading = false;
        });
      }
    } catch (error) {
      runInAction(() => {
        this.errorMessage = "An error occurred during sign-up.";
        this.isLoading = false;
      });
      console.error("Sign-up error:", error);
    }
  }

  //   // Method to check if the user is authenticated
  //   isAuthenticated() {
  //     console.log("access token", this.access_token);
  //     return !!this.access_token; // Return true if access_token is set
  //   }

  //   // Method to log the access token and check if user is authenticated
  //   logTokenAndCheckAuthentication() {
  //     const tokenFromCookie = Cookies.get("access_token");
  //     console.log("Access Token from Cookie:", tokenFromCookie); // Log the token

  //     if (this.isAuthenticated()) {
  //       console.log("User is authenticated.", this.access_token);
  //     } else {
  //       console.log("User is not authenticated.");
  //     }
  //   }

  //   // delete account

  //   async handleDelete() {
  //     this.isDeleting = true;
  //     this.errorMessage = "";

  //     try {
  //       const response = await fetch(
  //         "https://api.stayro.com/ar/user/api/users/delete-request/",
  //         {
  //           method: "POST",
  //           headers: {
  //             Authorization: `Bearer ${this.access_token}`,
  //           },
  //         }
  //       );

  //       if (response.ok) {
  //         console.log("Account deleted successfully.");
  //         return true;
  //       } else {
  //         const errorData = await response.json();
  //         runInAction(() => {
  //           this.errorMessage =
  //             errorData.message || "Failed to delete account. Please try again.";
  //         });
  //         return false;
  //       }
  //     } catch (error) {
  //       runInAction(() => {
  //         this.errorMessage = "An error occurred. Please try again later.";
  //         console.error("Error during deletion:", error);
  //       });
  //       return false;
  //     } finally {
  //       runInAction(() => {
  //         this.isDeleting = false;
  //       });
  //     }
  //   }

  // handle logout
  //   async handleLogout() {
  //     try {
  //       console.log("Attempting to log out. Access Token:", this.access_token);

  //       const response = await fetch(
  //         "https://api.stayro.com/ar/auth/api/logout/",
  //         {
  //           method: "POST",
  //           headers: {
  //             Authorization: `Bearer ${this.access_token}`,
  //           },
  //         }
  //       );

  //       if (response.ok) {
  //         this.setAccessToken("");
  //         Cookies.remove("access_token");
  //         console.log("Logged out successfully.");
  //         return true;
  //       } else {
  //         const errorData = await response.json();
  //         console.error("Logout failed:", errorData.message || "Unknown error");
  //         return false;
  //       }
  //     } catch (error) {
  //       console.error("An error occurred during logout:", error);
  //       return false;
  //     }
  //   }

  //   async updateProfile() {
  //     this.errorMessage = "";
  //     this.isLoading = true;

  //     const dataToSend = new FormData();
  //     dataToSend.append("phone_number", this.formData.phone);
  //     dataToSend.append("name", this.formData.name);
  //     dataToSend.append("email", this.formData.email);
  //     dataToSend.append("city", this.formData.city);
  //     dataToSend.append("gender", this.formData.gender);

  //     try {
  //       const response = await fetch(
  //         "https://api.stayro.com/ar/customer/api/profile/",
  //         {
  //           method: "PUT",
  //           headers: {
  //             Authorization: `Bearer ${this.access_token}`,
  //           },
  //           body: dataToSend,
  //         }
  //       );

  //       if (response.ok) {
  //         const updatedData = await response.json();
  //         runInAction(() => {
  //           this.formData.name = updatedData.name || this.formData.name;
  //           this.formData.phone = updatedData.phone_number || this.formData.phone;
  //           this.formData.email = updatedData.email || this.formData.email;
  //           this.formData.city =
  //             updatedData.profile?.city?.name || this.formData.city; // Safe access
  //           this.formData.gender =
  //             updatedData.profile?.gender || this.formData.gender;
  //           this.isLoading = false;
  //           console.log("Profile updated successfully.", updatedData);
  //         });
  //       } else {
  //         const errorData = await response.json();
  //         runInAction(() => {
  //           this.errorMessage = errorData.message || "Failed to update profile.";
  //           console.log("Error response data:", errorData);
  //           console.log("Error message:", this.errorMessage);
  //           this.isLoading = false;
  //         });
  //       }
  //     } catch (error) {
  //       runInAction(() => {
  //         this.errorMessage = "An error occurred during profile update.";
  //         this.isLoading = false;
  //         console.error("Fetch error:", error);
  //       });
  //     }
  //   }
}

export const authStore = new AuthStore();
