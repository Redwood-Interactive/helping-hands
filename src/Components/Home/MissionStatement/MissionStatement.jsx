import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { ImageStyle, StatementContainer } from './Styles/Mission.style.js';

const MissionStatement = (props) => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <ImageStyle
          className="d-block w-100"
          src="hppic1.png"
          alt="First slide"
        />
        <Carousel.Caption className='carousel-text'>
          <h1>Neighbors Helping Neighbors</h1>
          <p>Give back to your community, make a donation today</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ImageStyle
          className="d-block w-100"
          src="hppic2.png"
          alt="Second slide"
        />

        <Carousel.Caption className='carousel-text'>
          <h1>Change The Narrative</h1>
          <p>Here at Helping Hands we believe that small acts of kindness can make a big difference</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ImageStyle
          className="d-block w-100"
          src="hppic3.png"
          alt="Third slide"
        />

        <Carousel.Caption className='carousel-text'>
          <h1>Sign Up Today</h1>
          <p>Donate or trade in your area</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}



export default MissionStatement;