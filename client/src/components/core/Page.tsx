import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

export const Page: React.FC = ({ children }) => {
   return (
      <main className="grid grid-rows-[max-content_1fr_max-content] h-full">
         <Header />
         <div>{children}</div>
         <Footer />
      </main>
   );
};
