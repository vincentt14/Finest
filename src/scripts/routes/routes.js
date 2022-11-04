import Home from '../views/pages/home';
import Recipe from '../views/pages/recipe';
import Favourite from '../views/pages/favourite';
import Detail from '../views/pages/detail';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/recipe': Recipe,
  '/favourite': Favourite,
  '/detail/:id': Detail,
};

export default routes;
