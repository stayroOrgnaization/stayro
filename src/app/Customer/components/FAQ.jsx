// components/FaqList.js
"use client";
import { useState, useEffect } from "react";

export default function FaqList() {
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    const fetchFAQ = async () => {
      try {
        const response = await fetch("https://api.stayro.com/faq/api/faq/");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setFaqData(data.data); // Assuming "data" contains the array of FAQs
      } catch (error) {
        console.error("Error fetching FAQ data:", error);
      }
    };

    fetchFAQ();
  }, []);

  return (
    <div>
      <h1>الأسئلة الشائعة</h1>
      <div>
        {faqData.map((item) => (
          <div key={item.id} style={{ marginBottom: "20px" }}>
            <h2>السؤال: {item.question_ar}</h2>
            <p>الإجابة: {item.answer_ar}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
