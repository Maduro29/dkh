import Register from '~/pages/InPage/Register';
import Home from '~/pages/Home/Home';
const publicRoutes = [
  { path: '/home', component: Home },
  { path: '/register', component: Register },
];

//only Login to use this routes
const privateRoutes = [];
export { privateRoutes, publicRoutes };
