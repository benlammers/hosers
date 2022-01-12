import React, { useState } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { HeaderQuery } from '../../generated/types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { MenuIcon } from '../icons/MenuIcon';
import { Drawer } from './Drawer';

export const Header: React.FC = () => {
   const { sanityInfo: data } = useStaticQuery<HeaderQuery>(query);
   const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

   const openDrawer = () => setIsDrawerOpen(true);
   const closeDrawer = () => setIsDrawerOpen(false);

   return (
      <header className="bg-hosers-blue h-header px-3 flex justify-between items-center">
         <Link className="w-36" to="/">
            <GatsbyImage image={data.logo.image.asset.gatsbyImageData} alt={data.logo.alt} />
         </Link>
         <ul className="hidden lg:flex gap-12 text-white items-center text-lg font-body font-bold">
            <li>Services</li>
            <li>Locations</li>
            <li>History</li>
            <li>Contact Us</li>
            <li>
               <a className="btn-red rounded-sm py-1 gap-0 font-normal" href={data.erecieptLink} target="_blank">
                  Get E-Reciepts
               </a>
            </li>
         </ul>
         <button className="h-8 w-8 text-white lg:hidden" onClick={openDrawer} aria-label="Open drawer">
            <MenuIcon />
         </button>
         <Drawer isOpen={isDrawerOpen} close={closeDrawer} />
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
