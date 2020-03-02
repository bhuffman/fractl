import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

import openGeocoder from 'node-open-geocoder'

let Map = props => {

  const [viewport, setViewport] = useState({
    width: '100%',
    height: 350,
    latitude: 0,
    longitude: 0,
    zoom: 0,
    mapStyle: 'mapbox://styles/mtdvis/ck5fqgnby0s951ip1t3x0mvq5',
    mapboxApiAccessToken: process.env.REACT_APP_MAPBOX_APIKEY,
  });


  useEffect(() => {
    openGeocoder().geocode(props.location).end((err,res)=>{
      console.log(res)
      if (res[0]){
        setViewport({
          ...viewport,
          latitude: parseFloat(res[0].lat),
          longitude: parseFloat(res[0].lon),
          zoom: 10
        })
      }
    })
  // eslint-disable-next-line
  },[])

  return (
    <div className="d-flex justify-content-center my-3 border">
      <ReactMapGL {...viewport}>
        <Marker latitude={viewport.latitude} longitude={viewport.longitude} offsetTop={-30}>
          <div><span role="img" aria-label="Marker" className="h2">📍</span></div>
        </Marker>
      </ReactMapGL>
    </div>
  );
}

export default Map