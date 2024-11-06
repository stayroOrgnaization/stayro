"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { authStore } from "../../stores/auth";

function OTPInput() {
  const router = useRouter();
  const [otp, setOtp] = useState(Array(6).fill("")); // Array of 6 elements
  const inputRefs = Array.from({ length: 6 }, () => useRef(null)); // Create refs for each input

  // Handle OTP input changes
  const handleInputChange = (value, index) => {
    if (/^\d$/.test(value)) {
      // Check if it's a single digit
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input field if available
      if (index < 5) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleKeyDown = (event, index) => {
    // Handle backspace to move to the previous box
    if (event.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleSubmit = async () => {
    const otpToken = otp.join(""); // Combine OTP array into a single string
    console.log("Phone Number:", authStore.formData.phone);
    console.log("Role:", authStore.formData.role);

    const dataToSend = {
      phone_number: authStore.formData.phone || "",
      role: authStore.formData.role || "",
      otp_token: otpToken,
    };

    try {
      const response = await fetch(
        "https://api.stayro.com/ar/auth/api/password/verify/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );

      if (response.ok) {
        router.push("/SetNewPass"); // Redirect on success
      } else {
        alert("OTP verification failed"); // Handle errors
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  return (
    <div>
      <h2>Enter OTP</h2>
      <div style={{ display: "flex", gap: "8px" }}>
        {otp.map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            ref={inputRefs[index]}
            value={otp[index]}
            onChange={(e) => handleInputChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            style={{ width: "40px", textAlign: "center", fontSize: "20px" }}
          />
        ))}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default OTPInput;
