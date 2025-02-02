import React from "react";
import "../Styles/InputArea.css";

const Message = ({ text, isBot }) => {
  return (
    <div className={`message ${isBot ? "bot" : "user"}`}>
      <div className="message-bubble">{text}</div>
    </div>
  );
};

export default Message;