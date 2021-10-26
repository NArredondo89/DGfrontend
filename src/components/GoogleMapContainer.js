// defaultCenter={{ lat: 37.730214412962276, lng: -122.12982499628082 }}
//       defaultZoom={13}

// import React, { Component } from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';

// const mapStyles = {
//   width: '100%',
//   height: '100%',
// };s

// export class MapContainer extends Component {
//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         zoom={14}
//         style={mapStyles}
//         initialCenter={{
//           lat: 37.730214412962276,
//           lng: -122.12982499628082,
//         }}
//       />
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyAq2oNSYgmd8vY7t3wMOHV9fJM9CDOIDRk',
// })(MapContainer);

// AIzaSyAq2oNSYgmd8vY7t3wMOHV9fJM9CDOIDRk;

import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const GoogleMapsContainer = () => {
  const apiKey = `AIzaSyAq2oNSYgmd8vY7t3wMOHV9fJM9CDOIDRk`;

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  const containerStyle = {
    height: '70vh',
    width: '100%',
  };

  const center = {
    lat: 37.730214412962276,
    lng: -122.12982499628082,
  };

  return (
    <div>
      {isLoaded ? (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
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
