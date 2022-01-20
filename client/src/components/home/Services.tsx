import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ServicesQuery } from '../../generated/types';
import { ServiceItem } from '../services/ServiceItem';

export const Services: React.FC = () => {
   const { sanityHome, serviceIcons, highlightedServices } = useStaticQuery<ServicesQuery>(query);

   return (
      <section id="services" className="py-12 md:py-16 lg:py-24 px-6 font-body flex justify-center m-scroll">
         <div className="w-full max-w-3xl flex flex-col gap-6 md:pr-12">
            <div>
               <h2 className="text-hosers-blue heading-2">{sanityHome.services.name}</h2>
               <span className="text-hosers-gray heading-1">{sanityHome.services.title}</span>
            </div>
            <ul className="flex gap-2">
               {serviceIcons.nodes.map(({ id, icon }) => (
                  <li key={id} className="w-10 h-10">
                     <GatsbyImage image={icon.image.asset.gatsbyImageData} alt={icon.alt} />
                  </li>
               ))}
            </ul>
            <Link className="btn-blue" to="/services">
               View All Services
            </Link>
            <div className="flex flex-col gap-4 border-t lg:mt-4 lg:gap-6">
               {highlightedServices.nodes.map((service) => (
                  <ServiceItem key={service.id} {...service} />
               ))}
            </div>
         </div>
      </section>
   );
};

const query = graphql`
   query Services {
      sanityHome {
         services {
            name
            title
         }
      }
      serviceIcons: allSanityService(filter: { isHighlighted: { eq: false } }) {
         nodes {
            id
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
      highlightedServices: allSanityService(filter: { isHighlighted: { eq: true } }) {
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
