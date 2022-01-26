import React from 'react';

interface Props {
   className?: string;
}

export const Wrapper: React.FC<Props> = ({ className, children }) => (
   <div className="flex flex-col items-center">
      <div className={`w-full max-w-3xl p-6 ${className}`}>{children}</div>
   </div>
);
