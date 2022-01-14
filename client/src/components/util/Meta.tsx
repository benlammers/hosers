import React from 'react';
import { Helmet } from 'react-helmet';

interface Props {
   title: string;
   metaDescription: string;
}

export const Meta: React.FC<Props> = ({ title, metaDescription }) => {
   return (
      <Helmet htmlAttributes={{ lang: 'en' }}>
         <title>{title}</title>
         <meta name="description" content={metaDescription} />
         <meta charSet="utf-8" />
      </Helmet>
   );
};
