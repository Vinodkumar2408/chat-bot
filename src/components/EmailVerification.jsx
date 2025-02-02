import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "../Styles/EmailVerification.css";

const EmailVerification = ({ email, onVerify }) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const sendVerificationEmail = async (email, code) => {
    try {
      const templateParams = {
        to_email: email,
        verification_code: code,
      };

      // Replace with your EmailJS service ID, template ID, and user ID
      const response = await emailjs.send(
        "service_gzyouep", // Service ID
        "template_r8lv2tc", // Template ID
        templateParams,
        "TtTWn_oaAaqbOSg2E" // User ID
      );

      console.log("Email sent:", response);
    } catch (error) {
      console.error("Error sending email:", error);
      throw new Error("Failed to send verification email.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (code.length !== 6) {
      setError("Please enter a valid 6-digit code.");
      return;
    }
    // Simulate verification (replace with actual logic)
    if (code === "123456") { // Replace with actual verification logic
      onVerify(); // Move to the next step
    } else {
      setError("Invalid code. Please try again.");
    }
  };

  const handleResend = async () => {
    try {
      setLoading(true);
      const newCode = Math.floor(100000 + Math.random() * 900000); // Generate a new 6-digit code
      await sendVerificationEmail(email, newCode);
      setTimer(30); // Reset timer
      setCanResend(false); // Disable resend button
      alert("Verification code resent!");
    } catch (error) {
      setError("Failed to resend code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="email-verification">
      <h2>Verify Your Email</h2>
      <p>We’ve sent a 6-digit verification code to {email}. Please check your inbox and enter the code below.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter 6-digit code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          maxLength={6}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? "Verifying..." : "Verify Email"}
        </button>
      </form>
      <p>
        Didn’t receive the code?{" "}
        {canResend ? (
          <a href="#" onClick={handleResend}>
            Resend
          </a>
        ) : (
          `Resend in ${timer} seconds`
        )}
      </p>
    </div>
  );
};

export default EmailVerification;