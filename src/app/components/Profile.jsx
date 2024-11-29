"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import SearchableDropdown from "./GetCity";
import { observer } from "mobx-react-lite";
import { authStore } from "../../stores/auth";
import DeleteAccount from "./DeleteAcc";
import Saudi from "../../../public/Saudi.svg";
import Link from "next/link";

const Profile = observer(() => {
  // handing choosing the sex
  const [selectedSex, setSelectedSex] = useState(null);
  const handleSelect = (sex) => {
    setSelectedSex(sex);
    authStore.setFormData("gender", sex); // Update gender in MobX store
  };

  const [selectedImage, setSelectedImage] = useState(null); // To store the selected image
  const [imagePreview, setImagePreview] = useState(null); // To preview the image

  // State for selected sex and profile image

  // Load profile data on component mount
  //   useEffect(() => {
  //     const { phone, email, name, country, city, gender } = authStore.formData;
  //     setSelectedSex(gender);
  //     setImagePreview(authStore.profileImage);
  //     setSelectedCity(city);
  //   }, [authStore.formData]);
  // };

  useEffect(() => {
    const { phone, email, name, country, city, gender } = authStore.formData;
    setSelectedSex(gender);
    setImagePreview(authStore.profileImage);
  }, [authStore.formData]);

  const handleCitySelect = (city) => {
    authStore.setFormData("city", city);
    console.log("Selected City:", authStore.formData.city);
  };

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
      authStore.setProfileImage(file);
    }
  };

  const triggerFileInput = () => {
    document.getElementById("profileImageInput").click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!authStore.isAuthenticated()) {
      return;
    } else {
      // console.log(document.cookie);
    }

    // authStore.logTokenAndCheckAuthentication();

    await authStore.updateProfile();
  };

  // handiling delete account popUp
  const [showDeleteAccount, setshowDeleteAccount] = useState(false);
  const handleDeleteAccount = (e) => {
    e.preventDefault();
    setshowDeleteAccount(true);
  };
  const closePopup = () => {
    setshowDeleteAccount(false);
  };

  return (
    <div className="main-dev h-[892px] w-[1440px] flex flex-col items-end ">
      {/* sparate the upper from the down  */}
      <div className="h-[61px] w-[1150px]  mt-10 flex flex-col items-end">
        <h3 className="text-[#F5F5F5] text-[20px] font-bold text-right ">
          إعدادات عامة
        </h3>
        <p className="text-[#A2A2A2] text-[17px] font-normal text-right mt-2 ">
          إعداد معلومات وبياناتك الشخصية{" "}
        </p>
      </div>
      {/* contain the options and profile part */}
      <div className="second-container w-[1100px] h-[1156px] flex flex-row mt-10 ">
        <form onSubmit={handleSubmit} className="profile  w-[852px] h-[671px] ">
          <div className="profile-paragaph  w-[800px] h-[47px] flex flex-col items-end">
            <Link
              className="text-[#F5F5F5] text-[20px] font-bold text-right"
              href="/Profile"
            ></Link>
            <p className="text-[#A2A2A2] text-[17px] font-normal text-right mt-2">
              إعداد معلوماتك وبياناتك الشخصية
            </p>
          </div>
          <div className="Main-pic-part w-[800px] h-[79px] mt-8 flex flex-row justify-between">
            <div className="wallet and points flex space-x-10 ">
              {/* <div className="border border-[#303030] w-[170px] h-[78px] rounded-xl"></div>
              <div className="border border-[#303030] w-[170px] h-[78px] rounded-xl"></div> */}
            </div>
            {/* Profile Picture Section */}
            <div
              className="PictureProfile-- cursor-pointer w-[78px] h-[78px] rounded-full border border-gray-300 flex items-center justify-center overflow-hidden"
              onClick={triggerFileInput}
            >
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-500">Upload Photo</span>
              )}
            </div>
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
              {/* name, number and code */}
              <div className="Num flex flex-col items-end space-y-2">
                <label> رقم الجوال</label>
                <div className="flex flex-row space-x-2">
                  <div className="flex justify-center space-x-1 border text-right border-[#303030] bg-[#FFFFFF0D] text-[#A2A2A2] placeholder-[#A2A2A2] p-2 rounded-xl w-[86px] h-[48px]">
                    <Image
                      src={Saudi}
                      alt="KSA"
                      width={24}
                      height={24}
                      className="rounded-2xl"
                    />
                    <input
                      type="text"
                      value="+966"
                      readOnly
                      className="bg-transparent text-[#A2A2A2]  w-[40px] h-[23px] mt-1 text-center"
                    />
                  </div>
                  <input
                    className="Code border text-right border-[#303030] bg-[#FFFFFF0D] text-[#A2A2A2] placeholder-[#A2A2A2] p-2 rounded-xl w-[292px] h-[48px]"
                    // placeholder="055555555"
                    value={authStore.formData.phone}
                    onChange={(e) =>
                      authStore.setFormData("phone", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col items-end space-y-2 ">
                <label>الاسم </label>
                <input
                  className="border text-right border-[#303030] bg-[#FFFFFF0D] text-[#A2A2A2] placeholder-[#A2A2A2] p-2 rounded-xl w-[386px] h-[48px]"
                  placeholder=" بدر ابراهيم "
                  value={authStore.formData.name || ""}
                  onChange={(e) =>
                    authStore.setFormData("name", e.target.value)
                  }
                />
              </div>
            </div>

            {/* email & country */}
            <div className="Email-Country flex space-x-6 mt-6 ">
              <div className=" flex flex-col items-end space-y-4">
                <label> اختر الدولة</label>
                <input
                  className="Email border text-right border-[#303030] bg-[#FFFFFF0D] text-[#A2A2A2] placeholder-[#A2A2A2] p-2 rounded-xl w-[386px] h-[48px]"
                  placeholder=" السعودية"
                  onChange={(e) =>
                    authStore.setFormData("country", e.target.value)
                  }
                />
              </div>

              <div className="flex flex-col items-end space-y-4">
                <label> البريد الالكتروني</label>
                <input
                  className="country border text-right border-[#303030] bg-[#FFFFFF0D] text-[#A2A2A2] placeholder-[#A2A2A2] p-2 rounded-xl w-[386px] h-[48px]"
                  placeholder=" badr@gmail.com"
                  value={authStore.formData.email}
                  onChange={(e) =>
                    authStore.setFormData("email", e.target.value)
                  }
                />
              </div>
            </div>
            {/* city and sex */}
            <div className="Email-Country flex space-x-6 mt-6 ">
              <div className="w-[386px] flex flex-col items-end space-y-4">
                <label>اختر الجنس </label>
                <div className="flex space-x-16 ">
                  {/* Male Option */}
                  <div className=" flex space-x-4 space-y-2">
                    <p className="text-xl ">ذكر</p>
                    <div
                      onClick={() => handleSelect("male")}
                      value={authStore.formData.gender}
                      className={`w-[15px] h-[15px] rounded-full flex items-center justify-center cursor-pointer
                        
                       ${
                         selectedSex === "male"
                           ? "bg-[#FF5B2D] "
                           : "bg-[#1A1A1A] text-black border border-[#A2A2A2]"
                       }`}
                    ></div>
                  </div>
                  {/* Female Option */}
                  <div className=" flex space-x-4 space-y-2">
                    <p className="text-xl">انثى</p>
                    <div
                      onClick={() => handleSelect("female")}
                      value={authStore.formData.gender}
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
                <label value={authStore.formData.city}>اختر المدينة</label>
                <SearchableDropdown onCitySelect={handleCitySelect} />
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
        {/*  */}
        <div className="options  w-[240px] h-[435px]">
          <div className="flex justify-center border border-[#303030] w-[240px] h-[45px] mt-4 rounded-2xl">
            <Link className="mt-3" href="/Customer/Profile">
              {" "}
              الصفحة الشخصية
            </Link>
          </div>
          <div className="flex justify-center border border-[#303030] w-[240px] h-[45px] mt-4 rounded-2xl">
            <Link className="mt-3" href="/Customer/PassSetting">
              تعيين كلمة المرور
            </Link>
          </div>
          <div className="flex justify-center border border-[#303030] w-[240px] h-[45px] mt-4 rounded-2xl">
            {" "}
            <Link className="mt-3" href="/Customer/About">
              {" "}
              عن ستيرو
            </Link>
          </div>
          <div className="flex justify-center border border-[#303030] w-[240px] h-[45px] mt-4 rounded-2xl">
            <Link className="mt-3" href="/Customer/Terms">
              {" "}
              الشروط والأحكام
            </Link>
          </div>
          <div className="flex justify-center border border-[#303030] w-[240px] h-[45px] mt-4 rounded-2xl">
            <Link className="mt-3" href="/Customer/Privacy">
              {" "}
              سياسات الخصوصية
            </Link>
          </div>
          <div className="flex justify-center border border-[#303030] w-[240px] h-[45px] mt-4 rounded-2xl">
            <Link className="mt-3" href="/Customer/FAQ">
              {" "}
              الأسئلة الشائعة
            </Link>
          </div>
          <div className=" flex justify-center border border-[#303030] w-[240px] h-[45px] mt-4 rounded-2xl">
            <Link
              href="#"
              className="forgot text-[#FF5B2D] mt-3"
              onClick={handleDeleteAccount}
            >
              حذف الحساب
            </Link>
          </div>
        </div>
      </div>
      {/* popUp */}
      {showDeleteAccount && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#1A1A1A] w-[700px] h-[274px] rounded-lg shadow-lg relative">
            <button
              onClick={closePopup}
              className="absolute top-2 right-4 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <DeleteAccount />
          </div>
        </div>
      )}
    </div>
  );
});

export default Profile;