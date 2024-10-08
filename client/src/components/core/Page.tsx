import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

interface Props {
   className?: string;
   children?: React.ReactNode;
}

export const Page: React.FC<Props> = ({ children, className }) => {
   return (
      <main className="grid grid-rows-[max-content_1fr_max-content] h-full relative font-body text-hosers-gray">
         <Header />
         <div className={className}>{children}</div>
         <Footer />
      </main>
   );
};
