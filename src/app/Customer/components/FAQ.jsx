// components/FaqList.js
"use client";
import { useState, useEffect } from "react";

export default function FaqList() {
  const [faq, setFaq] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFaqs() {
      try {
        const res = await fetch(
          "https://api.stayro.com/ar/faq/api/faq/f49b8f57-148c-4510-8e71-4f305eee300d/"
        );
        const data = await res.json();
        console.log("data", data);
        console.log("data answer", data.answer);
        // console.log("data", data.answer_ar);
        setFaq(data); // Store the data object directly if it's a single FAQ
      } catch (error) {
        console.error("Error fetching FAQ:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchFaqs();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">FAQ</h1>
      <div className="faq-item mb-4 p-4 border-b border-gray-200">
        {faq && faq.answer ? <p>{faq.answer}</p> : <p>No answer available</p>}
      </div>
    </div>
  );
}
