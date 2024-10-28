"use client";
import { observer } from "mobx-react";
import { useEffect, useState, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";

export default function Home() {
  return (
    <div>
      <Navbar defaultActiveLink={"الرئيسية"} />

      <main className="overflow-y-scroll scrollbar-hide ">
        <p></p>
      </main>
      <Footer />
    </div>
  );
});

export default Home;
