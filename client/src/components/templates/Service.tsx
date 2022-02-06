import React from 'react';
import { graphql, PageProps, Link } from 'gatsby';
import { Page } from '../core/Page';
import { ServicePageQuery } from '../../generated/types';
import { ChevronLeftIcon } from '../icons/ChevronLeftIcon';
import { Meta } from '../util/Meta';
import { Heading } from '../util/Heading';
import { Map } from '../util/Map';
import { ServiceItem } from '../services/ServiceItem';
import { ChevronRightIcon } from '../icons/ChevronRightIcon';
import { ImageCarousel } from '../util/ImageCarousel';
import { LocationItem } from '../locations/LocationItem';
import { Wrapper } from '../util/Wrapper';

const Service: React.FC<PageProps<ServicePageQuery>> = ({ data }) => {
   const { service, otherServices, availableLocations } = data;

   return (
      <Page className="flex flex-col gap-3">
         <Meta title={`${service.name} | Hosers Car Wash`} metaDescription={service.metaDescription} />
         <Wrapper className="flex flex-col gap-3">
            <Link className="btn-text-blue" to="/services">
               <ChevronLeftIcon className="w-5 h-5" />
               <span>View All Services</span>
            </Link>
            <Heading border="border-hosers-blue">
               <h1 className="text-3xl font-bold">{service.name}</h1>
            </Heading>
            <p className="text-lg">{service.description}</p>
            <div className="mt-4">
               <Heading border="border-hosers-blue">
                  <h2 className="text-2xl font-bold">Selections</h2>
               </Heading>
               <ul className="flex flex-col divide-y">
                  {service.selections.map((selection) => (
                     <li key={selection.name} className="text-lg py-2">
                        <div className="flex justify-between font-bold mb-1">
                           <h3>{selection.name}</h3>
                           <span>
                              ${selection.price.toFixed(2)}
                              {selection.unit && `/${selection.unit}`}
                           </span>
                        </div>
                        <p>{selection.description}</p>
                     </li>
                  ))}
               </ul>
            </div>
         </Wrapper>
         <ImageCarousel images={service.images} />
         <Wrapper className="flex flex-col gap-3">
            <Heading border="border-hosers-red">
               <h2 className="text-3xl font-bold">Available Locations</h2>
            </Heading>
            <div className="flex flex-col gap-6">
               {availableLocations.nodes.map((location) => (
                  <LocationItem key={location.id} {...location} />
               ))}
            </div>
         </Wrapper>
         <Map locations={[...availableLocations.nodes]} />
         <Wrapper className="flex flex-col gap-3">
            <Heading border="border-hosers-blue">
               <h2 className="text-3xl font-bold">Other Services</h2>
            </Heading>
            <div className="flex flex-col gap-6">
               {otherServices.nodes.map((service) => (
                  <ServiceItem key={service.id} {...service} />
               ))}
            </div>
            <Link className="btn-blue self-center my-4" to="/services">
               <span>View All Services</span>
               <ChevronRightIcon className="w-5 h-5" />
            </Link>
         </Wrapper>
      </Page>
   );
};

export default Service;

export const query = graphql`
   query ServicePage($id: String!) {
      service: sanityService(id: { eq: $id }) {
         id
         name
         description
         metaDescription
         selections {
            description
            name
            price
            unit
         }
         images {
            alt
            image {
               asset {
                  gatsbyImageData(fit: FILL, placeholder: BLURRED)
               }
               hotspot {
                  y
                  x
               }
            }
         }
      }
      otherServices: allSanityService(limit: 3) {
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
      availableLocations: allSanityLocation(filter: { services: { elemMatch: { service: { id: { eq: $id } } } } }) {
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
