import React, { useState } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { HeaderQuery } from '../../generated/types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { MenuIcon } from '../icons/MenuIcon';
import { Drawer } from './Drawer';

export type Path = 'home' | 'locations' | 'services' | 'giftCards' | 'payment' | 'contactUs';

type PathData = {
   path: string;
   name: string;
};

export const PathData: Record<Path, PathData> = {
   home: {
      path: '/',
      name: 'Home'
   },
   locations: {
      path: '/locations',
      name: 'Locations'
   },
   services: {
      path: '/services',
      name: 'Services'
   },
   giftCards: {
      path: '/#gift-cards',
      name: 'Gift Cards'
   },
   payment: {
      path: '/#payment',
      name: 'Debit & Credit'
   },
   contactUs: {
      path: '/contact-us',
      name: 'Contact Us'
   }
};

export const Header: React.FC = () => {
   const { sanityInfo: data } = useStaticQuery<HeaderQuery>(query);
   const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

   const openDrawer = () => setIsDrawerOpen(true);
   const closeDrawer = () => setIsDrawerOpen(false);

   return (
      <header className="bg-hosers-blue w-full px-3 shadow-lg">
         <div className="max-w-5xl h-header mx-auto flex justify-between items-center">
            <Link className="w-36" to="/">
               <GatsbyImage image={data.logo.image.asset.gatsbyImageData} alt={data.logo.alt} />
            </Link>
            <ul className="hidden lg:flex gap-6 text-white items-center text-lg font-body font-normal">
               {Object.keys(PathData).map((path) => (
                  <li key={path}>
                     <Link to={PathData[path].path}>{PathData[path].name}</Link>
                  </li>
               ))}
               <li>
                  <a className="btn-red rounded-sm py-1 gap-0 font-normal" href={data.erecieptLink}>
                     Get E-Reciepts
                  </a>
               </li>
            </ul>
            <button className="h-8 w-8 text-white lg:hidden" onClick={openDrawer} aria-label="Open drawer">
               <MenuIcon />
            </button>
            <Drawer isOpen={isDrawerOpen} close={closeDrawer} />
         </div>
      </header>
   );
};

const query = graphql`
   query Header {
      sanityInfo {
         erecieptLink
         logo: logoSmall {
            alt
            image {
               asset {
                  gatsbyImageData(fit: FILL, placeholder: BLURRED)
               }
            }
         }
      }
   }
`;
