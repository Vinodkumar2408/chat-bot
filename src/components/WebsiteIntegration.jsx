import React, { useState } from "react";
import "../Styles/WebsiteIntegration.css";

const WebsiteIntegration = ({ onComplete }) => {
  const [email, setEmail] = useState("");
  const [showCode, setShowCode] = useState(false);
  const [feedback, setFeedback] = useState("");

  const dummyCode = `
    <!-- Add this code to the <head> section of your website -->
    <script src="https://example.com/chatbot.js"></script>
    <script>
      window.chatbotConfig = {
        apiKey: "your-api-key-here",
        theme: "light",
      };
    </script>
  `;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(dummyCode);
    alert("Code copied to clipboard!");
  };

  const handleSendEmail = () => {
    if (email.trim()) {
      // Simulate sending email to the developer
      console.log("Email sent to:", email);
      alert("Instructions sent to the developer!");
      setEmail("");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div className="website-integration">
      <h2>Integrate Chatbot on Your Website</h2>
      <div className="options">
        <div className="option">
          <h3>Option 1: Copy and Paste Code</h3>
          <button onClick={() => setShowCode(!showCode)}>
            {showCode ? "Hide Instructions" : "Show Instructions"}
          </button>
          {showCode && (
            <div className="code-container">
              <pre>{dummyCode}</pre>
              <button onClick={handleCopyCode}>Copy Code</button>
            </div>
          )}
        </div>
        <div className="option">
          <h3>Option 2: Email Instructions to Developer</h3>
          <input
            type="email"
            placeholder="Enter developer's email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSendEmail}>Send Email</button>
        </div>
      </div>
      <button className="complete-button" onClick={onComplete}>
        Continue to Chat
      </button>
    </div>
  );
};

export default WebsiteIntegration;