import type { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import HomeHero from 'src/components/HomeHero';

const Home: FC = () => {

  return (
    <>
      <Helmet>
        <title>JRTEC S.A.S.</title>
      </Helmet>
      <div>
        <HomeHero />
      </div>
    </>
  );
};

export default Home;
