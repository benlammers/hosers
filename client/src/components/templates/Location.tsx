import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import { Page } from '../core/Page';
import { LocationPageQuery } from '../../generated/types';
import { ChevronLeftIcon } from '../icons/ChevronLeftIcon';
import { Heading } from '../util/Heading';
import { Meta } from '../util/Meta';

const Location: React.FC<PageProps<LocationPageQuery>> = ({ data }) => {
   const { location } = data;

   return (
      <Page className="flex flex-col gap-3">
         <Meta title={`${location.name} | Hosers Car Wash`} metaDescription={location.metaDescription} />
         <div className="p-6 flex flex-col gap-3">
            <Link className="btn-text-red" to="/locations">
               <ChevronLeftIcon className="w-5 h-5" />
               <span>View All Locations</span>
            </Link>
            <Heading border="border-hosers-red">
               <h1 className="text-3xl font-bold">{location.name}</h1>
            </Heading>
         </div>
      </Page>
   );
};

export default Location;

export const query = graphql`
   query LocationPage($id: String!) {
      location: sanityLocation(id: { eq: $id }) {
         id
         name
         address
         metaDescription
      }
   }
`;
