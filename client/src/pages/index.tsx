import React from 'react';
import { Helmet } from 'react-helmet';
import { Page } from '../components/core/Page';
import { Banner } from '../components/home/Banner';

const Home: React.FC = () => {
   return (
      <Page>
         <Helmet htmlAttributes={{ lang: 'en' }}>
            <title>Hosers Car Wash</title>
            <meta name="description" content="Hosers Car Wash is a locally owned car wash chain in Belleville area" />
            <meta charSet="utf-8" />
         </Helmet>
         <Banner />
      </Page>
   );
};

export default Home;
