import React, { useState } from "react";
import "../Styles/ChatbotTesting.css";

const ChatbotTesting = ({ onComplete }) => {
  const [feedback, setFeedback] = useState("");

  const handleTestChatbot = () => {
    // Open the client's website in a new tab with the chatbot integrated
    window.open("https://example.com", "_blank");
  };

  const handleSendFeedback = () => {
    if (feedback.trim()) {
      // Simulate sending feedback to the backend
      console.log("Feedback sent:", feedback);
      alert("Thank you for your feedback!");
      setFeedback("");
    } else {
      alert("Please enter your feedback before sending.");
    }
  };

  return (
    <div className="chatbot-testing">
      <h2>Chatbot Integration & Testing</h2>
      <div className="topbar">
        <span>Chatbot not working as intended?</span>
        <input
          type="text"
          placeholder="Send feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <button onClick={handleSendFeedback}>Send</button>
      </div>
      <div className="buttons">
        <button onClick={handleTestChatbot}>Test Chatbot</button>
        <button onClick={onComplete}>Continue to Chat</button>
      </div>
    </div>
  );
};

export default ChatbotTesting;