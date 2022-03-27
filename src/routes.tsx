import { Suspense, lazy } from 'react';
import type { PartialRouteObject } from 'react-router';
import LoadingScreen from 'src/components/LoadingScreen';

const Loadable = (Component) => (props) => (
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
);
