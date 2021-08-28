import React from 'react';
import Feedback from './Feedback/Feedback.jsx'
import { FooterContainer } from './Styles/Footer.style.js';

const Footer = () => {
  return (
    <FooterContainer>
      Sign Up for Our Newsletter!
      <Feedback/>
    </FooterContainer>
  );
};

export default Footer;