import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { PaymentQuery } from '../../generated/types';
import { ExternalIcon } from '../icons/ExternalIcon';
import { Nayax } from '../util/Nayax';

export const Payment: React.FC = () => {
   const { sanityHome, sanityInfo } = useStaticQuery<PaymentQuery>(query);

   return (
      <section id="payment" className="py-12 px-6 font-body flex flex-col gap-3 m-scroll">
         <div>
            <h2 className="text-hosers-blue font-bold text-lg">{sanityHome.payment.name}</h2>
            <span className="text-hosers-gray font-bold text-2xl">{sanityHome.payment.title}</span>
         </div>

         <div className="grid gap-2 grid-cols-[1fr_max-content]">
            <p className="text-hosers-gray text-lg">{sanityHome.payment.description}</p>
            <Nayax className="w-24 -translate-y-4" />
         </div>
         <a className="btn-blue" href={sanityInfo.erecieptLink}>
            <span>Get E-Receipts</span>
            <ExternalIcon className="w-5 h-5" />
         </a>
      </section>
   );
};

const query = graphql`
   query Payment {
      sanityHome {
         payment {
            name
            title
            description
         }
      }
      sanityInfo {
         erecieptLink
      }
   }
`;
