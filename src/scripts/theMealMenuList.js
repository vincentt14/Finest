const theMealMenuLists = document.getElementById("theMealMenuLists");

fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=A`)
  .then((res) => res.json())
  .then((data) => {
    renderFoodItem(data.meals);
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  });

const renderFoodItem = (meals) => {
  meals.forEach((meal) => {
    theMealMenuLists.innerHTML += `
      <article class="post-item" tabindex="0">
        <img class="post-item__thumbnail" src="${meal.strMealThumb}" alt="" />
        <div class="post-item__content">
          <p class="post-item__rating" tabindex="0">Category : <span class="post-item__rating__value">${meal.strCategory}</span></p>
          <h1 class="post-item__title" tabindex="0">${meal.strMeal}</h1>
          <p class="post-item__description" tabindex="0">${meal.strInstructions}</p>
        </div>
      </article>`;
  });
};
