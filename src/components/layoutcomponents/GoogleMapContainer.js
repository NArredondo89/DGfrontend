import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import './GoogleMapContainer.css';

require('dotenv').config();

const GoogleMapsContainer = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'APIKEY',
  });

  const containerStyle = {
    height: '60vh',
    width: '100%',
  };

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
            mapContainerStyle={containerStyle}
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
