import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Page } from '../core/Page';
import { ServiceItem } from './ServiceItem';
import { Meta } from '../util/Meta';
import { Heading } from '../util/Heading';
import { ServicesPageQuery } from '../../generated/types';

export const ServicesPage: React.FC = () => {
   const { allSanityService } = useStaticQuery<ServicesPageQuery>(query);

   return (
      <Page className="p-6 pb-12">
         <Meta title="Services | Hosers Car Wash" metaDescription="View all services at Hosers Car Wash, a locally owned car wash chain in Belleville area" />
         <Heading border="border-hosers-blue">
            <h1 className="text-3xl font-bold">Services</h1>
         </Heading>
         <div className="flex flex-col gap-6">
            {allSanityService.nodes.map((service) => (
               <ServiceItem key={service.id} {...service} />
            ))}
         </div>
      </Page>
   );
};

const query = graphql`
   query ServicesPage {
      allSanityService {
         nodes {
            id
            slug {
               current
            }
            name
            description
            icon {
               alt
               image {
                  asset {
                     gatsbyImageData(fit: FILL, placeholder: BLURRED)
                  }
               }
            }
         }
      }
   }
`;
