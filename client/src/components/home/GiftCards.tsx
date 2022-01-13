import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GiftCardsQuery } from '../../generated/types';
import { PhoneIcon } from '../icons/PhoneIcon';

export const GiftCards: React.FC = () => {
   const { sanityHome, sanityInfo } = useStaticQuery<GiftCardsQuery>(query);

   return (
      <section id="gift-cards" className="bg-gray-200 py-12 px-6 font-body flex flex-col gap-3 m-scroll">
         <div>
            <h2 className="text-hosers-red font-bold text-lg">{sanityHome.giftCards.name}</h2>
            <span className="text-hosers-gray font-bold text-2xl">{sanityHome.giftCards.title}</span>
         </div>
         <p className="text-hosers-gray text-lg">{sanityHome.giftCards.description}</p>
         <a className="btn-red" href={`tel:+1${sanityInfo.phoneNumber}`}>
            <span>Phone Us</span>
            <PhoneIcon className="w-5 h-5" />
         </a>
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
