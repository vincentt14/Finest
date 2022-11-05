import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__name">${restaurant.name}</h2>
  <div class="grid">
    <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
    <div class="grid__content">
      <h4>Rating</h4>
      <p>${restaurant.rating}</p>
      <h4>Location</h4>
      <p>${restaurant.city}</p>
      <p>${restaurant.address}</p>
    </div>
  </div>
  <h4>Foods</h4>
  <p>${restaurant.menus.foods.map((food) => food.name)}</p>
  <h4>Drinks</h4>
  <p>${restaurant.menus.drinks.map((drink) => drink.name)}</p>
  <h4>Description</h4>
  <p>${restaurant.description}</p>
  <h4>Customer Reviews</h4>
  ${restaurant.customerReviews.reduce((show, value) => show.concat(`<br>
  <p>${value.name}</p>
  <p>${value.review}</p>
  <p>${value.date}</p>
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
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
