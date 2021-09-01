import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { ImageStyle, StatementContainer } from './Styles/Mission.style.js';


const MissionStatement = (props) => {
  return (

<Carousel fade>
  <Carousel.Item>

    <ImageStyle
      className="d-block w-100"
      src='https://images.pexels.com/photos/6647178/pexels-photo-6647178.jpeg'
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Neighbors Help Neighbors</h3>
      <p>Give back to your community, make a donation today</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <ImageStyle
      className="d-block w-100"
      src="https://images.pexels.com/photos/3996723/pexels-photo-3996723.jpeg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Change The Narrative</h3>
      <p>Here at Helping Hands we believe that small acts of kindness can make a big difference</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <ImageStyle
      className="d-block w-100"
      src="https://images.pexels.com/photos/45842/clasped-hands-comfort-hands-people-45842.jpeg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Sign Up Today</h3>
      <p>One man's trash is another man's tresure</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}



export default MissionStatement;