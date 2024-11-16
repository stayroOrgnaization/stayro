import EnterPhonePopUp from "../Customer/components/EnterPhonePopUp";

const PopUp = () => {
  return <EnterPhonePopUp />;
};
export default PopUp;

// async updateProfile() {
//   // Create FormData object
//   const dataToSend = new FormData();

//   // Append necessary fields to FormData
//   dataToSend.append("phone", this.formData.phone || "");
//   dataToSend.append("email", this.formData.email || "");
//   dataToSend.append("name", this.formData.name || "");
//   dataToSend.append("profile[gender]", this.formData.profile.gender || "");
//   dataToSend.append(
//     "profile[city]",
//     this.formData.profile.city.name ? this.formData.city.name : ""
//   );
//   dataToSend.append("profile[image]", this.formData.image || "");

//   dataToSend.forEach((value, key) => console.log(`${key}: ${value}`));

//   try {
//     // Send the update request
//     const response = await fetch(
//       "https://api.stayro.com/ar/customer/api/profile/",
//       {
//         method: "PUT",
//         headers: {
//           Authorization: `Bearer ${this.access_token}`,
//         },
//         body: dataToSend,
//       }
//     );

//     const result = await response.json();

//     if (response.ok) {
//       this.logFetchedProfileData();
//       console.log("Profile updated successfully.", result);
//     } else {
//       console.error("Error updating profile:", result);
//     }
//   } catch (error) {
//     console.error("An error occurred:", error);
//   }
// }

// isAuthenticated() {
//   console.log("access token from isAuthenticated", this.access_token);
//   return !!this.access_token;
// }

// async logFetchedProfileData() {
//   try {
//     const response = await fetch(
//       "https://api.stayro.com/ar/customer/api/profile/",
//       {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${this.access_token}`,
//         },
//       }
//     );

//     if (response.ok) {
//       const profileData = await response.json();

//       // Log details and update MobX state
//       runInAction(() => {
//         this.formData = {
//           ...this.formData,
//           email: profileData.email,
//           phone: profileData.phone_number,
//           name: profileData.username,
//           city: profileData.city || "Not set",
//           gender: profileData.profile.gender_display || "Not set",
//         };
//         this.profileImage = profileData.image_url;
//       });

//       // Log to confirm
//       console.log("User profile data updated in state:", this.formData);
//       console.log("city", this.formData.city);
//     } else {
//       console.error("Failed to fetch profile data:", response.statusText);
//     }
//   } catch (error) {
//     console.error("Error fetching profile data:", error);
//   }
// }
