import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { LocationsQuery } from '../../generated/types';

export const Locations: React.FC = () => {
   const { sanityHome } = useStaticQuery<LocationsQuery>(query);

   return (
      <section id="locations" className="flex flex-col gap-4 m-scroll">
         <div className="pt-6 px-6 font-body">
            <h2 className="text-hosers-red font-bold text-lg">{sanityHome.locations.name}</h2>
            <span className="text-hosers-gray font-bold text-2xl">{sanityHome.locations.title}</span>
         </div>
         <div className="bg-green-200 h-60 w-full" />
      </section>
   );
};

const query = graphql`
   query Locations {
      sanityHome {
         locations {
            title
            name
         }
      }
   }
`;
