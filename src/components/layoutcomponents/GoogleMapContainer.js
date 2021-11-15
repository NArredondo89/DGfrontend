import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import './GoogleMapContainer.css';

const GoogleMapsContainer = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAq2oNSYgmd8vY7t3wMOHV9fJM9CDOIDRk',
  });

  const center = {
    lat: 37.7314,
    lng: -122.1263,
  };

  return (
    <>
      <div className="google__maps__container">
        {isLoaded ? (
          <GoogleMap
            id="GoogleMap"
            center={center}
            zoom={18}
            mapTypeId="hybrid"
          >
            {/*Hole information */}
          </GoogleMap>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default GoogleMapsContainer;
