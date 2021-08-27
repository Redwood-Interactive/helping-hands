import React from 'react';
import { MapContainer } from './Styles/MapBlock.style.js';

const MapBlock = (props) => {

  return (
    <MapContainer>
      <div>
        This is this map block
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d882238.1178176565!2d-98.33157895646069!3d30.258666836646047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5a6f356703d%3A0xfd35b832828a722c!2sFront%20Steps!5e0!3m2!1sen!2sus!4v1630080810431!5m2!1sen!2sus" width="700" height="500" loading="lazy"></iframe>
    </MapContainer>
  )
}

export default MapBlock;