import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const ParkMap = () => {
  const apiKey = `AIzaSyAq2oNSYgmd8vY7t3wMOHV9fJM9CDOIDRk`;

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  const containerStyle = {
    height: '45vh',
    width: '100%',
  };

  const center = {
    lat: 37.7314,
    lng: -122.1263,
  };

  const position = { lat: 37.7314, lng: -122.1263 };

  return (
    <div>
      {isLoaded ? (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          <Marker position={position} />
          <></>
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ParkMap;
