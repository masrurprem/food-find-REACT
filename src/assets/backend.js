async function getData() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken",
  );
  const data = await response.json();
  console.log(data);
}

getData();

///////////////
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
</div>;
