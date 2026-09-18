import "./Homepage.css";
import BhongoLogo from "../components/BhongoLogo";
// import CategoriesCard from "../components/categories-card";

function Home() {
  return (
    <div className="home-page">
      <header>
        <BhongoLogo></BhongoLogo>
        {/* <CategoriesCard></CategoriesCard> */}
        <div className="menu-bar">
          <img src="/src/assets/menu.svg" alt="menu-icon" />
        </div>
      </header>
    </div>
  );
}
export default Home;
