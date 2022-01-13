import React from 'react';
import { Helmet } from 'react-helmet';
import { Page } from '../core/Page';
import { Banner } from './Banner';
import { Locations } from './Locations';
import { Payment } from './Payment';
import { GiftCards } from './GiftCards';
import { Services } from './Services';
import { Timeline } from './Timeline';

export const HomePage: React.FC = () => {
   return (
      <Page>
         <Helmet htmlAttributes={{ lang: 'en' }}>
            <title>Hosers Car Wash</title>
            <meta name="description" content="Hosers Car Wash is a locally owned car wash chain in Belleville area" />
            <meta charSet="utf-8" />
         </Helmet>
         <Banner />
         <Locations />
         <Payment />
         <GiftCards />
         <Services />
         <Timeline />
      </Page>
   );
};
