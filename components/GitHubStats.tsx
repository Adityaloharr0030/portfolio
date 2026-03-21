"use client";

import * as React from "react";
import { useEffect, useState } from "react";

export default function GitHubStats() {
  const [repos, setRepos] = useState(0);
  const [stars, setStars] = useState(0);
  const [followers, setFollowers] = useState(0);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("https://api.github.com/users/Adityaloharr0030");
        if (res.ok) {
          const data = await res.json();
          setRepos(data.public_repos);
          setFollowers(data.followers);
        }

        const reposRes = await fetch("https://api.github.com/users/Adityaloharr0030/repos?per_page=100");
        if (reposRes.ok) {
          const reposData = await reposRes.json();
          setStars(reposData.reduce((acc: any, repo: any) => acc + repo.stargazers_count, 0));
        }
      } catch (error) {
        console.error("Failed to fetch Github stats", error);
      }
    }
    fetchStats();
  }, []);

  return (
    <div className="about-stats-row" style={{ marginTop: "24px" }} data-aos="fade-up" data-aos-delay="150">
      <div className="stat-card" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
        <i className="fa-brands fa-github" style={{ fontSize: "1.4rem", color: "var(--accent)" }}></i>
        <span className="stat-number" style={{ fontSize: "1.5rem" }}>{repos}</span>
        <span className="stat-label">GitHub Repos</span>
      </div>
      <div className="stat-card" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
        <i className="fa-solid fa-star" style={{ fontSize: "1.4rem", color: "var(--accent)" }}></i>
        <span className="stat-number" style={{ fontSize: "1.5rem" }}>{stars}</span>
        <span className="stat-label">Total Stars</span>
      </div>
      <div className="stat-card" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
        <i className="fa-solid fa-users" style={{ fontSize: "1.4rem", color: "var(--accent)" }}></i>
        <span className="stat-number" style={{ fontSize: "1.5rem" }}>{followers}</span>
        <span className="stat-label">Followers</span>
      </div>
    </div>
  );
}
