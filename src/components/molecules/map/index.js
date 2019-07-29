import React from 'react';
import GoogleMapReact from 'google-map-react';

import Avatar from '../../atoms/avatar';

import './styles.scss';

function Map(props) {
    return (
        <div className="map-container">
            <GoogleMapReact
                bootstrapURLKeys={{
                    // my Google Maps token, pls don't steal :D
                    // ideally should be kept on a server unexposed
                    // but no backend here
                    key: 'AIzaSyCRu1mSIMqlClzLx2rAohYBYbAhYrmY4Ok',
                }}
                defaultCenter={{lat: 40.1872, lng: 44.5152}}
                defaultZoom={14}>
                {props.stops.map((stop, index) => (
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
