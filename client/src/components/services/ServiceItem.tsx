import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ChevronRightIcon } from '../icons/ChevronRightIcon';

interface Props {
   name: string;
   description: string;
   slug: {
      current: string;
   };
   icon: {
      image: {
         __typename?: 'SanityImage';
         asset: {
            __typename?: 'SanityImageAsset';
            gatsbyImageData: any;
         };
      };
      alt: string;
   };
   amount?: number;
}

export const ServiceItem: React.FC<Props> = ({ name, description, icon, slug, amount }) => {
   return (
      <article className="flex flex-col gap-2 font-body border-t first:border-0 pt-6">
         <div className="w-10 h-10">
            <GatsbyImage image={icon.image.asset.gatsbyImageData} alt={icon.alt} />
         </div>
         <div className="flex justify-between items-center">
            <h3 className="text-hosers-gray heading-1">{name}</h3>
            {amount && <span className="h-8 w-8 font-bold text-lg rounded-sm bg-gray-200 flex justify-center items-center">x{amount}</span>}
         </div>
         <p className="text-hosers-gray text-lg">{description}</p>
         <Link className="btn-text-blue" to={`/service/${slug.current}`}>
            <span>Learn More</span>
            <ChevronRightIcon className="w-5 h-5" />
         </Link>
      </article>
   );
};
