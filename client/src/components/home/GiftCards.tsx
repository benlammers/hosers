import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GiftCardsQuery } from '../../generated/types';
import { PhoneIcon } from '../icons/PhoneIcon';
import { StaticImage } from 'gatsby-plugin-image';
import { Wrapper } from '../util/Wrapper';

export const GiftCards: React.FC = () => {
   const { sanityHome, sanityInfo } = useStaticQuery<GiftCardsQuery>(query);

   return (
      <section id="gift-cards" className="bg-gray-200 py-6 md:py-16 lg:py-24 m-scroll">
         <Wrapper className="grid gap-3 grid-rows-[max-content_max-content_max-content] md:gap-x-12 md:pr-8">
            <div>
               <h2 className="text-hosers-red heading-2">{sanityHome.giftCards.name}</h2>
               <span className="text-hosers-gray heading-1">{sanityHome.giftCards.title}</span>
            </div>
            <div className="grid gap-3 grid-cols-[1fr_max-content]">
               <p className="text-hosers-gray text-lg">{sanityHome.giftCards.description}</p>
               <StaticImage src="../../images/giftcards.png" alt="Two Hosers gift cards" className="w-28 h-20 xs:w-36 sm:hidden" />
            </div>
            <a className="btn-red mt-2 md:mt-4" href={`tel:+1${sanityInfo.phoneNumber}`}>
               <span>Phone Us</span>
               <PhoneIcon className="w-5 h-5" />
            </a>
            <StaticImage src="../../images/giftcards.png" alt="Two Hosers gift cards" className="w-64 hidden sm:block col-start-2 row-span-full" />
         </Wrapper>
      </section>
   );
};

const query = graphql`
   query GiftCards {
      sanityHome {
         giftCards {
            name
            title
            description
         }
      }
      sanityInfo {
         phoneNumber
      }
   }
`;
