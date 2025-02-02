import React from "react";
import Confetti from "react-confetti";
import "../Styles/IntegrationSuccess.css";

const IntegrationSuccess = ({ onComplete }) => {
  return (
    <div className="integration-success">
      <Confetti width={window.innerWidth} height={window.innerHeight} />
      <h2>🎉 Integration Successful! 🎉</h2>
      <p>Your chatbot has been successfully integrated with your website.</p>
      <div className="buttons">
        <button onClick={() => window.open("https://example.com/admin", "_blank")}>
          Explore Admin Panel
        </button>
        <button onClick={() => window.open("https://example.com/chat", "_blank")}>
          Start Talking to Your Chatbot
        </button>
      </div>
      <div className="social-sharing">
        <p>Share your success:</p>
        <button onClick={() => window.open("https://twitter.com/intent/tweet?text=Check%20out%20my%20new%20chatbot%20integration!", "_blank")}>
          Twitter
        </button>
        <button onClick={() => window.open("https://www.linkedin.com/shareArticle?mini=true&url=https://example.com&title=Chatbot%20Integration%20Success", "_blank")}>
          LinkedIn
        </button>
        <button onClick={() => window.open("https://www.facebook.com/sharer/sharer.php?u=https://example.com", "_blank")}>
          Facebook
        </button>
      </div>
      <button className="complete-button" onClick={onComplete}>
        Continue to Chat
      </button>
    </div>
  );
};

export default IntegrationSuccess;