import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

interface Props {
   className?: string;
}

export const Page: React.FC<Props> = ({ children, className }) => {
   return (
      <main className="grid grid-rows-[1fr_max-content] h-full relative pt-16 font-body text-hosers-gray">
         <Header />
         <div className={className}>{children}</div>
         <Footer />
      </main>
   );
};
