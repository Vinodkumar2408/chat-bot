import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import "../Styles/RegistrationForm.css";

const RegistrationForm = ({ onNext }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    // Simulate API call for registration
    console.log({ name, email, password });
    onNext(email); // Move to the next step (email verification)
  };

  const handleGoogleSuccess = (credentialResponse) => {
    console.log("Google OAuth Success:", credentialResponse);
    // Decode the JWT token to get user info (name, email, etc.)
    const decodedToken = JSON.parse(atob(credentialResponse.credential.split(".")[1]));
    console.log("Decoded Token:", decodedToken);
    setName(decodedToken.name);
    setEmail(decodedToken.email);
    onNext(decodedToken.email); // Move to email verification
  };

  const handleGoogleError = () => {
    console.log("Google OAuth Failed");
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="registration-form">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {error && <p className="error">{error}</p>}
          <button type="submit">Sign Up</button>
        </form>
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleError}
          text="continue_with"
          shape="pill"
        />
        <p>
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </GoogleOAuthProvider>
  );
};

export default RegistrationForm;