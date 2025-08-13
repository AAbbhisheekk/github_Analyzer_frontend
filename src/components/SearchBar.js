import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [username, setUsername] = useState("");

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    maxWidth: "600px",
    margin: "20px auto",
    transition: "transform 0.3s ease",
  };

  const inputStyle = {
    flex: 1,
    padding: "10px 15px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "16px",
    outline: "none",
    transition: "all 0.3s ease",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#24292e",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
    transition: "background-color 0.3s ease, transform 0.2s ease",
  };

  const iconStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = "#0070f3";
    e.target.style.boxShadow = "0 0 5px rgba(0,118,255,0.5)";
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = "#ccc";
    e.target.style.boxShadow = "none";
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(username);
      }}
    >
      <div style={containerStyle}>
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="GitHub"
          style={iconStyle}
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Enter GitHub username..."
          style={inputStyle}
        />
        <button
          type="submit"
          style={buttonStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#444")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#24292e")}
        >
          Search
        </button>
      </div>
    </form>
  );
}
