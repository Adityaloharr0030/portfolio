import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "20px", marginTop: "var(--nav-h)" }}>
      {/* Glitch/Gradient 404 Text */}
      <h1 style={{ fontSize: "clamp(6rem, 15vw, 12rem)", fontWeight: "900", background: "var(--accent-grad)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: "1", letterSpacing: "-5px", marginBottom: "0" }}>
        404
      </h1>
      
      <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: "700", color: "var(--text-primary)", marginBottom: "16px", letterSpacing: "-1px" }}>
        Directory Not Found
      </h2>
      
      <p style={{ color: "var(--text-secondary)", maxWidth: "500px", margin: "0 auto 40px auto", fontSize: "1.1rem", lineHeight: "1.6" }}>
        Oops! It looks like you've wandered into a missing directory. The route you are looking for has either been moved or doesn't exist.
      </p>
      
      <Link href="/" className="btn btn-primary" style={{ padding: "14px 36px", fontSize: "1.05rem" }}>
        <i className="fa-solid fa-house"></i> Return to Root
      </Link>
      
      {/* Terminal decorative element */}
      <div className="terminal-card" style={{ marginTop: "60px", maxWidth: "450px", width: "100%", textAlign: "left", animation: "none", transform: "none" }}>
        <div className="terminal-header">
          <span className="t-dot t-red"></span>
          <span className="t-dot t-yellow"></span>
          <span className="t-dot t-green"></span>
          <span className="t-title">bash</span>
        </div>
        <div className="terminal-body" style={{ minHeight: "auto", padding: "16px 20px" }}>
          <div className="t-line">
            <span className="t-prompt" style={{ color: "#ff5f57" }}>$</span> 
            <span className="t-cmd">cd /portfolio/missing-page</span>
          </div>
          <div className="t-line t-output" style={{ paddingLeft: "16px", marginTop: "4px" }}>
            bash: cd: /portfolio/missing-page: No such file or directory
          </div>
          <div className="t-line" style={{ marginTop: "8px" }}>
            <span className="t-prompt">$</span> 
            <span className="t-cursor">▋</span>
          </div>
        </div>
      </div>
    </div>
  );
}
