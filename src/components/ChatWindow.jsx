import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Message from "../components/Message";
import InputArea from "../components/InputArea";
import RegistrationForm from "../components/RegistrationForm";
import EmailVerification from "../components/EmailVerification";
import OrganizationSetup from "../components/OrganizationSetup";
import WebpageScrapingStatus from "../components/WebpageScrapingStatus";
import ChatbotTesting from "../components/ChatbotTesting";
import WebsiteIntegration from "../components/WebsiteIntegration";
import IntegrationSuccess from "../components/IntegrationSuccess";
import Login from "../components/Login";
import "../Styles/ChatWindow.css";

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { text: "Hi! How can I help you?", isBot: true },
  ]);
  const [quickReplies, setQuickReplies] = useState([
    "Register",
    "Log In",
    "FAQs",
  ]);
  const [step, setStep] = useState("chat"); // chat, register, verify, organization, scraping, testing, integration, success
  const [email, setEmail] = useState("");

  const handleSendMessage = (text) => {
    if (text === "Register") {
      setStep("register");
      return;
    }
    if (text === "Log In") {
      setStep("login");
      return;
    }
    setMessages([...messages, { text, isBot: false }]);
    setQuickReplies(null); // Clear quick replies after user responds
    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: `You said: "${text}". How can I assist you further?`, isBot: true },
      ]);
    }, 1000);
  };

  const handleRegistrationSubmit = (email) => {
    setEmail(email);
    setStep("verify");
  };

  const handleVerificationSuccess = () => {
    setStep("organization"); // Move to organization setup
  };

  const handleOrganizationComplete = () => {
    setStep("scraping"); // Move to webpage scraping status
  };

  const handleScrapingComplete = () => {
    setStep("testing"); // Move to chatbot testing
  };

  const handleTestingComplete = () => {
    setStep("integration"); // Move to website integration
  };

  const handleIntegrationComplete = () => {
    setStep("success"); // Move to success screen
  };

  const handleSuccessComplete = () => {
    setMessages([{ text: "Integration successful! How can I help you?", isBot: true }]);
    setStep("chat"); // Return to the main chat
  };

  return (
    <Router>
      <div className="chat-window">
        <div className="chat-header">BusinessBot</div>
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <Message key={index} text={msg.text} isBot={msg.isBot} />
          ))}
          {step === "register" && <RegistrationForm onNext={handleRegistrationSubmit} />}
          {step === "verify" && <EmailVerification email={email} onVerify={handleVerificationSuccess} />}
          {step === "organization" && <OrganizationSetup onComplete={handleOrganizationComplete} />}
          {step === "scraping" && <WebpageScrapingStatus onComplete={handleScrapingComplete} />}
          {step === "testing" && <ChatbotTesting onComplete={handleTestingComplete} />}
          {step === "integration" && <WebsiteIntegration onComplete={handleIntegrationComplete} />}
          {step === "success" && <IntegrationSuccess onComplete={handleSuccessComplete} />}
          {step === "login" && <Login />}
        </div>
        {step === "chat" && <InputArea onSendMessage={handleSendMessage} quickReplies={quickReplies} />}
      </div>
    </Router>
  );
};

export default ChatWindow;