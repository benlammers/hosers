import React from 'react';

interface Props {
   className?: string;
}

export const ChevronLeftIcon: React.FC<Props> = ({ className }) => {
   return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
         <path d="M14.029 4.72578C13.4388 5.3167 7.6727 11.5257 7.6727 11.5257C7.5233 11.6736 7.4044 11.8509 7.3232 12.047C7.242 12.2431 7.2002 12.454 7.2002 12.667C7.2002 12.88 7.242 13.0909 7.3232 13.287C7.4044 13.4831 7.5233 13.6604 7.6727 13.8083C7.6727 13.8083 13.4388 20.0202 14.029 20.6082C14.6192 21.1991 15.6809 21.2397 16.3092 20.6082C16.9389 19.9796 16.9883 19.1005 16.3092 18.3285L11.0189 12.6684L16.3092 7.00835C16.9883 6.23639 16.9389 5.35581 16.3092 4.72578C15.6809 4.09431 14.6192 4.13341 14.029 4.72578Z" />
      </svg>
   );
};
