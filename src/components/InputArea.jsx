import React, { useState } from "react";
import "../Styles/InputArea.css";

const InputArea = ({ onSendMessage, quickReplies }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput("");
    }
  };

  return (
    <div className="input-area">
      {quickReplies && (
        <div className="quick-replies">
          {quickReplies.map((reply, index) => (
            <button key={index} onClick={() => onSendMessage(reply)}>
              {reply}
            </button>
          ))}
        </div>
      )}
      <input
        type="text"
        placeholder="Type a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSend()}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default InputArea;