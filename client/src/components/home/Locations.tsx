import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { LocationsQuery } from '../../generated/types';
import { Map } from '../util/Map';
import { Wrapper } from '../util/Wrapper';

export const Locations: React.FC = () => {
   const { sanityHome, locations } = useStaticQuery<LocationsQuery>(query);

   return (
      <section id="locations" className="flex flex-col gap-4 md:gap-6 bg-white">
         <Wrapper className="pb-0 md:pt-12 lg:pt-16">
            <h2 className="text-hosers-red heading-2">{sanityHome.locations.name}</h2>
            <span className="text-hosers-gray heading-1">{sanityHome.locations.title}</span>
         </Wrapper>
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
