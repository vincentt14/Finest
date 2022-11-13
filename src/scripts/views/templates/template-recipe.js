const createRecipetItemTemplate = (recipe) => `
  <article class="post-item" tabindex="0">
    <img class="post-item__thumbnail lazyload" src="${recipe.strMealThumb}" alt="" />
    <div class="post-item__content">
      <p class="post-item__rating" tabindex="0">Category : <span class="post-item__rating__value">${recipe.strCategory}</span></p>
      <h2 class="post-item__title" tabindex="0">${recipe.strMeal}</h2>
      <p class="post-item__description" tabindex="0">${recipe.strInstructions}</p>
    </div>
  </article>
`;

export default createRecipetItemTemplate;
