import { Suspense, lazy } from 'react';
import type { RouteObject } from 'react-router';
import LoadingScreen from 'src/components/LoadingScreen';
import MainLayout from 'src/components/MainLayout';

const Loadable = (Component) => (props) => (
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
);

// Authentication pages
const Login = Loadable(lazy(() => import('src/pages/authentication/Login')));

// Pages
const Home = Loadable(lazy(() => import('src/pages/Home')));
const NotFound = Loadable(lazy(() => import('src/pages/NotFound')));
const Overview = Loadable(lazy(() => import('src/pages/Overview')));

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
  },
  {
    path: '*',
    element: <MainLayout />,
    children: [
      {
        path: 'overview',
        element: <Overview />
      },
      {
        path: '404',
        element: <NotFound />
      },
      {
        path: '*',
        element: <NotFound />
      },
    ]
  }

];

export default routes;
