import React, { useState } from "react";
import { diseases } from "../data/diseases";
import "./Chatbot.css";

export default function Chatbot() {
  const [selectedDisease, setSelectedDisease] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="chatbot-container">
      <h1 className="chatbot-title">Health Chatbot</h1>

      {/* Step 1: Choose Disease */}
      {!selectedDisease && (
        <div className="button-list">
          {Object.keys(diseases).map((disease) => (
            <button
              key={disease}
              className="chat-button"
              onClick={() => setSelectedDisease(disease)}
            >
              {disease}
            </button>
          ))}
        </div>
      )}

      {/* Step 2: Choose Category */}
      {selectedDisease && !selectedCategory && (
        <div className="button-list">
          {["Medication", "Awareness", "Counselling"].map((category) => (
            <button
              key={category}
              className="chat-button"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
          <button
            className="back-button"
            onClick={() => setSelectedDisease(null)}
          >
            ⬅ Back
          </button>
        </div>
      )}

      {/* Step 3: Show Details */}
      {selectedDisease && selectedCategory && (
        <div>
          <h2 className="detail-title">
            {selectedCategory} – {selectedDisease}
          </h2>
          <ul className="detail-list">
            {diseases[selectedDisease][selectedCategory].map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <button
            className="back-button"
            onClick={() => setSelectedCategory(null)}
          >
            ⬅ Back
          </button>
        </div>
      )}
    </div>
  );
}
