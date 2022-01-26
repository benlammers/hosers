import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Page } from '../core/Page';
import { ServiceItem } from './ServiceItem';
import { Meta } from '../util/Meta';
import { Heading } from '../util/Heading';
import { ServicesPageQuery } from '../../generated/types';
import { Wrapper } from '../util/Wrapper';

export const ServicesPage: React.FC = () => {
   const { allSanityService } = useStaticQuery<ServicesPageQuery>(query);

   return (
      <Page>
         <Wrapper className="p-6 pt-12 pb-16 md:pt-16 md:pb-24 lg:pb-32 flex flex-col">
            <Meta
               title="Services | Hosers Car Wash"
               metaDescription="View all services at Hosers Car Wash, a locally owned car wash chain in Belleville area"
            />
            <Heading border="border-hosers-blue">
               <h1 className="text-3xl font-bold">Services</h1>
            </Heading>
            <div className="flex flex-col gap-6">
               {allSanityService.nodes.map((service) => (
                  <ServiceItem key={service.id} {...service} />
               ))}
            </div>
         </Wrapper>
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
