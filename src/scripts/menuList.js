const menuList = document.getElementById("menuLists");

fetch("http://localhost:3004/restaurants")
  .then((response) => response.json())
  .then((data) => {
    data.map((rest) => {
      menuList.innerHTML += `
      <article class="post-item" tabindex="3">
        <img class="post-item__thumbnail" src="${rest.pictureId}" alt="" />
        <div class="post-item__content">
          <p class="post-item__rating" tabindex="3">Rating : <span class="post-item__rating__value">${rest.rating}</span></p>
          <h1 class="post-item__title" tabindex="3">${rest.name}</h1>
          <p class="post-item__description" tabindex="3">${rest.description}</p>
        </div>
      </article>
    `;
    });
  });
