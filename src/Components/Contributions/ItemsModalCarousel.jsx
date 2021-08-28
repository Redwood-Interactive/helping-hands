import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'

const ItemsModalCarousel = ({ clickedImages }) => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {clickedImages.map((image, index) =>
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      )}

    </Carousel>
  );
}
export default ItemsModalCarousel