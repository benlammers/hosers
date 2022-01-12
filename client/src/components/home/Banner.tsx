import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { BannerQuery } from '../../generated/types';
import { HotspotImage } from '../util/HotspotImage';
import { GatsbyImage } from 'gatsby-plugin-image';

export const Banner: React.FC = () => {
   const { sanityHome, sanityInfo } = useStaticQuery<BannerQuery>(query);

   return (
      <div className="h-banner relative flex flex-col md:flex-row justify-end items-center md:justify-center md:items-end pb-12 gap-4 md:gap-8">
         <div className="absolute opacity-75 inset-0 h-full w-full -z-20">
            <HotspotImage image={sanityHome.bannerImage.image} alt={sanityHome.bannerImage.alt} />
         </div>
         <div className="w-4/5 max-w-lg absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/3 -z-10">
            <GatsbyImage image={sanityInfo.logo.image.asset.gatsbyImageData} alt={sanityInfo.logo.alt} />
         </div>
         <Link className="btn-blue" to="/services">
            View All Services
         </Link>
         <Link className="btn-red" to="/locations">
            View All Locations
         </Link>
      </div>
   );
};

const query = graphql`
   query Banner {
      sanityHome {
         bannerImage: image {
            alt
            image {
               asset {
                  gatsbyImageData(fit: FILL, placeholder: BLURRED)
               }
               hotspot {
                  x
                  y
               }
            }
         }
      }
      sanityInfo {
         logo {
            alt
            image {
               asset {
                  gatsbyImageData(fit: FILL, placeholder: BLURRED)
               }
            }
         }
      }
   }
`;
