import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import { motion } from "framer-motion";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#ff5c8d", "#b47bff"];

export default function ChartsDashboard({ repos }) {
  if (!repos || repos.length === 0) return null;

  // Grouping repos by language
  const languageCount = {};
  repos.forEach((repo) => {
    const lang = repo.language || "Other";
    languageCount[lang] = (languageCount[lang] || 0) + 1;
  });

  const languageData = Object.keys(languageCount).map((lang) => ({
    name: lang,
    value: languageCount[lang],
  }));

  // Top 5 repos by stars
  const topStarredRepos = [...repos]
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 5)
    .map((repo) => ({
      name: repo.name,
      stars: repo.stargazers_count,
    }));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        marginTop: 40,
        padding: 30,
        background: "white",
        borderRadius: 20,
        boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 20 }}>
        Language & Stars Overview
      </h2>

      {/* Language Pie Chart */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
        <div style={{ width: "100%", maxWidth: 400, height: 300 }}>
          <h3 style={{ textAlign: "center", marginBottom: 10 }}>Languages Used</h3>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={languageData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {languageData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart for Top Starred Repos */}
        <div style={{ width: "100%", maxWidth: 500, height: 300, marginTop: 30 }}>
          <h3 style={{ textAlign: "center", marginBottom: 10 }}>Top Starred Repos</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={topStarredRepos}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="stars" fill="#2d4de0" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
}
















































































































































// import React from "react";
// import { motion } from "framer-motion";

// export default function ChartsDashboard({ repos }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       style={{
//         marginTop: 40,
//         padding: 30,
//         background: "white",
//         borderRadius: 20,
//         boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
//       }}
//     >
//       <h2 style={{ textAlign: "center", marginBottom: 20 }}>
//         Language & Stars Overview
//       </h2>
//       {/* You can integrate charts.js or recharts here */}
//       <p style={{ textAlign: "center", color: "#555" }}>
//         [Charts showing stars, forks, languages go here]
//       </p>
//     </motion.div>
//   );
// }
