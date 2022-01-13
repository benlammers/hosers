import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ServicesQuery } from '../../generated/types';
import { ChevronRightIcon } from '../icons/ChevronRightIcon';

export const Services: React.FC = () => {
   const { sanityHome, serviceIcons, highlightedServices } = useStaticQuery<ServicesQuery>(query);

   return (
      <section id="services" className="py-12 px-6 font-body flex flex-col gap-6 m-scroll">
         <div>
            <h2 className="text-hosers-blue font-bold text-lg">{sanityHome.services.name}</h2>
            <span className="text-hosers-gray font-bold text-2xl">{sanityHome.services.title}</span>
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
         <div className="flex flex-col gap-4">
            {highlightedServices.nodes.map(({ id, name, description, slug, icon }) => (
               <article key={id} className="flex flex-col gap-2 font-body border-t pt-6">
                  <div className="w-10 h-10">
                     <GatsbyImage image={icon.image.asset.gatsbyImageData} alt={icon.alt} />
                  </div>
                  <h3 className="text-hosers-gray font-bold text-2xl">{name}</h3>
                  <p className="text-hosers-gray text-lg">{description}</p>
                  <Link className="btn-text-blue" to={`/service/${slug.current}`}>
                     <span>Learn More</span>
                     <ChevronRightIcon className="w-5 h-5" />
                  </Link>
               </article>
            ))}
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
