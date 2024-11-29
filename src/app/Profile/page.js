'use client'
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation"; // usePathname and useRouter from next/navigation
import Cookies from "js-cookie"; // js-cookie for handling cookies
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Profile from "../components/Profile";

const UserProfile = () => {
  const router = useRouter(); 
  const pathname = usePathname(); 
  const [isClient, setIsClient] = useState(false); 
  const authToken = Cookies.get("access_token"); 
  useEffect(() => {
    setIsClient(true); 
  }, []);

  useEffect(() => {
    if (isClient && !authToken) {
      router.push("/"); 
      window.location.reload();
    }
  }, [isClient, authToken, router]);

  if (!isClient || !authToken) {
    return null; 
  }

  return (
    <>
      <Navbar />
      <Profile />
      <Footer />
    </>
  );
};

export default UserProfile;
