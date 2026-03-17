const techs = [
  { icon: "fa-brands fa-js", label: "JavaScript" },
  { icon: "fa-brands fa-react", label: "React" },
  { emoji: "⚡", label: "Next.js" },
  { icon: "fa-brands fa-node-js", label: "Node.js" },
  { emoji: "🚀", label: "Express" },
  { emoji: "🍃", label: "MongoDB" },
  { emoji: "🐬", label: "MySQL" },
  { icon: "fa-brands fa-python", label: "Python" },
  { icon: "fa-brands fa-git-alt", label: "Git" },
  { emoji: "🐳", label: "Docker" },
  { emoji: "📮", label: "Postman" },
  { icon: "fa-brands fa-html5", label: "HTML5" },
  { icon: "fa-brands fa-css3-alt", label: "CSS3" },
  { icon: "fa-brands fa-bootstrap", label: "Bootstrap" },
];

function TechItem({ tech }) {
  return (
    <span>
      {tech.icon ? <i className={tech.icon}></i> : tech.emoji} {tech.label}
    </span>
  );
}

export default function Marquee() {
  return (
    <div className="marquee-section" aria-hidden="true">
      <div className="marquee-track">
        <div className="marquee-items">
          {techs.map((t, i) => <TechItem key={i} tech={t} />)}
        </div>
        <div className="marquee-items" aria-hidden="true">
          {techs.map((t, i) => <TechItem key={`dup-${i}`} tech={t} />)}
        </div>
      </div>
    </div>
  );
}
