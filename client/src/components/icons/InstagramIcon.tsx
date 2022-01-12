import React from 'react';

interface Props {
   className?: string;
}

export const InstagramIcon: React.FC<Props> = ({ className }) => {
   return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
         <path d="M15.75 12C15.75 12.9946 15.3549 13.9484 14.6517 14.6517C13.9484 15.3549 12.9946 15.75 12 15.75C11.0054 15.75 10.0516 15.3549 9.34835 14.6517C8.64509 13.9484 8.25 12.9946 8.25 12C8.25 11.7863 8.2725 11.5775 8.31125 11.375H7V16.3713C7 16.7188 7.28125 17 7.62875 17H16.3725C16.539 16.9997 16.6986 16.9333 16.8163 16.8154C16.9339 16.6975 17 16.5378 17 16.3713V11.375H15.6888C15.7275 11.5775 15.75 11.7863 15.75 12V12ZM12 14.5C12.3284 14.4999 12.6535 14.4352 12.9569 14.3094C13.2603 14.1837 13.5359 13.9994 13.768 13.7671C14.0002 13.5349 14.1843 13.2592 14.3099 12.9557C14.4355 12.6523 14.5001 12.3271 14.5 11.9987C14.4999 11.6704 14.4352 11.3452 14.3094 11.0418C14.1837 10.7385 13.9994 10.4629 13.7671 10.2307C13.5349 9.99858 13.2592 9.81445 12.9557 9.68886C12.6523 9.56327 12.3271 9.49867 11.9987 9.49875C11.3355 9.49892 10.6996 9.76253 10.2307 10.2316C9.76188 10.7007 9.49858 11.3368 9.49875 12C9.49892 12.6632 9.76253 13.2992 10.2316 13.768C10.7007 14.2369 11.3368 14.5002 12 14.5V14.5ZM15 9.375H16.4988C16.5983 9.375 16.6938 9.33553 16.7644 9.26524C16.8349 9.19495 16.8747 9.09957 16.875 9V7.50125C16.875 7.40146 16.8354 7.30576 16.7648 7.2352C16.6942 7.16464 16.5985 7.125 16.4988 7.125H15C14.9002 7.125 14.8045 7.16464 14.734 7.2352C14.6634 7.30576 14.6238 7.40146 14.6238 7.50125V9C14.625 9.20625 14.7937 9.375 15 9.375V9.375ZM12 0C8.8174 0 5.76515 1.26428 3.51472 3.51472C1.26428 5.76515 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76515 22.7357 8.8174 24 12 24C13.5759 24 15.1363 23.6896 16.5922 23.0866C18.0481 22.4835 19.371 21.5996 20.4853 20.4853C21.5996 19.371 22.4835 18.0481 23.0866 16.5922C23.6896 15.1363 24 13.5759 24 12C24 10.4241 23.6896 8.86371 23.0866 7.4078C22.4835 5.95189 21.5996 4.62902 20.4853 3.51472C19.371 2.40042 18.0481 1.5165 16.5922 0.913446C15.1363 0.310389 13.5759 0 12 0V0ZM18.25 16.8613C18.25 17.625 17.625 18.25 16.8613 18.25H7.13875C6.375 18.25 5.75 17.625 5.75 16.8613V7.13875C5.75 6.375 6.375 5.75 7.13875 5.75H16.8613C17.625 5.75 18.25 6.375 18.25 7.13875V16.8613V16.8613Z" />
      </svg>
   );
};
