Feature('Liking Restaurant');

Scenario('test something', ({ I }) => {
  I.amOnPage('/#/favourite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.post-item__title a');
  I.click(locate('.post-item__title a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favourite');
  I.seeElement('.post-item');
});