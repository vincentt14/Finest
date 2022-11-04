import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-restaurant';

const Home = {
  async render() {
    return `
      <h2 tabindex="0">Restaurant Lists</h2>
      <div class="menuList" id="menuLists"></div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.getAllRestaurants();
    const menuList = document.getElementById('menuLists');
    restaurants.forEach((restaurant) => {
      menuList.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
