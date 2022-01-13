import { Link } from 'gatsby';
import React from 'react';
import { PathData } from '../components/core/Header';
import { Page } from '../components/core/Page';

const NotFoundPage: React.FC = () => {
   return (
      <Page className="p-16 flex flex-col gap-4 items-center text-hosers-gray">
         <h1 className="text-3xl font-bold">Page not found</h1>
         <p className="text-lg">Sorry we could not find the page you were looking for</p>

         <h2 className="text-2xl font-bold mt-12">Available Pages</h2>
         {Object.keys(PathData).map((path, index) => (
            <Link className="text-lg font-bold hover:text-gray-500 transition-colors" key={index} to={PathData[path].path}>
               {PathData[path].name}
            </Link>
         ))}
      </Page>
   );
};

export default NotFoundPage;
