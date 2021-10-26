import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const GoogleMapsContainer = () => {
  const apiKey = `AIzaSyAq2oNSYgmd8vY7t3wMOHV9fJM9CDOIDRk`;

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  const containerStyle = {
    height: '80vh',
    width: '100%',
  };

  const center = {
    lat: 37.7314,
    lng: -122.1263,
  };

  return (
    <div>
      {isLoaded ? (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={18}>
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};

export default GoogleMapsContainer;
