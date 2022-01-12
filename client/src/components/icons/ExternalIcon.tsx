import React from 'react';

interface Props {
   className?: string;
}

export const ExternalIcon: React.FC<Props> = ({ className }) => {
   return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
         <path d="M3.5 4.75C3.5 4.41848 3.6317 4.10054 3.86612 3.86612C4.10054 3.6317 4.41848 3.5 4.75 3.5H9.75C10.0815 3.5 10.3995 3.3683 10.6339 3.13388C10.8683 2.89946 11 2.58152 11 2.25C11 1.91848 10.8683 1.60054 10.6339 1.36612C10.3995 1.1317 10.0815 1 9.75 1H4.75C3.75544 1 2.80161 1.39509 2.09835 2.09835C1.39509 2.80161 1 3.75544 1 4.75V19.75C1 20.7446 1.39509 21.6984 2.09835 22.4017C2.80161 23.1049 3.75544 23.5 4.75 23.5H19.75C20.7446 23.5 21.6984 23.1049 22.4017 22.4017C23.1049 21.6984 23.5 20.7446 23.5 19.75V14.75C23.5 14.4185 23.3683 14.1005 23.1339 13.8661C22.8995 13.6317 22.5815 13.5 22.25 13.5C21.9185 13.5 21.6005 13.6317 21.3661 13.8661C21.1317 14.1005 21 14.4185 21 14.75V19.75C21 20.0815 20.8683 20.3995 20.6339 20.6339C20.3995 20.8683 20.0815 21 19.75 21H4.75C4.41848 21 4.10054 20.8683 3.86612 20.6339C3.6317 20.3995 3.5 20.0815 3.5 19.75V4.75ZM16 1C15.6685 1 15.3505 1.1317 15.1161 1.36612C14.8817 1.60054 14.75 1.91848 14.75 2.25C14.75 2.58152 14.8817 2.89946 15.1161 3.13388C15.3505 3.3683 15.6685 3.5 16 3.5H19.2325L11.3663 11.3663C11.1386 11.602 11.0126 11.9178 11.0154 12.2455C11.0183 12.5732 11.1497 12.8868 11.3815 13.1185C11.6132 13.3503 11.9268 13.4817 12.2545 13.4846C12.5822 13.4874 12.898 13.3614 13.1337 13.1337L21 5.2675V8.5C21 8.83152 21.1317 9.14946 21.3661 9.38388C21.6005 9.6183 21.9185 9.75 22.25 9.75C22.5815 9.75 22.8995 9.6183 23.1339 9.38388C23.3683 9.14946 23.5 8.83152 23.5 8.5V2.25C23.5 1.91848 23.3683 1.60054 23.1339 1.36612C22.8995 1.1317 22.5815 1 22.25 1H16Z" />
      </svg>
   );
};