import "./Landingpage.css";

function Landing() {
  return (
    <div className="landing-page">
      <header className="site-header">
        <div className="logo-container">
          <div className="logo-badge">
            <span className="logo-mark" />
          </div>
          <div className="logo-text">
            <span className="logo-line logo-line--top">BHONGO</span>
            <span className="logo-line logo-line--bottom">LOBUNONO</span>
          </div>
        </div>
      </header>
      <div className="welcome-message">
        <h3>Custom Clothing Made For You</h3>
        <p>Browse traditional wear, formal pieces, and more designs!</p>
        <div className="shop-now-button">
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default Landing;