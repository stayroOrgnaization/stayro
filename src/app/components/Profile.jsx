"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import SearchableDropdown from "./GetCity";
import Cookies from "js-cookie"; // Import js-cookie
import Saudi from "../../../public/Saudi.svg";
import Link from "next/link";

const Profile = () => {
  const [selectedSex, setSelectedSex] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [profileData, setProfileData] = useState({
    phone_number: '',
    name: '',
    country: '',
    email: '',
    city: '',
    gender: '',
  });
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);
  const handleSelect = (sex) => {
    setSelectedSex(sex);
    setProfileData((prev) => ({ ...prev, gender: sex }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Fetch profile data using the token from cookies
  useEffect(() => {
    const token = Cookies.get("access_token"); // Get the token from cookies

    if (token) {
      // If the token exists, proceed with the API calls
      const fetchProfileData = async () => {
        try {
          const response = await fetch("https://api.stayro.com/ar/customer/api/profile/", {
            method: "GET",
            headers: {
              "Authorization": `Bearer ${token}`,
            },
          });

          if (!response.ok) {
            throw new Error("Failed to fetch profile data");
          }

          const data = await response.json();
          setProfileData(data); // Set the fetched profile data

          // Set initial gender and image
          setSelectedSex(data.gender);
          setImagePreview(data.profileImage || null); // Assuming the API response has a `profileImage` field
        } catch (error) {
          console.error("Error fetching profile data:", error);
          setError("Failed to load profile data.");
        } finally {
          setLoading(false);
        }
      };

      fetchProfileData();
    } else {
      setError("No authentication token found. Please log in.");
      setLoading(false);
    }
  }, []);

  // Handle form submission for updating profile
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = Cookies.get("access_token");

    if (!token) {
      alert("You need to be logged in to update your profile.");
      return;
    }

    const updatedProfile = {
      ...profileData,
      profileImage: selectedImage, // Assuming you want to send the image as well
    };

    try {
      const response = await fetch("https://api.stayro.com/ar/customer/api/profile/", {
        method: "POST", // POST or PUT depending on your API design
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProfile),
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      const data = await response.json();
      console.log("Profile updated successfully:", data);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  if (loading) {
    return <div></div>;
  }

  if (error) {
    return <div></div>;
  }
  const updateCity = (selectedCity) => {
    setProfileData((prev) => ({
      ...prev,
      city: selectedCity, // Update city
    }));
  };

  if (loading) {
    return <div></div>;
  }

  if (error) {
    return <div></div>;
  }


  return (
    <div className="main-dev h-[892px] w-[1440px] flex flex-col items-end">
      <div className="h-[61px] w-[1150px] mt-10 flex flex-col items-end">
        <h3 className="text-[#F5F5F5] text-[20px] font-bold text-right ">
          إعدادات عامة
        </h3>
        <p className="text-[#A2A2A2] text-[17px] font-normal text-right mt-2 ">
          إعداد معلومات وبياناتك الشخصية
        </p>
      </div>
      <div className="second-container w-[1100px] h-[1156px] flex flex-row mt-10 ">
        <form onSubmit={handleSubmit} className="profile w-[852px] h-[671px] ">
          <div className="profile-paragaph w-[800px] h-[47px] flex flex-col items-end">
            <Link
              className="text-[#F5F5F5] text-[20px] font-bold text-right"
              href="/Profile"
            ></Link>
            <p className="text-[#A2A2A2] text-[17px] font-normal text-right mt-2">
              إعداد معلوماتك وبياناتك الشخصية
            </p>
          </div>
          <div className="Main-pic-part w-[800px] h-[79px] mt-8 flex flex-row justify-between">
            {/* <div
              className="PictureProfile-- cursor-pointer w-[78px] h-[78px] rounded-full border border-gray-300 flex items-center justify-center overflow-hidden"
              onClick={triggerFileInput}
            >
              {imagePreview ? (
                <Image
                  src={imagePreview}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-500">Upload Photo</span>
              )}
            </div> */}
            <input
              type="file"
              id="profileImageInput"
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <div className="line-part border-[1px] border-[#303030] w-[606px] h-[1px] mt-6 mx-16"></div>
          <div className="form part w-[804px] h-[395px] mt-10 flex flex-col items-center">
            <div className="F.name-Num flex flex-row space-x-6">
              <div className="Num flex flex-col items-end space-y-2">
                <label> رقم الجوال</label>
                <input
                  className="Code border text-right border-[#303030] bg-[#FFFFFF0D] text-[#A2A2A2] placeholder-[#A2A2A2] p-2 rounded-xl w-[292px] h-[48px]"
                  placeholder={profileData.phone_number}
                  value={profileData.phone_number} // Set the value here
                  onChange={(e) =>
                    setProfileData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                />
              </div>
              <div className="flex flex-col items-end space-y-2 ">
                <label>الاسم </label>
                <input
                  className="border text-right border-[#303030] bg-[#FFFFFF0D] text-[#A2A2A2] placeholder-[#A2A2A2] p-2 rounded-xl w-[386px] h-[48px]"
                  placeholder={profileData.name}
                  value={profileData.name} // Set the value here
                  onChange={(e) =>
                    setProfileData((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
              </div>
            </div>
            <div className="Email-Country flex space-x-6 mt-6 ">
              <div className=" flex flex-col items-end space-y-4">
                <label> اختر الدولة</label>
                <input
                  className="Email border text-right border-[#303030] bg-[#FFFFFF0D] text-[#A2A2A2] placeholder-[#A2A2A2] p-2 rounded-xl w-[386px] h-[48px]"
                  placeholder=" السعودية"
                  value={profileData.country} // Set the value here
                  onChange={(e) =>
                    setProfileData((prev) => ({ ...prev, country: e.target.value }))
                  }
                />
              </div>

              <div className="flex flex-col items-end space-y-4">
                <label> البريد الالكتروني</label>
                <input
                  className="country border text-right border-[#303030] bg-[#FFFFFF0D] text-[#A2A2A2] placeholder-[#A2A2A2] p-2 rounded-xl w-[386px] h-[48px]"
                  placeholder={profileData.email} 
                  value={profileData.email} // Set the value here
                  onChange={(e) =>
                    setProfileData((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </div>
            </div>
            <div className="Email-Country flex space-x-6 mt-6 ">
              <div className="w-[386px] flex flex-col items-end space-y-4">
                <label>اختر الجنس </label>
                <div className="flex space-x-16 ">
                  <div className=" flex space-x-4 space-y-2">
                    <p className="text-xl ">ذكر</p>
                    <div
                      onClick={() => handleSelect("male")}
                      className={`w-[15px] h-[15px] rounded-full flex items-center justify-center cursor-pointer
                       ${
                         selectedSex === "male"
                           ? "bg-[#FF5B2D] "
                           : "bg-[#1A1A1A] text-black border border-[#A2A2A2]"
                       }`}
                    ></div>
                  </div>
                  <div className=" flex space-x-4 space-y-2">
                    <p className="text-xl">انثى</p>
                    <div
                      onClick={() => handleSelect("female")}
                      className={`w-[15px] h-[15px] rounded-full flex items-center justify-center cursor-pointer
                       ${
                         selectedSex === "female"
                           ? "bg-[#FF5B2D] "
                           : "bg-[#1A1A1A] text-black border border-[#A2A2A2]"
                       }`}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end space-y-4">
                <label>اختر المدينة</label>
                <SearchableDropdown cityplaceholder={profileData.profile.city} />
              </div>
            </div>
            <button
              type="submit"
              className="save w-[804px] h-[48px] border border-[#FF5B2D] bg-[#FF5B2D] rounded-xl mt-8"
            >
              حفظ التغيرات
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
