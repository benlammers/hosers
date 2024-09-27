import React from 'react';
import { graphql, navigate, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { DrawerQuery } from '../../generated/types';
import { CrossIcon } from '../icons/CrossIcon';
import { ExternalIcon } from '../icons/ExternalIcon';
import { Path, PathData } from './Header';

interface Props {
   isOpen?: boolean;
   close?: () => void;
}

export const Drawer: React.FC<Props> = ({ isOpen, close }) => {
   const { sanityInfo: data } = useStaticQuery<DrawerQuery>(query);

   const handleNavigation = (path: Path) => {
      navigate(PathData[path].path);
      close?.();
   };

   return (
      <div
         className={`fixed  ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
         } transition-transform grid lg:hidden grid-rows-[max-content_1fr] h-screen w-full inset-0 z-20 bg-white pointer-events-[all]`}
      >
         <div className="h-header px-3 flex justify-between items-center">
            <div className={`w-36 ${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
               <GatsbyImage image={data.logo.image.asset.gatsbyImageData} alt={data.logo.alt} />
            </div>
            <button onClick={close} aria-label="Close drawer" className="h-8 w-8">
               <CrossIcon />
            </button>
         </div>
         <div className="flex flex-col gap-16 justify-center items-center mb-24">
            <ul className="flex flex-col gap-6 items-center font-body text-2xl text-hosers-gray">
               {Object.keys(PathData).map((path) => (
                  <li key={path}>
                     <button className="font-bold" onClick={() => handleNavigation(path as Path)}>
                        {PathData[path].name}
                     </button>
                  </li>
               ))}
            </ul>
            <a className="btn-blue" href={data.erecieptLink} target="_blank">
               <span>Get E-Receipts</span>
               <ExternalIcon className="h-6 w-6" />
            </a>
         </div>
      </div>
   );
};

const query = graphql`
   query Drawer {
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
