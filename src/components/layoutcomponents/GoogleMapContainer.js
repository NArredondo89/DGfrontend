import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import './GoogleMapContainer.css';

const GoogleMapsContainer = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAq2oNSYgmd8vY7t3wMOHV9fJM9CDOIDRk',
  });

  const containerStyle = {
    width: '100%',
    height: '.75fr',
  };

  const center = {
    lat: 37.7314,
    lng: -122.1263,
  };

  return (
    <>
      {isLoaded ? (
        <GoogleMap
          id="GoogleMap"
          mapContainerStyle={containerStyle}
          center={center}
          zoom={18}
          mapTypeId="hybrid"
        >
          {/*Hole information */}
        </GoogleMap>
      ) : (
        <></>
      )}
    </>
  );
};

export default GoogleMapsContainer;
