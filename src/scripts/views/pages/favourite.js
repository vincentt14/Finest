import FavoriteRestaurantIdb from '../../data/favourite-restaurant-idb';
import FavoriteRestaurantSearchView from './liked-movies/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from './liked-movies/favorite-restaurant-show-presenter';
import FavoriteRestaurantSearchPresenter from './liked-movies/favorite-restaurant-search-presenter';

const view = new FavoriteRestaurantSearchView();

const Favourite = {
  async render() {
    // return `
    //   <h2 tabindex="0">Your Favorite Restaurants</h2>
    //   <div class="menuList" id="menuLists"></div>
    // `;
    return view.getTemplate();
  },

  async afterRender() {
    // const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    // const restaurantsContainer = document.querySelector('#menuLists');

    // restaurants.forEach((restaurant) => {
    //   restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    // });
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
  },
};

export default Favourite;
