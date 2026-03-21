export default function Preloader() {
  return (
    <div id="preloader">
      <div className="preloader-inner">
        <div className="preloader-logo">
          <span className="logo-bracket">&lt;</span>AL
          <span className="logo-bracket">/&gt;</span>
        </div>
        <div className="preloader-bar">
          <div className="preloader-fill" id="preloader-fill"></div>
        </div>
        <p className="preloader-text">Initialising portfolio...</p>
      </div>
    </div>
  );
}
