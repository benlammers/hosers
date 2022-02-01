import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GiftCardsQuery } from '../../generated/types';
import { PhoneIcon } from '../icons/PhoneIcon';
import { StaticImage } from 'gatsby-plugin-image';
import { Wrapper } from '../util/Wrapper';

export const GiftCards: React.FC = () => {
   const { sanityHome, sanityInfo } = useStaticQuery<GiftCardsQuery>(query);

   return (
      <section id="gift-cards" className="bg-gray-200 py-6 md:py-16 lg:py-24">
         <Wrapper className="grid gap-3 xs:gap-x-6 grid-rows-[max-content_max-content_max-content] grid-cols-[1fr_max-content] md:gap-x-12 md:pr-8">
            <div className="col-span-2 sm:col-span-1 row-start-1 col-start-1">
               <h2 className="text-hosers-red heading-2">{sanityHome.giftCards.name}</h2>
               <span className="text-hosers-gray heading-1">{sanityHome.giftCards.title}</span>
            </div>
            <p className="text-hosers-gray text-lg col-start-1 row-start-2">{sanityHome.giftCards.description}</p>
            <StaticImage
               src="../../images/giftcards.png"
               alt="Two Hosers gift cards"
               className="block self-center col-start-2 row-start-2 sm:row-span-full sm:row-start-1 sm:mt-2 h-24 w-32 xs:h-32 xs:w-44 sm:h-48 sm:w-64"
            />
            <a className="btn-red sm:mt-4 col-span-2 sm:col-span-1 col-start-1 row-start-3" href={`tel:+1${sanityInfo.phoneNumber}`}>
               <span>Phone Us</span>
               <PhoneIcon className="w-5 h-5" />
            </a>
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
