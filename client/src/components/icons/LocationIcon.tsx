import React from 'react';

interface Props {
   className?: string;
}

export const LocationIcon: React.FC<Props> = ({ className }) => {
   return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
         <path d="M12 23.5C10.376 22.1236 8.87081 20.6147 7.49999 18.989C5.44285 16.5477 3 12.9118 3 9.44718C2.99911 7.67776 3.52651 5.94784 4.51546 4.47635C5.50441 3.00487 6.91045 1.85797 8.55565 1.1808C10.2008 0.503637 12.0112 0.32664 13.7577 0.672213C15.5042 1.01779 17.1082 1.8704 18.3668 3.12214C19.2048 3.95108 19.869 4.93692 20.321 6.02261C20.7729 7.1083 21.0037 8.27228 21 9.44718C21 12.9118 18.5571 16.5477 16.5 18.989C15.1291 20.6147 13.6239 22.1236 12 23.5ZM12 5.6146C10.977 5.6146 9.99593 6.01839 9.27257 6.73714C8.54922 7.45589 8.14284 8.43072 8.14284 9.44718C8.14284 10.4636 8.54922 11.4385 9.27257 12.1572C9.99593 12.876 10.977 13.2798 12 13.2798C13.023 13.2798 14.004 12.876 14.7274 12.1572C15.4507 11.4385 15.8571 10.4636 15.8571 9.44718C15.8571 8.43072 15.4507 7.45589 14.7274 6.73714C14.004 6.01839 13.023 5.6146 12 5.6146Z" />
      </svg>
   );
};