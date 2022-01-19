import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { LocationsQuery } from '../../generated/types';
import { Map } from '../util/Map';

export const Locations: React.FC = () => {
   const { sanityHome, locations } = useStaticQuery<LocationsQuery>(query);

   return (
      <section id="locations" className="flex flex-col gap-4 m-scroll">
         <div className="pt-6 px-6 font-body">
            <h2 className="text-hosers-red font-bold text-lg">{sanityHome.locations.name}</h2>
            <span className="text-hosers-gray font-bold text-2xl">{sanityHome.locations.title}</span>
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
