import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-restaurant';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favourite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <div id="detailPage" class="detailPage"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const detailContainer = document.querySelector('#detailPage');
    detailContainer.innerHTML = createRestaurantDetailTemplate(restaurant.restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        pictureId: restaurant.restaurant.pictureId,
        rating: restaurant.restaurant.rating,
        city: restaurant.restaurant.city,
        address: restaurant.restaurant.address,
        foods: restaurant.restaurant.menus.foods,
        drinks: restaurant.restaurant.menus.drinks,
        description: restaurant.restaurant.description,
        customerReviews: restaurant.restaurant.customerReviews,
      },
    });
  },
};

export default Detail;
