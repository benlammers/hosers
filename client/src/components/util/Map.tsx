import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { LocationIcon } from '../icons/LocationIcon';
import { Link } from 'gatsby';
import { ChevronRightIcon } from '../icons/ChevronRightIcon';
import { DirectionIcon } from '../icons/DirectionIcon';
import { CrossIcon } from '../icons/CrossIcon';

const isClient = typeof window !== 'undefined';

type MapLocation = {
   id: string;
   name: string;
   address: string;
   geopoint: {
      lat: number;
      lng: number;
   };
   slug?: {
      current: string;
   };
};

interface MapMarkerProps {
   lat: number;
   lng: number;
   location: MapLocation;
   isFocused: boolean;
   handleMarkerClick: (id: string) => void;
   handleMarkerClose: () => void;
}

const MapMarker: React.FC<MapMarkerProps> = ({ location, isFocused, handleMarkerClick, handleMarkerClose }) => {
   const directionUrl = `https://www.google.com/maps/dir/?api=1&travelmode=driving&destination=${location.geopoint.lat},${location.geopoint.lng}`;

   return (
      // @ts-ignore
      <div lat={location.geopoint.lat} lng={location.geopoint.lng} className="relative" onClick={() => console.log('YOO')}>
         <button onClick={() => handleMarkerClick(location.id)}>
            <LocationIcon className="h-12 w-12 text-hosers-red -translate-x-1/2 -translate-y-full" />
         </button>
         {isFocused && (
            <div className="absolute top-4 left-0 z-10 p-4 bg-white shadow-md font-body grid gap-1 rounded-md -translate-x-1/2">
               <button className="absolute top-0 right-0 m-4" onClick={handleMarkerClose}>
                  <CrossIcon className="h-5 w-5" />
               </button>
               <span className="font-bold text-lg">{location.name}</span>
               <span className="whitespace-nowrap text-base">{location.address}</span>
               <div className="flex gap-3 pt-3">
                  {location.slug && (
                     <Link className="btn-text-red" to={`/location/${location.slug.current}`}>
                        <span>View Location</span>
                        <ChevronRightIcon className="w-5 h-5" />
                     </Link>
                  )}
                  <a className="btn-red py-1" href={directionUrl}>
                     <span>Get Directions</span>
                     <DirectionIcon className="w-5 h-5" />
                  </a>
               </div>
            </div>
         )}
      </div>
   );
};

interface MapProps {
   locations: MapLocation[];
}

export const Map: React.FC<MapProps> = ({ locations }) => {
   const avgLat = locations.reduce((acc, curr) => acc + curr.geopoint.lat, 0) / locations.length;
   const avgLng = locations.reduce((acc, curr) => acc + curr.geopoint.lng, 0) / locations.length;

   const [focusedId, setFocusedId] = useState<string>(locations.length === 1 ? locations[0].id : '');
   const [zoom, setZoom] = useState<number>(11);

   const handleMarkerClick = (id: string) => {
      setFocusedId(id);
   };

   const handleMarkerClose = () => {
      setFocusedId(undefined);
   };

   const handleMapChange = (e: GoogleMapReact.ChangeEventValue) => {
      setZoom(e.zoom);
   };

   let center = focusedId ? locations.find((location) => location.id === focusedId).geopoint : { lat: avgLat, lng: avgLng };

   useEffect(() => {
      if (focusedId) setZoom(14);
      else setZoom(11);
   }, [focusedId]);

   return (
      <div className="h-96 md:h-[32rem]">
         {isClient && (
            <GoogleMapReact bootstrapURLKeys={{ key: 'AIzaSyCg0elWS1p3sqMdoYCQTZooyp_g5qTEAzg' }} center={center} zoom={zoom} onChange={handleMapChange}>
               {locations.map((location, index) => (
                  <MapMarker
                     key={index}
                     {...location.geopoint}
                     location={location}
                     isFocused={location.id === focusedId}
                     handleMarkerClick={handleMarkerClick}
                     handleMarkerClose={handleMarkerClose}
                  />
               ))}
            </GoogleMapReact>
         )}
      </div>
   );
};
