import "./foodCard.css";

function FoodCard(props) {
  return (
    <>
      <div className="food-card">
        <img src={props.foodLogo} alt={props.foodTitle} />
        <h2>{props.foodTitle}</h2>
        <div className="food-desc">
          <p>{props.foodArea}</p>
          <p>{props.foodCat}</p>
        </div>
        <button className="submit-btn">Add to Cart</button>
      </div>
    </>
  );
}

export default FoodCard;
