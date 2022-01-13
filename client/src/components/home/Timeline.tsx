import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { TimelineQuery } from '../../generated/types';

export const Timeline: React.FC = () => {
   const { sanityHome, allSanityTimelineItem } = useStaticQuery<TimelineQuery>(query);

   return (
      <section id="timeline" className="bg-gray-200 py-12 px-6 font-body flex flex-col gap-3 m-scroll">
         <div>
            <h2 className="text-hosers-red font-bold text-lg">{sanityHome.timeline.name}</h2>
            <span className="text-hosers-gray font-bold text-2xl">{sanityHome.timeline.title}</span>
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
      allSanityTimelineItem {
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
