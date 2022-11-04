import API_ENDPOINT from '../globals/api-endpoint';

class TheMealRecipeSource {
  static async getRecipe() {
    const response = await fetch(API_ENDPOINT.THEMEAL);
    const responseJson = await response.json();
    return responseJson.meals;
  }
}

export default TheMealRecipeSource;
