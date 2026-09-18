import "./categories-card.css";
const categoriesNames = [
  "Traditional Wear",
  "Formal Pieces",
  "Casual Wear",
  "School Uniforms",
  "Custom Designs",
];
function CategoriesCard() {
  return (
    <div className="categories-card">
      <div className="categories-card-image"></div>
      <div className="categories-card-name">
        <h3>{categoriesNames[0]}</h3>
      </div>
    </div>
  );
}
export default CategoriesCard;
