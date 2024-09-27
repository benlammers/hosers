import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import { Page } from '../core/Page';
import { LocationPageQuery } from '../../generated/types';
import { ChevronLeftIcon } from '../icons/ChevronLeftIcon';
import { Heading } from '../util/Heading';
import { Meta } from '../util/Meta';
import { LocationIcon } from '../icons/LocationIcon';
import { ClockIcon } from '../icons/ClockIcon';
import { DirectionIcon } from '../icons/DirectionIcon';
import { ImageCarousel } from '../util/ImageCarousel';
import { ServiceItem } from '../services/ServiceItem';
import { LocationItem } from '../locations/LocationItem';
import { Map } from '../util/Map';
import { Wrapper } from '../util/Wrapper';

const Location: React.FC<PageProps<LocationPageQuery>> = ({ data }) => {
   const { location, otherLocations } = data;
   const directionUrl = `https://www.google.com/maps/dir/?api=1&travelmode=driving&destination=${location.address.replace(' ', '+')}`;

   return (
      <Page className="flex flex-col gap-3">
         <Meta title={`${location.name} | Hosers Car Wash`} metaDescription={location.metaDescription} />
         <Wrapper className="flex flex-col gap-6">
            <Link className="btn-text-red" to="/locations">
               <ChevronLeftIcon className="w-5 h-5" />
               <span>View All Locations</span>
            </Link>
            <Heading border="border-hosers-red">
               <h1 className="text-3xl font-bold">{location.name}</h1>
            </Heading>
            <div className="flex flex-col gap-3">
               <div className="flex gap-2 text-lg items-center">
                  <LocationIcon className="w-5 h-5" />
                  {location.address}
               </div>
               <div className="flex gap-2 text-lg items-center">
                  <ClockIcon className="w-5 h-5" />
                  Open 24 hours
               </div>
            </div>
            <a className="btn-red" href={directionUrl}>
               <span>Get Directions</span>
               <DirectionIcon className="w-5 h-5" />
            </a>
         </Wrapper>
         {/* <ImageCarousel images={location.images} /> */}
         <Wrapper className="pb-16">
            <Heading border="border-hosers-blue">
               <h2 className="text-3xl font-bold">Services at Location</h2>
            </Heading>
            <div className="flex flex-col gap-6">
               {location.services.map((service) => (
                  <ServiceItem key={service.service.id} {...service.service} amount={service.amount} />
               ))}
            </div>
         </Wrapper>
         {/* <Map locations={[location]} /> */}
         <Wrapper className="pb-16">
            <Heading border="border-hosers-red">
               <h2 className="text-3xl font-bold">Other Locations</h2>
            </Heading>
            <div className="flex flex-col gap-6">
               {otherLocations.nodes.map((location) => (
                  <LocationItem key={location.id} {...location} />
               ))}
            </div>
         </Wrapper>
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
         geopoint: location {
            lat
            lng
         }
         services {
            amount
            service {
               id
               name
               description
               slug {
                  current
               }
               icon {
                  image {
                     asset {
                        gatsbyImageData(fit: FILL, placeholder: BLURRED)
                     }
                  }
                  alt
               }
            }
         }
      }
      otherLocations: allSanityLocation(limit: 3, filter: { id: { ne: $id } }) {
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
