import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { LocationsPageQuery } from '../../generated/types';
import { Page } from '../core/Page';
import { Meta } from '../util/Meta';
import { Heading } from '../util/Heading';
import { LocationItem } from './LocationItem';
import { Wrapper } from '../util/Wrapper';

export const LocationsPage: React.FC = () => {
   const { allSanityLocation } = useStaticQuery<LocationsPageQuery>(query);

   return (
      <Page>
         <Wrapper className="p-6 pt-12 pb-16 md:pt-16 md:pb-24 lg:pb-32 flex flex-col">
            <Meta
               title="Locations | Hosers Car Wash"
               metaDescription="View all locations for Hosers Car Wash, a locally owned car wash chain in Belleville area"
            />
            <Heading border="border-hosers-red">
               <h1 className="text-3xl font-bold">Locations</h1>
            </Heading>
            <div className="flex flex-col gap-6">
               {allSanityLocation.nodes.map((location) => (
                  <LocationItem key={location.id} {...location} />
               ))}
            </div>
         </Wrapper>
      </Page>
   );
};

const query = graphql`
   query LocationsPage {
      allSanityLocation {
         nodes {
            id
            slug {
               current
            }
            name
            address
            geopoint: location {
               lat
               lng
            }
         }
      }
   }
`;
