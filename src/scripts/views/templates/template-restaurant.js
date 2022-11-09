import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__name" tabindex="0">${restaurant.name}</h2>
  <div class="grid">
    <img class="restaurant__poster" tabindex="0" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
    <div class="grid__content">
      <h4 tabindex="0">Rating</h4>
      <p tabindex="0">${restaurant.rating}</p>
      <h4 tabindex="0">Location</h4>
      <p tabindex="0">${restaurant.city}</p>
      <p tabindex="0">${restaurant.address}</p>
    </div>
  </div>
  <h4 tabindex="0">Foods</h4>
  <p tabindex="0">${restaurant.menus.foods.map((food) => food.name)}</p>
  <h4 tabindex="0">Drinks</h4>
  <p tabindex="0">${restaurant.menus.drinks.map((drink) => drink.name)}</p>
  <h4 tabindex="0">Description</h4>
  <p tabindex="0">${restaurant.description}</p>
  <h4 tabindex="0">Customer Reviews</h4>
  ${restaurant.customerReviews.reduce((show, value) => show.concat(`<br>
  <p tabindex="0">${value.name}</p>
  <p tabindex="0">${value.review}</p>
  <p tabindex="0">${value.date}</p>
  `), '')}
`;

const createRestaurantItemTemplate = (restaurant) => `
  <article class="post-item" tabindex="0">
    <img class="post-item__thumbnail" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
    <div class="post-item__content">
      <p class="post-item__rating" tabindex="0">Rating : <span class="post-item__rating__value">${restaurant.rating}</span></p>
      <h2 class="post-item__title" tabindex="0"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h2>
      <p class="post-item__description" tabindex="0">${restaurant.description}</p>
    </div>
  </article>
`;

const createLikeButtonTemplate = () => `
  <button tabindex="0" aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button tabindex="0" aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
