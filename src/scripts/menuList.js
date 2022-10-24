const menuList = document.getElementById("menuLists");

fetch("http://localhost:3004/restaurants")
  .then((response) => response.json())
  .then((data) => {
    data.map((rest) => {
      menuList.innerHTML += `
      <article class="post-item" tabindex="0">
        <img class="post-item__thumbnail" src="${rest.pictureId}" alt="" />
        <div class="post-item__content">
          <p class="post-item__rating" tabindex="0">Rating : <span class="post-item__rating__value">${rest.rating}</span></p>
          <h2 class="post-item__title" tabindex="0">${rest.name}</h2>
          <p class="post-item__description" tabindex="0">${rest.description}</p>
        </div>
      </article>
    `;
    });
  });
