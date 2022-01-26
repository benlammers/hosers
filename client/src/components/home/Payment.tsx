import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { PaymentQuery } from '../../generated/types';
import { ExternalIcon } from '../icons/ExternalIcon';
import { Nayax } from '../util/Nayax';
import { Wrapper } from '../util/Wrapper';

export const Payment: React.FC = () => {
   const { sanityHome, sanityInfo } = useStaticQuery<PaymentQuery>(query);

   return (
      <section id="payment" className="py-6 md:py-16 lg:py-24 m-scroll bg-white">
         <Wrapper className="grid gap-3 grid-rows-[max-content_max-content_max-content] md:pr-12">
            <div>
               <h2 className="text-hosers-blue heading-2">{sanityHome.payment.name}</h2>
               <span className="text-hosers-gray heading-1">{sanityHome.payment.title}</span>
            </div>
            <div className="grid gap-2 grid-cols-[1fr_max-content]">
               <p className="text-hosers-gray text-lg">{sanityHome.payment.description}</p>
               <Nayax className="w-24 sm:hidden" />
            </div>
            <a className="btn-blue md:mt-4" href={sanityInfo.erecieptLink}>
               <span>Get E-Receipts</span>
               <ExternalIcon className="w-5 h-5" />
            </a>
            <Nayax className="w-44 hidden sm:block col-start-2 row-span-full" />
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
