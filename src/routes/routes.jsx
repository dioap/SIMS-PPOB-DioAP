import LoginPage from '../pages/login';
import RegisterPage from '../pages/register';
import LandingPage from '../pages/landing';

const routes = [
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
];

export default routes;
