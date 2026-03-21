import Link from "next/link";

const blogPosts = [
  {
    title: "How I migrated my portfolio to Next.js 14",
    slug: "migrating-to-nextjs-14",
    date: "March 21, 2026",
    excerpt: "A deep dive into why I moved away from plain HTML/JS to the App Router, and the performance benefits I gained.",
    readTime: "4 min read",
    tags: ["Next.js", "React", "Performance"]
  },
  {
    title: "Building an Enterprise Banking System in Java",
    slug: "enterprise-java-banking",
    date: "February 12, 2026",
    excerpt: "Exploring the MVC architecture, custom connection pooling, and secure transactions I built for my Java desktop app.",
    readTime: "6 min read",
    tags: ["Java", "System Design", "SQL"]
  },
  {
    title: "The Future of AI in Web Development",
    slug: "ai-web-development",
    date: "January 05, 2026",
    excerpt: "My thoughts on how AI assistants like OpenAI are changing the way we write code, based on my experience building Ani Editor.",
    readTime: "5 min read",
    tags: ["AI", "OpenAI", "Web Dev"]
  }
];

export default function BlogIndex() {
  return (
    <div style={{ paddingTop: "120px", paddingBottom: "60px", minHeight: "80vh" }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: "40px", textAlign: "left" }}>
          <span className="section-tag">Writing & Thoughts</span>
          <h2 className="section-title">Developer <span className="gradient-text">Blog</span></h2>
          <p className="section-sub" style={{ margin: "0" }}>Technical deep-dives, project post-mortems, and everything I learn along the way.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", maxWidth: "800px" }}>
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} style={{ textDecoration: "none", color: "inherit" }}>
              <div 
                className="project-card" 
                style={{ padding: "30px", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", background: "var(--bg-card)", transition: "var(--trans)", cursor: "pointer" }}
              >
                <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "12px", fontSize: "0.85rem", color: "var(--text-muted)" }}>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 style={{ fontSize: "1.6rem", color: "var(--text-primary)", marginBottom: "12px" }}>{post.title}</h3>
                <p style={{ color: "var(--text-secondary)", marginBottom: "20px", lineHeight: "1.6" }}>{post.excerpt}</p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {post.tags.map(tag => (
                    <span key={tag} className="tech-tag" style={{ fontSize: "0.75rem", padding: "4px 10px", background: "rgba(108,99,255,0.1)", color: "var(--accent)", borderRadius: "50px", border: "1px solid rgba(108,99,255,0.2)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
