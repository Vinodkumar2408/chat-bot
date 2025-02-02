import React, { useState } from "react";
import "../Styles/OrganizationSetup.css";

const OrganizationSetup = ({ onComplete }) => {
  const [companyName, setCompanyName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!companyName || !websiteUrl || !description) {
      setError("Please fill out all fields.");
      return;
    }
    // Simulate API call to save organization details
    console.log({ companyName, websiteUrl, description });
    onComplete(); // Move to the next step
  };

  return (
    <div className="organization-setup">
      <h2>Set Up Your Organization</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
        />
        <input
          type="url"
          placeholder="Company Website URL"
          value={websiteUrl}
          onChange={(e) => setWebsiteUrl(e.target.value)}
          required
        />
        <textarea
          placeholder="Company Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OrganizationSetup;