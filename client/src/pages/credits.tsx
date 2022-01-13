import React from 'react';
import { Page } from '../components/core/Page';

const Credits: React.FC = () => {
   return (
      <Page className="font-body p-12 flex flex-col gap-2">
         <h1 className="text-2xl font-bold">Credit for Service Icons</h1>
         {[
            ['Car wash icon created by', 'Amonrat Rungreangfangsai', 'https://www.flaticon.com/free-icons/car-wash', 'Car wash icons'],
            ['Gallon icon created by', 'Ultimatearm', 'https://www.flaticon.com/free-icons/gallon', 'Gallon icon'],
            ['Other service icons created by', 'Freepik', 'https://www.flaticon.com/authors/freepik', 'Other service icons']
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
      </Page>
   );
};

export default Credits;
