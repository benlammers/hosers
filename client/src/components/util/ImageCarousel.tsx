import React, { useLayoutEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HotspotImage } from './HotspotImage';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

SwiperCore.use([Pagination, Navigation]);

interface Props {
   images: {
      __typename?: 'SanityImageWithAlt';
      alt: string;
      image: {
         __typename?: 'SanityImage';
         asset: {
            __typename?: 'SanityImageAsset';
            gatsbyImageData: any;
         };
         hotspot: {
            __typename?: 'SanityImageHotspot';
            y: number;
            x: number;
         };
      };
   }[];
}

export const Carousel: React.FC<Props> = ({ images }) => {
   const [width, setWidth] = useState<number>();

   useLayoutEffect(() => {
      function updateSize() {
         setWidth(window.innerWidth - (window.innerWidth - document.documentElement.clientWidth));
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
   }, []);

   return (
      <Swiper pagination={{ type: 'bullets' }} navigation={true} className="h-64 sm:h-96 max-w-sm xs:max-w-3xl" style={{ width }}>
         {images.map((image, index) => (
            <SwiperSlide key={index}>
               <div className="h-full w-full pointer-events-none">
                  <HotspotImage image={image.image} alt={image.alt} />
               </div>
            </SwiperSlide>
         ))}
      </Swiper>
   );
};

export const ImageCarousel: React.FC<Props> = ({ images }) => {
   const isClient = typeof window !== 'undefined';

   if (isClient)
      return (
         <div className="w-full mx-auto">
            <Carousel images={images} />
         </div>
      );
   return null;
};
