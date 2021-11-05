import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import './GoogleMapContainer.css';

const GoogleMapsContainer = (props) => {
  console.log(props);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAq2oNSYgmd8vY7t3wMOHV9fJM9CDOIDRk',
  });

  const containerStyle = {
    height: '80vh',
    width: '50vw',
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
