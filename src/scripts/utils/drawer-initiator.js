const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;

// const hamburgerButton = document.getElementById('hamburger');
// const drawerElement = document.getElementById('drawer');
// const mainElement = document.querySelector('main');
// const back = document.getElementById('back');

// hamburgerButton.addEventListener('click', (event) => {
//   drawerElement.classList.toggle('open');
//   event.stopPropagation();
// });

// mainElement.addEventListener('click', (event) => {
//   drawerElement.classList.remove('open');
//   event.stopPropagation();
// });

// back.addEventListener('click', (event) => {
//   drawerElement.classList.remove('open');
//   event.stopPropagation();
// });
