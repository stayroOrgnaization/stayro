'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import SearchableDropdown from "./GetCity";
import { observer } from "mobx-react-lite";
import { authStore } from "../../stores/auth";
import DeleteAccount from "./DeleteAcc";
import Saudi from "../../../public/Saudi.svg";
import Link from "next/link";

const Profile = observer(() => {
  const [selectedSex, setSelectedSex] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [showDeleteAccount, setShowDeleteAccount] = useState(false);

  useEffect(() => {
    const { phone, email, name, country, city, gender } = authStore.formData;
    setSelectedSex(gender);
    setImagePreview(authStore.profileImage);
  }, [authStore.formData]);

  const handleSelect = (sex) => {
    setSelectedSex(sex);
    authStore.setFormData("gender", sex);
  };

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
    if (!authStore.isAuthenticated()) return;
    await authStore.updateProfile();
  };

  const handleDeleteAccount = (e) => {
    e.preventDefault();
    setShowDeleteAccount(true);
  };

  const closePopup = () => {
    setShowDeleteAccount(false);
  };

  return (
    <div className="main-container flex flex-col items-center px-4 md:px-8 py-10">
      <div className="w-full text-right mt-10">
        <h3 className="text-[#F5F5F5] text-xl font-bold">إعدادات عامة</h3>
        <p className="text-[#A2A2A2] text-lg mt-2">إعداد معلومات وبياناتك الشخصية</p>
      </div>
      <div className="w-full md:w-[1100px] flex flex-col md:flex-row gap-10 mt-10">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full md:w-[70%]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div
              className="cursor-pointer w-[78px] h-[78px] rounded-full border border-gray-300 flex items-center justify-center overflow-hidden"
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
          <div className="border-t border-[#303030] mt-6"></div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col w-full md:w-[48%]">
                <label>رقم الجوال</label>
                <div className="flex items-center gap-2">
                  <div className="flex justify-center space-x-1 border text-right border-[#303030] bg-[#FFFFFF0D] text-[#A2A2A2] p-2 rounded-xl w-[86px] h-[48px]">
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
                      className="bg-transparent text-[#A2A2A2] w-[40px] h-[23px] mt-1 text-center"
                    />
                  </div>
                  <input
                    className="border text-right border-[#303030] bg-[#FFFFFF0D] text-[#A2A2A2] placeholder-[#A2A2A2] p-2 rounded-xl w-full h-[48px]"
                    value={authStore.formData.phone}
                    onChange={(e) => authStore.setFormData("phone", e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col w-full md:w-[48%]">
                <label>الاسم</label>
                <input
                  className="border text-right border-[#303030] bg-[#FFFFFF0D] text-[#A2A2A2] placeholder-[#A2A2A2] p-2 rounded-xl w-full h-[48px]"
                  placeholder=" بدر ابراهيم "
                  value={authStore.formData.name || ""}
                  onChange={(e) => authStore.setFormData("name", e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col w-full md:w-[48%]">
                <label>اختر الدولة</label>
                <input
                  className="border text-right border-[#303030] bg-[#FFFFFF0D] text-[#A2A2A2] placeholder-[#A2A2A2] p-2 rounded-xl w-full h-[48px]"
                  placeholder=" السعودية"
                  onChange={(e) => authStore.setFormData("country", e.target.value)}
                />
              </div>

              <div className="flex flex-col w-full md:w-[48%]">
                <label>البريد الالكتروني</label>
                <input
                  className="border text-right border-[#303030] bg-[#FFFFFF0D] text-[#A2A2A2] placeholder-[#A2A2A2] p-2 rounded-xl w-full h-[48px]"
                  placeholder=" badr@gmail.com"
                  value={authStore.formData.email}
                  onChange={(e) => authStore.setFormData("email", e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col w-full md:w-[48%]">
                <label>اختر الجنس</label>
                <div className="flex items-center gap-8">
                  <div
                    onClick={() => handleSelect("male")}
                    className={`w-[15px] h-[15px] rounded-full cursor-pointer ${selectedSex === "male" ? "bg-[#FF5B2D]" : "bg-[#1A1A1A] border border-[#A2A2A2]"}`}
                  ></div>
                  <p>ذكر</p>
                  <div
                    onClick={() => handleSelect("female")}
                    className={`w-[15px] h-[15px] rounded-full cursor-pointer ${selectedSex === "female" ? "bg-[#FF5B2D]" : "bg-[#1A1A1A] border border-[#A2A2A2]"}`}
                  ></div>
                  <p>أنثى</p>
                </div>
              </div>
              <div className="flex flex-col w-full md:w-[48%]">
                <label>اختر المدينة</label>
                <SearchableDropdown onCitySelect={(city) => authStore.setFormData("city", city)} />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#FF5B2D] text-white p-2 rounded-xl mt-8"
            >
              حفظ التغيرات
            </button>
          </div>
        </form>
        <div className="w-full md:w-[240px] flex flex-col gap-6 ml-0 md:ml-60">
          <div className="border border-[#303030] p-4 rounded-xl text-center">
            <Link href="/Profile">الصفحة الشخصية</Link>
          </div>
          <div className="border border-[#303030] p-4 rounded-xl text-center">
            <Link href="/PassSetting">تعيين كلمة المرور</Link>
          </div>
          <div className="border border-[#303030] p-4 rounded-xl text-center">
            <Link href="/About">عن ستيرو</Link>
          </div>
          <div className="border border-[#303030] p-4 rounded-xl text-center">
            <Link href="/Terms">الشروط والأحكام</Link>
          </div>
          <div className="border border-[#303030] p-4 rounded-xl text-center">
            <Link href="/Privacy">سياسات الخصوصية</Link>
          </div>
          <div className="border border-[#303030] p-4 rounded-xl text-center">
            <Link href="/FAQ">الأسئلة الشائعة</Link>
          </div>
          <div className="border border-[#303030] p-4 rounded-xl text-center">
            <Link href="#" onClick={handleDeleteAccount} className="text-[#FF5B2D]">حذف الحساب</Link>
          </div>
        </div>
      </div>
      {showDeleteAccount && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#1A1A1A] w-full md:w-[700px] h-[274px] rounded-lg shadow-lg relative">
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
