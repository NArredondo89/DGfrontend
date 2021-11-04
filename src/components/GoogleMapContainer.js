import React from 'react';

import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './GoogleMapContainer.css';

const GoogleMapsContainer = () => {
  const apiKey = `AIzaSyAq2oNSYgmd8vY7t3wMOHV9fJM9CDOIDRk`;

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  const containerStyle = {
    height: '70vh',
    width: '70vw',
  };

  const center = {
    lat: 37.7314,
    lng: -122.1263,
  };

  return (
    <>
      <div className="mapContainer">
        {isLoaded ? (
          <GoogleMap
            className="GoogleMap"
            mapContainerStyle={containerStyle}
            center={center}
            zoom={18}
            // mapTypeId="hybrid"
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
