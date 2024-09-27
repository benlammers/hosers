import React from 'react';

interface Props {
   border: 'border-hosers-blue' | 'border-hosers-red';
   children?: React.ReactNode;
}

export const Heading: React.FC<Props> = ({ border, children }) => {
   return (
      <div className="w-max">
         {children}
         <hr className={`${border} border-2 scale-x-110 [transform-origin:bottom_left]`} />
      </div>
   );
};
