import React from 'react';
import { Link } from 'gatsby';
import { ChevronRightIcon } from '../icons/ChevronRightIcon';
import { DirectionIcon } from '../icons/DirectionIcon';

interface Props {
   name: string;
   address: string;
   slug: {
      __typename?: 'SanitySlug';
      current: string;
   };
   geopoint: {
      lat: number;
      lng: number;
   };
}

export const LocationItem: React.FC<Props> = ({ name, address, slug, geopoint }) => {
   const directionUrl = `https://www.google.com/maps/dir/?api=1&travelmode=driving&destination=${address.replace(' ', '+')}`;

   return (
      <article className="flex flex-col gap-2 font-body border-t first:border-0 pt-6">
         <h3 className="text-hosers-gray font-bold text-2xl">{name}</h3>
         <p className="text-hosers-gray text-lg">{address}</p>
         <div className="flex gap-3">
            <Link className="btn-text-red" to={`/location/${slug.current}`}>
               <span>View Location</span>
               <ChevronRightIcon className="w-5 h-5" />
            </Link>
            <a className="btn-red" href={directionUrl}>
               <span>Get Directions</span>
               <DirectionIcon className="w-5 h-5" />
            </a>
         </div>
      </article>
   );
};
