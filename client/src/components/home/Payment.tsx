import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { PaymentQuery } from '../../generated/types';
import { ExternalIcon } from '../icons/ExternalIcon';
import { Nayax } from '../util/Nayax';
import { Wrapper } from '../util/Wrapper';

export const Payment: React.FC = () => {
   const { sanityHome, sanityInfo } = useStaticQuery<PaymentQuery>(query);

   return (
      <section id="payment" className="py-6 md:py-16 lg:py-24 bg-white">
         <Wrapper className="grid gap-3 xs:gap-x-6 grid-rows-[max-content_max-content_max-content] grid-cols-[1fr_max-content] md:gap-x-12 xs:pr-8">
            <div className="col-span-2 xs:col-span-1 row-start-1 col-start-1">
               <h2 className="text-hosers-blue heading-2">{sanityHome.payment.name}</h2>
               <span className="text-hosers-gray heading-1">{sanityHome.payment.title}</span>
            </div>
            <p className="text-hosers-gray text-lg col-start-1 row-start-2">{sanityHome.payment.description}</p>
            <Nayax className="w-28 sm:w-40 mt-4 col-start-2 row-start-2 xs:row-span-full xs:row-start-1" />
            <a className="btn-blue xs:mt-4 col-span-2 xs:col-span-1 col-start-1 row-start-3" href={sanityInfo.erecieptLink}>
               <span>Get E-Receipts</span>
               <ExternalIcon className="w-5 h-5" />
            </a>
         </Wrapper>
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
