import React, { useEffect } from 'react';
import { MapContainer, MapAnchor, MapAnchorDiv } from './Styles/MapBlock.style.js';
import { Loader } from '@googlemaps/js-api-loader';
import { googleKey } from '../../../../config.js'

const MapBlock = (props) => {

  useEffect(() => {
    const loader = new Loader({
      apiKey: googleKey.key,
    });
    loader.load()
    .then(() => {
      var map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 30.2672, lng: -97.7431 },
        zoom: 11,
        mapId: '9da248b87f1dbc1b'
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
        content: '<a href="https://goo.gl/maps/H2r2ET5Q6d3p3tTK7" target="_blank">Casa Marianella</a>'
      })
      addMarker({
        coords:{ lat: 30.336162642987052, lng: -97.72044121558197},
        content: '<a href="https://g.page/ffhomeless?share" target="_blank">Foundation for the Homeless</a>'
      })
      addMarker({
        coords:{ lat: 30.367070866238457, lng: -97.71393873874985},
        content: '<a href="https://goo.gl/maps/PNsAqPknWb5QH5xS9" target="_blank">The Settlement Home for Children</a>'
      })
      addMarker({
        coords:{ lat: 30.288257328381484, lng: -97.742722426585},
        content: '<a href="https://goo.gl/maps/cqTq2jFLucv6gZAW7" target="_blank">Street Youth Ministry of Austin</a>'
      })
      addMarker({
        coords:{ lat: 30.26732483579553, lng: -97.73790219178024},
        content: '<a href="https://goo.gl/maps/9w9kJHZMnFuKKZKm9" target="_blank">Front Steps</a>'
      })
      addMarker({
        coords:{ lat: 30.234727867327965, lng: -97.70622636306159},
        content: '<a href="https://goo.gl/maps/kNqj7JhzVNjqZqbG7" target="_blank">SAFE Donation Warehouse</a>'
      })
      addMarker({
        coords:{ lat: 30.229245057940055, lng: -97.76824154767426},
        content: '<a href="https://goo.gl/maps/GFrGCXLR2rSQbfc19" target="_blank">Lifeworks Austin</a>'
      })
      addMarker({
        coords:{ lat: 30.28313340260018, lng: -97.67066335076653},
        content: '<a href="https://goo.gl/maps/Vt2S7gmJvisfbo337" target="_blank">The Salvation Army Rathberger Center</a>'
      })

    });


  }, [])

  return (
    <MapContainer>
      <h1>Shelters in the Austin Area</h1>
      <MapAnchorDiv>
      <MapAnchor id='map'></MapAnchor>
      </MapAnchorDiv>
    </MapContainer>
  )
}

export default MapBlock;