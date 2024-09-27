import React from 'react';

interface Props {
   className?: string;
   children?: React.ReactNode;
}

export const Wrapper: React.FC<Props> = ({ className, children }) => (
   <div className="flex flex-col items-center">
      <div className={`w-full max-w-3xl p-6 ${className}`}>{children}</div>
   </div>
);
