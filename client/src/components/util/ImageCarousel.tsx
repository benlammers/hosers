import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { HotspotImage } from './HotspotImage';

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

export const ImageCarousel: React.FC<Props> = ({ images }) => {
   return (
      <Swiper pagination={{ type: 'bullets' }} navigation={true} className="h-48 lg:h-96 w-screen">
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
