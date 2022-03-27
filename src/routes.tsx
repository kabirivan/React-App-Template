import { Suspense, lazy } from 'react';
import type { RouteProps } from 'react-router';
import LoadingScreen from 'src/components/LoadingScreen';

const Loadable = (Component) => (props) => (
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
);

const Login = Loadable(lazy(() => import('src/pages/authentication/Login')));
