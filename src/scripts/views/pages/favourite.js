import FavoriteRestaurantIdb from '../../data/favourite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-restaurant';

const Favourite = {
  async render() {
    return `
      <h2 tabindex="0">Your Favorite Restaurants</h2>
      <div class="menuList" id="menuLists"></div>

      <div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#menuList');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favourite;
