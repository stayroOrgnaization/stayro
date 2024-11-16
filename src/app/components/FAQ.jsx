// components/FaqList.js
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function FaqList() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFaqs() {
      try {
        const res = await fetch("https://api.stayro.com/ar/faq/api/faq/");
        const data = await res.json();
        console.log("data", data);
        setFaqs(data.data);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchFaqs();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">FAQs</h1>
      <ul>
        {faqs.map((faq) => (
          <li key={faq.id} className="mb-4 p-4 border-b border-gray-200">
            <Link
              href={`/faq/${faq.id}`}
              className="text-blue-500 hover:underline"
            >
              {faq.question}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}