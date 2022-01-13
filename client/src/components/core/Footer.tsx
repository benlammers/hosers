import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FooterQuery } from '../../generated/types';
import { LocationIcon } from '../icons/LocationIcon';
import { PhoneIcon } from '../icons/PhoneIcon';
import { MailIcon } from '../icons/MailIcon';
import { FacebookIcon } from '../icons/FacebookIcon';
import { InstagramIcon } from '../icons/InstagramIcon';

export const Footer: React.FC = () => {
   const { sanityInfo: data } = useStaticQuery<FooterQuery>(query);

   return (
      <footer className="relative">
         <div className="flex flex-col gap-12 p-12 items-center lg:grid lg:grid-cols-[max-content_1fr_max-content] lg:grid-rows-[max-content_max-content] lg:gap-8 font-body bg-hosers-blue text-white transition-colors">
            <div className="w-full xs:w-64 lg:w-56">
               <GatsbyImage image={data.logo.image.asset.gatsbyImageData} alt={data.logo.alt} />
            </div>
            <div className="hidden row-span-2 lg:grid gap-2 justify-self-center">
               <span className="text-xl font-bold">Information</span>
               <ul className="grid grid-cols-3 text-lg gap-y-2 gap-x-8 xl:gap-x-[12vw]">
                  <li>Home</li>
                  <li>Get E-Receipts</li>
                  <li>History</li>
                  <li>Services</li>
                  <li>Gift Cards</li>
                  <li>Contact Us</li>
                  <li>Locations</li>
               </ul>
            </div>
            <div className="flex flex-col w-[15.5rem] xs:w-full sm:items-center lg:w-[15.5rem] lg:items-start lg:row-span-2 gap-3 text-lg">
               <span className="hidden lg:block text-xl font-bold">Contact</span>
               <span className="flex gap-2">
                  <LocationIcon className="w-9 h-min xs:w-[unset] xs:h-5 lg:h-min lg:w-9 mt-1" />
                  Office: {data.address}
               </span>
               <a className="flex gap-2 hover:text-gray-200" href={`tel:+1${data.phoneNumber}`}>
                  <PhoneIcon className="h-5 mt-1" />
                  Phone: {data.phoneNumber}
               </a>
               <a className="flex gap-2 hover:text-gray-200" href={`mailto:${data.email}`}>
                  <MailIcon className="h-5 mt-1" />
                  Email: {data.email}
               </a>
            </div>
            <div className="flex gap-6 lg:justify-self-center">
               <a href={data.facebookLink} target="_blank">
                  <FacebookIcon className="h-8 hover:text-gray-200 transition-colors" />
               </a>
               <a href={data.instagramLink} target="_blank">
                  <InstagramIcon className="h-8 hover:text-gray-200 transition-colors" />
               </a>
            </div>
         </div>
         <div className="flex flex-col md:flex-row gap-2 md:gap-4 p-4 justify-center items-center bg-hosers-gray text-white">
            <span>&copy; {new Date().getFullYear()} Hosers Car Wash</span>
            <span className="text-gray-400">
               Site developed by{' '}
               <a className="cursor-pointer underline underline-offset-4 hover:text-gray-100" href="https://www.benlammers.dev/" target="_blank">
                  Ben Lammers
               </a>
            </span>
            <Link className="cursor-pointer underline underline-offset-4 hover:text-gray-100 text-sm md:absolute bottom-0 right-0 p-4" to="/credits">
               Credits
            </Link>
         </div>
      </footer>
   );
};

const query = graphql`
   query Footer {
      sanityInfo {
         email
         address
         phoneNumber
         facebookLink
         erecieptLink
         instagramLink
         logo {
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
