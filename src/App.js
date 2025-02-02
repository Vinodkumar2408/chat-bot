import React from "react";
import ChatWindow from "./components/ChatWindow";
import "./Styles/App.css";

const App = () => {
  return (
    <div className="app">
      <h1>Welcome to chatbot</h1>
      <ChatWindow />
    </div>
  );
};

export default App;