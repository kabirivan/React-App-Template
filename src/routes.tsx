import { Suspense, lazy } from 'react';
import type { RouteProps } from 'react-router';
import LoadingScreen from 'src/components/LoadingScreen';

const Loadable = (Component) => (props) => (
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
);

// Authentication pages
const Login = Loadable(lazy(() => import('src/pages/authentication/Login')));

const routes: RouteProps[] = [
  {
    path: 'authentication',
    children: [
      {
        path: 'login',
        element: <Login />
      }
    ]
  }

];


export default routes;
