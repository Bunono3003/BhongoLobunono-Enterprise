import BhongoLogo from "../components/BhongoLogo.jsx";
import "./Landingpage.css";
// import ShopButton from "../components/button";

function Landing() {
  return (
    <div className="landing-page">
      <header className="site-header">
        <BhongoLogo></BhongoLogo>
      </header>
      <div className="welcome-message">
        <h3>Custom Clothing Made For You</h3>
        <p>Browse traditional wear, formal pieces, and more designs!</p>
        <div className="shop-now-button">
          <button>
            <a href="/shop" target="_blank" rel="noopener noreferrer">
              Shop Now
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
