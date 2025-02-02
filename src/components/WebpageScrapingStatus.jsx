import React, { useState } from "react";
import "../Styles/WebpageScrapingStatus.css";

const WebpageScrapingStatus = ({ onComplete }) => {
  // Dummy data for detected webpages
  const [webpages, setWebpages] = useState([
    { id: 1, url: "https://example.com/home", status: "scraped", data: "Homepage content scraped successfully." },
    { id: 2, url: "https://example.com/about", status: "pending", data: "About page is pending scraping." },
    { id: 3, url: "https://example.com/contact", status: "scraped", data: "Contact page content scraped successfully." },
  ]);

  const [selectedWebpage, setSelectedWebpage] = useState(null);

  const handleWebpageClick = (webpage) => {
    setSelectedWebpage(webpage);
  };

  return (
    <div className="webpage-scraping-status">
      <h2>Webpage Scraping Status</h2>
      <div className="webpage-list">
        {webpages.map((webpage) => (
          <div
            key={webpage.id}
            className={`webpage-item ${webpage.status}`}
            onClick={() => handleWebpageClick(webpage)}
          >
            <span>{webpage.url}</span>
            <span>{webpage.status}</span>
          </div>
        ))}
      </div>
      {selectedWebpage && (
        <div className="webpage-details">
          <h3>Scraped Data for {selectedWebpage.url}</h3>
          <p>{selectedWebpage.data}</p>
          <button onClick={() => setSelectedWebpage(null)}>Close</button>
        </div>
      )}
      <button className="complete-button" onClick={onComplete}>
        Continue to Chat
      </button>
    </div>
  );
};

export default WebpageScrapingStatus;