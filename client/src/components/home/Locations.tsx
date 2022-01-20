import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { LocationsQuery } from '../../generated/types';
import { Map } from '../util/Map';

export const Locations: React.FC = () => {
   const { sanityHome, locations } = useStaticQuery<LocationsQuery>(query);

   return (
      <section id="locations" className="flex flex-col gap-4 md:gap-6 m-scroll bg-white">
         <div className="pt-6 md:pt-12 lg:pt-16 px-6 font-body max-w-4xl self-center w-full">
            <h2 className="text-hosers-red heading-2">{sanityHome.locations.name}</h2>
            <span className="text-hosers-gray heading-1">{sanityHome.locations.title}</span>
         </div>
         <Map locations={locations.nodes} />
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
      locations: allSanityLocation {
         nodes {
            id
            name
            address
            geopoint: location {
               lat
               lng
            }
            slug {
               current
            }
         }
      }
   }
`;
