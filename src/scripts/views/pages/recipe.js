import TheMealRecipeSource from '../../data/theMealRecipe-source';
import createRecipetItemTemplate from '../templates/template-recipe';

const Recipe = {
  async render() {
    return `
      <h2 tabindex="0" id="theMeal">TheMealDB Recipe</h2>
      <div class="menuList" id="menuList"></div>
    `;
  },

  async afterRender() {
    const recipes = await TheMealRecipeSource.getRecipe();
    const theMealMenuLists = document.getElementById('menuList');
    recipes.forEach((recipe) => {
      theMealMenuLists.innerHTML += createRecipetItemTemplate(recipe);
    });
  },
};

export default Recipe;
