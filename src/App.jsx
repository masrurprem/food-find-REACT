import FoodCard from "./components/foodCard.jsx";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    // fetch api if user searches for food
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.meals);
        setFoods(data.meals || []);
      });
  }, [search]);
  return (
    <>
      <div className="food-app">
        <input
          type="text"
          placeholder="Search Meal here..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />

        {/* meal with conditional rendering */}
        {search === "" ? (
          <p className="first-message">Use Search Bar to Find Food</p>
        ) : foods.length === 0 ? (
          <p className="no-food">No Food Found! 😢</p>
        ) : (
          <div className="food-grid">
            {foods.map((foodObj) => {
              return (
                <FoodCard
                  key={foodObj.idMeal}
                  foodLogo={foodObj.strMealThumb}
                  foodTitle={foodObj.strMeal}
                  foodArea={foodObj.strArea}
                  foodCat={foodObj.strCategory}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
