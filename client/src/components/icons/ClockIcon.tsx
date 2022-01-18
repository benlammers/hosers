import React from 'react';

interface Props {
   className?: string;
}

export const ClockIcon: React.FC<Props> = ({ className }) => {
   return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
         <path d="M12 1C5.9346 1 1 5.9346 1 12C1 18.0654 5.9346 23 12 23C18.0654 23 23 18.0654 23 12C23 5.9346 18.0654 1 12 1ZM15.6223 17.1777L10.9 12.4554V5.4H13.1V11.5446L17.1777 15.6223L15.6223 17.1777Z" />
      </svg>
   );
};
