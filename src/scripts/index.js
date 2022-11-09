import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.getElementById('content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

const goToContent = document.querySelector('.skip-link');
goToContent.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('harusnya ke refer');
  document.querySelector('#content').focus();
});
