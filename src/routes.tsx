import { Suspense, lazy } from 'react';
import type { RouteObject } from 'react-router';
import LoadingScreen from 'src/components/LoadingScreen';

const Loadable = (Component) => (props) => (
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
);

// Authentication pages
const Login = Loadable(lazy(() => import('src/pages/authentication/Login')));

// Pages
const Home = Loadable(lazy(() => import('src/pages/Home')));

const routes: RouteObject[] = [
  {
    path: '*',
    children: [
      {
        path: '',
        element: <Login />
      },
      {
        path: 'home',
        element: <Home />
      }
    ]
  }

];

export default routes;
