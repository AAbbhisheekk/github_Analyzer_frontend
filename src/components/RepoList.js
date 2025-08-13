import React, { useState } from "react";
import { FaStar, FaCodeBranch, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

export default function RepoList({ repos }) {
  const [sortBy, setSortBy] = useState("stars");
  const [expandedRepo, setExpandedRepo] = useState(null);

  const sorted = [...repos].sort((a, b) =>
    sortBy === "stars"
      ? b.stargazers_count - a.stargazers_count
      : sortBy === "forks"
      ? b.forks_count - a.forks_count
      : 0
  );

  return (
    <div style={{ marginTop: 50 }}>
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: 20,
          textAlign: "center",
          color: "#1a1a1a",
        }}
      >
        Top Repositories
      </h2>

      <div style={{ textAlign: "center", marginBottom: 25 }}>
        <span style={{ fontWeight: "600" }}>Sort by:</span>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={{
            marginLeft: 10,
            padding: "10px 14px",
            borderRadius: 8,
            border: "1px solid #ccc",
            background: "#f8f8f8",
            fontSize: "1rem",
          }}
        >
          <option value="stars">Stars</option>
          <option value="forks">Forks</option>
        </select>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "25px",
        }}
      >
        {sorted.map((repo) => (
          <motion.div
            key={repo.id}
            whileHover={{ scale: 1.03 }}
            style={{
              padding: 20,
              borderRadius: 16,
              background: "rgba(255,255,255,0.8)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(200,200,255,0.2)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              transition: "0.3s",
            }}
          >
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              style={{
                fontWeight: "bold",
                fontSize: "1.3rem",
                color: "#2d4de0",
                textDecoration: "none",
              }}
            >
              {repo.name}
            </a>

            <p style={{ color: "#555", margin: "8px 0 12px" }}>
              {repo.description || "No description available"}
            </p>

            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
                marginBottom: 10,
              }}
            >
              <span>
                <FaStar color="#f5c518" /> {repo.stargazers_count}
              </span>
              <span>
                <FaCodeBranch color="#36c" /> {repo.forks_count}
              </span>
              {repo.language && (
                <span>
                  <FaCode color="#444" /> {repo.language}
                </span>
              )}
            </div>

            {repo.summary && (
              <div>
                <button
                  onClick={() =>
                    setExpandedRepo(expandedRepo === repo.id ? null : repo.id)
                  }
                  style={{
                    background: "#2d4de0",
                    color: "white",
                    padding: "8px 14px",
                    border: "none",
                    borderRadius: 8,
                    cursor: "pointer",
                  }}
                >
                  {expandedRepo === repo.id ? "Hide Summary" : "Show Summary"}
                </button>

                {expandedRepo === repo.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.4 }}
                    style={{
                      marginTop: 15,
                      padding: 15,
                      background: "#f7faff",
                      borderRadius: 10,
                      borderLeft: "5px solid #2d4de0",
                      color: "#333",
                    }}
                  >
                    <strong>AI Summary:</strong>
                    <div style={{ marginTop: 10, fontSize: "0.95rem" }}>
                      {repo.summary}
                    </div>
                  </motion.div>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}





































// import React, { useState } from 'react';

// export default function RepoList({ repos }) {
//   const [sortBy, setSortBy] = useState('stars');
//   const sorted = [...repos].sort((a, b) =>
//     sortBy === 'stars' ? b.stargazers_count - a.stargazers_count
//     : sortBy === 'forks' ? b.forks_count - a.forks_count
//     : 0
//   );

//   return (
//     <div style={{ marginTop: 30 }}>
//       <h3>Repositories</h3>
//       <div>
//         Sort by:
//         <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
//           <option value="stars">Stars</option>
//           <option value="forks">Forks</option>
//         </select>
//       </div>
//       <ul>
//         {sorted.map(repo => (
//           <li key={repo.id} style={{ marginBottom: 10 }}>
//             <a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a>
//             {repo.description && ` – ${repo.description}`} • ⭐ {repo.stargazers_count} • 🍴 {repo.forks_count} • 📝 {repo.language}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
