const assert = require('assert');

Feature('Liking Restaurants');

Before(({I}) => {
  I.amOnPage('/#/favourite');
});

Scenario('showing empty favourite restaurants', ({I}) => {
  I.seeElement('.content__heading');
  // I.seeElement('.query'); // membuat test menjadi gagal
  I.see('Tidak ada resto untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({I}) => {
  I.see('Tidak ada resto untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');
  // … kita akan mengisi uji coba berikutnya …

  I.seeElement('.restaurant__title .title_link');
  
  const firstResto = locate('.restaurant__title .title_link').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/');
  I.seeElement('.post-item');
  const likedRestoTitle = await I.grabTextFrom('.restaurant__title');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('unliking one restaurant', async ({I}) => {
  I.see('Tidak ada resto untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');
  // … kita akan mengisi uji coba berikutnya …

  I.seeElement('.restaurant__title .title_link');
  
  const firstResto = locate('.restaurant__title .title_link').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/');
  I.seeElement('.post-item');
  const likedRestoTitle = await I.grabTextFrom('.restaurant__title');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);

  I.amOnPage('/#/favourite');
  const firstFavResto = locate('.restaurant__title .title_link').first();
  I.click(firstFavResto);
  
  I.waitForElement('#likeButton', 10);
  I.click('#likeButton');

  I.amOnPage('/#/favourite');
  I.see('Tidak ada resto untuk ditampilkan', '.restaurant-item__not__found');
});