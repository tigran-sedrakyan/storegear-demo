import React from 'react';
import GoogleMapReact from 'google-map-react';

import Avatar from '../../atoms/avatar';

import './styles.scss';

function Map(props) {
    const {stops} = props;
    const inProgressRide = stops.filter(
        (stop) => stop.status === 'inprogress'
    )[0];

    return (
        <div className="map-container">
            <GoogleMapReact
                bootstrapURLKeys={{
                    // make sure you have ".env" file in you root directory
                    // with REACT_APP_GOOGLE_MAPS_API_TOKEN=${your_api_token}
                    key: process.env.REACT_APP_GOOGLE_MAPS_API_TOKEN,
                }}
                defaultCenter={{
                    lat: inProgressRide.lat,
                    lng: inProgressRide.lng,
                }}
                defaultZoom={13}>
                {stops.map((stop, index) => (
                    <Avatar
                        onMap
                        key={stop.id.toString()}
                        number={index + 1}
                        status={stop.status}
                        lat={stop.lat}
                        lng={stop.lng}
                    />
                ))}
            </GoogleMapReact>
        </div>
    );
}

export default Map;
