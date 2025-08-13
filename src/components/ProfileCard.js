import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaBook } from "react-icons/fa";

export default function ProfileCard({ profile, cached }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        marginTop: 30,
        padding: 30,
        display: "flex",
        alignItems: "center",
        gap: 20,
        borderRadius: 20,
        background: "linear-gradient(135deg,#e0e7ff,#fefefe)",
        boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={profile.avatar_url}
        alt="avatar"
        style={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          border: "3px solid white",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
      />
      <div>
        <h2 style={{ margin: 0, fontSize: "1.8rem", color: "#1a1a1a" }}>
          {profile.name || profile.login}
        </h2>
        <p style={{ color: "#444", fontSize: "1rem" }}>{profile.bio}</p>
        <p style={{ marginTop: 10 }}>
          <FaUsers /> Followers: {profile.followers} • Following:{" "}
          {profile.following}
        </p>
        <p>
          <FaBook /> Public Repos: {profile.public_repos}{" "}
          {cached && "(cached)"}
        </p>
      </div>
    </motion.div>
  );
}
