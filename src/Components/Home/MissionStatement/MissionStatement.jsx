import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { ImageStyle, StatementContainer } from './Styles/Mission.style.js';


const MissionStatement = (props) => {
  return (

<Carousel fade>
  <Carousel.Item>

    <img
      className="d-block w-100"
      src={require('../../assets/homepagepic/hppic1.png')}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="assets/homepagepic/hppic2.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://soundwaveart.com/wp-content/uploads/2017/09/Helping-those-in-need.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}



export default MissionStatement;