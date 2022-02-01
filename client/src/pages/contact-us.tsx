import * as yup from 'yup';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { graphql, useStaticQuery } from 'gatsby';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ContactUsQuery } from '../generated/types';
import { Page } from '../components/core/Page';
import { LocationIcon } from '../components/icons/LocationIcon';
import { MailIcon } from '../components/icons/MailIcon';
import { PhoneIcon } from '../components/icons/PhoneIcon';
import { Heading } from '../components/util/Heading';
import { Wrapper } from '../components/util/Wrapper';

const EMAILJS_SERVICE_ID = 'service_1jwm5rv';
const EMAILJS_TEMPLATE_ID = 'template_0qxq5mz';
const EMAILJS_USER_ID = 'user_T4XLA2b0KTNI4fPwftutz';

type FormValues = {
   email: string;
   message: string;
};

const Contact: React.FC = () => {
   const form = useRef();
   const [isSending, setIsSending] = useState<boolean>(false);
   const [isSent, setIsSent] = useState<boolean>(false);

   const { sanityInfo: data } = useStaticQuery<ContactUsQuery>(query);
   const {
      register,
      handleSubmit,
      formState: { errors }
   } = useForm<FormValues>({
      reValidateMode: 'onBlur',
      resolver: yupResolver(
         yup.object().shape({
            email: yup.string().required('Must provide an email'),
            message: yup.string().required('Must provide a message')
         })
      )
   });

   const onSubmit = async () => {
      setIsSending(true);
      try {
         await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, EMAILJS_USER_ID);
         setIsSending(false);
         setIsSent(true);
      } catch (error) {
         setIsSending(false);
      }
   };

   return (
      <Page>
         <Wrapper className="pt-12 pb-16 md:pt-16 md:pb-24 lg:pb-32 items-center flex flex-col gap-9">
            <div className="w-full max-w-3xl flex flex-col gap-3">
               <Heading border="border-hosers-red">
                  <h1 className="text-3xl font-bold">Contact Us</h1>
               </Heading>
               <div className="flex flex-col gap-3 text-lg">
                  <span className="flex gap-2">
                     <LocationIcon className="h-5 mt-1" />
                     Office: {data.address}
                  </span>
                  <a className="flex gap-2 hover:text-gray-600 w-max" href={`tel:+1${data.phoneNumber}`}>
                     <PhoneIcon className="h-5 mt-1" />
                     Phone: <strong>{data.phoneNumber}</strong>
                  </a>
                  <a className="flex gap-2 hover:text-gray-600 w-max" href={`mailto:${data.email}`}>
                     <MailIcon className="h-5 mt-1" />
                     Email: <strong>{data.email}</strong>
                  </a>
               </div>
            </div>
            <div className="w-full max-w-3xl flex flex-col gap-3">
               <Heading border="border-hosers-red">
                  <h1 className="text-3xl font-bold">Message Us Now</h1>
               </Heading>
               <form className="grid gap-1" onSubmit={handleSubmit(onSubmit)} ref={form}>
                  <label className="font-bold mt-3 text-lg" htmlFor="email">
                     Email Address
                  </label>
                  <input
                     {...register('email')}
                     className={`rounded-sm p-2 sm:mr-12 text-lg ${errors.email ? 'border-red-500 border-2' : 'border-gray-200 border-[1px]'} ${
                        isSent ? 'bg-gray-200' : ''
                     }`}
                     type="email"
                     id="email"
                     placeholder="Enter your email address"
                     disabled={isSent}
                  />
                  {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                  <label className="font-bold mt-3 text-lg" htmlFor="message">
                     Message
                  </label>
                  <textarea
                     {...register('message')}
                     className={` rounded-sm p-2 sm:mr-12 text-lg ${errors.message ? 'border-red-500 border-2' : 'border-gray-200 border-[1px]'} ${
                        isSent ? 'bg-gray-200' : ''
                     }`}
                     id="message"
                     placeholder="Enter your message"
                     rows={4}
                     disabled={isSent}
                  />
                  {errors.message && <span className="text-red-500">{errors.message.message}</span>}
                  {!isSent && (
                     <button type="submit" className="btn-red mt-6" disabled={isSending}>
                        {isSending ? 'Sending Message' : 'Send Message'}
                     </button>
                  )}
               </form>
               {isSent && <span className="mt-2 text-center text-lg text-hosers-gray font-bold">Your message has been sent!</span>}
            </div>
         </Wrapper>
      </Page>
   );
};

export default Contact;

export const query = graphql`
   query ContactUs {
      sanityInfo {
         email
         address
         phoneNumber
      }
   }
`;
