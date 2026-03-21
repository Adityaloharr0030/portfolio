import Link from "next/link";

export default function BlogPost({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch the markdown file/database entry based on the slug.
  // This is a placeholder for the content page.
  
  return (
    <div style={{ paddingTop: "120px", paddingBottom: "80px", minHeight: "100vh" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        
        <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--accent)", fontWeight: "600", marginBottom: "40px" }}>
          <i className="fa-solid fa-arrow-left"></i> Back to Blog
        </Link>
        
        <div style={{ marginBottom: "40px" }}>
          <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "16px", fontSize: "0.9rem", color: "var(--text-muted)" }}>
            <span>March 21, 2026</span>
            <span>•</span>
            <span>By Aditya Lohar</span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: "800", lineHeight: "1.2", marginBottom: "24px", color: "var(--text-primary)" }}>
            Viewing article: {params.slug.replace(/-/g, " ")}
          </h1>
          
          <div style={{ height: "1px", background: "var(--border)", width: "100%", marginBottom: "40px" }} />
          
          <div style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: "1.8" }}>
            <p style={{ marginBottom: "20px" }}>
              This is a dynamic route `[slug]` in Next.js 14! You can easily hook this up to a Markdown (MDX) parser like `next-mdx-remote` or a headless CMS like Sanity/Contentful later.
            </p>
            <p style={{ marginBottom: "20px" }}>
              To add an actual article, you just need to create a markdown file matching the slug name, read it using Node.js `fs` module, and supply the content to this component!
            </p>
            
            <div style={{ margin: "40px 0", padding: "24px", background: "rgba(108,99,255,0.05)", borderLeft: "4px solid var(--accent)", borderRadius: "var(--radius-sm)" }}>
              <strong style={{ color: "var(--accent)" }}>💡 Pro Tip:</strong> Adding technical writing to your portfolio significantly boosts your credibility with recruiters. It proves you can not just code, but communicate complex topics clearly.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
