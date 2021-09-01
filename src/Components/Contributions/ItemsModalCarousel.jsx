import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { ItemsModalImages, ItemsImageContainer } from '../Contributions/Styles/ItemsModal.style.js';

const ItemsModalCarousel = ({ clickedimages }) => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {clickedimages.map((image, order) =>
        <Carousel.Item key={order}>
          <ItemsImageContainer>
            <ItemsModalImages
              className="d-block w-100"
              src={image}
            />
          </ItemsImageContainer>
        </Carousel.Item>
      )}
    </Carousel>


  );


}
export default ItemsModalCarousel