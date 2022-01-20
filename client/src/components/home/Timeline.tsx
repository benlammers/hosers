import React from 'react';
import dayjs from 'dayjs';
import { graphql, useStaticQuery } from 'gatsby';
import { TimelineQuery } from '../../generated/types';
import { GatsbyImage } from 'gatsby-plugin-image';

export const Timeline: React.FC = () => {
   const { sanityHome, allSanityTimelineItem } = useStaticQuery<TimelineQuery>(query);

   return (
      <section id="timeline" className="bg-gray-200 py-12 md:py-16 lg:py-24 px-6 font-body flex justify-center m-scroll">
         <div className="w-full max-w-3xl flex flex-col gap-3 md:gap-6 md:pr-12">
            <div>
               <h2 className="text-hosers-red heading-2">{sanityHome.timeline.name}</h2>
               <span className="text-hosers-gray heading-1">{sanityHome.timeline.title}</span>
            </div>
            <div>
               {allSanityTimelineItem.nodes.map((item) => (
                  <div key={item.id} className="text-lg grid grid-cols-[1fr_max-content_max-content] gap-3 md:gap-6">
                     <div className="bg-white shadow-md grid rounded-md p-3 md:p-5 my-2 md:my-3">
                        <h3 className="font-bold md:text-lg">{item.title}</h3>
                        <p className="text-base md:text-lg">{item.description}</p>
                     </div>
                     <div className="relative flex items-center">
                        <div className="absolute left-1/2 -translate-x-1/2 h-full w-[2px] bg-gray-300" />
                        <div className="h-10 w-10 md:h-14 md:w-14 bg-white shadow-md rounded-full p-1.5 md:p-3 z-10">
                           <GatsbyImage className="h-full w-full" image={item.icon.image.asset.gatsbyImageData} alt={item.icon.alt} />
                        </div>
                     </div>
                     <span className="flex items-center">{dayjs(item.date).format('YYYY')}</span>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

const query = graphql`
   query Timeline {
      sanityHome {
         timeline {
            name
            title
         }
      }
      allSanityTimelineItem(sort: { fields: date, order: ASC }) {
         nodes {
            id
            date(locale: "en-CA")
            description
            title
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
