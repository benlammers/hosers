import React from 'react';
import { Page } from '../components/core/Page';
import { Heading } from '../components/util/Heading';
import { Wrapper } from '../components/util/Wrapper';

const Credits: React.FC = () => {
   return (
      <Page>
         <Wrapper className="pt-12 flex flex-col gap-3">
            <Heading border="border-hosers-blue">
               <h1 className="text-2xl font-bold">Credit for Service Icons</h1>
            </Heading>
            {[
               ['Car wash icon created by', 'Amonrat Rungreangfangsai', 'https://www.flaticon.com/free-icons/car-wash', 'Car wash icons'],
               ['Gallon icon created by', 'Ultimatearm', 'https://www.flaticon.com/free-icons/gallon', 'Gallon icon'],
               ['Trademark icon created by', 'Those Icons', 'https://www.flaticon.com/free-icons/trademark', 'Trademark icon'],
               ['Other icons created by', 'Freepik', 'https://www.flaticon.com/authors/freepik', 'Other icons']
            ].map(([description, author, source, title]) => (
               <span>
                  {description}{' '}
                  <a className="underline underline-offset-4 hover:text-gray-500" href={source} title={title}>
                     {author}
                  </a>{' '}
                  from{' '}
                  <a className="underline underline-offset-4 hover:text-gray-500" href="https://www.flaticon.com/" title="Flaticon">
                     www.flaticon.com
                  </a>
               </span>
            ))}
         </Wrapper>
      </Page>
   );
};

export default Credits;
