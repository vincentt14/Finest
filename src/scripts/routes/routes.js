import RestaurantList from '../views/pages/restaurantList';
import TheMealMenuList from '../views/pages/theMealMenuList';
import Detail from '../views/pages/detail';

const routes = {
  '/': RestaurantList, // default page
  '/restaurantList': RestaurantList,
  '/theMealMenuList': TheMealMenuList,
  '/detail/:id': Detail,
};

export default routes;
