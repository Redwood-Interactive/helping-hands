import React, { useEffect } from 'react';
import { MapContainer, MapAnchor } from './Styles/MapBlock.style.js';
import { Loader } from '@googlemaps/js-api-loader';

const MapBlock = (props) => {

  useEffect(() => {
    const loader = new Loader({
      apiKey: 'AIzaSyAlMp4AQS5Hald642CExjB_Af6Gq_WNod8',
    });
    loader.load()
    .then(() => {
      var map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 30.2672, lng: -97.7431 },
        zoom: 11,
      });

      const addMarker = (props) => {
        var marker = new google.maps.Marker({
          position: props.coords,
          map: map,
        })

        if (props.content) {
          var infoWindow = new google.maps.InfoWindow({
            content: props.content
          })
          marker.addListener('click', function(){
            infoWindow.open(map, marker);
          });
        }
      }

      addMarker({
        coords:{ lat: 30.259886153922185, lng: -97.70108708137616 },
        content: '<div>Casa Marianella</div>'
      })
      
    });


  }, [])

  return (
    <MapContainer>
      <h1>This is this map block</h1>
      <MapAnchor id='map'></MapAnchor>
    </MapContainer>
  )
}

export default MapBlock;