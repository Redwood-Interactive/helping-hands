import React from 'react';
import Feedback from './Feedback/Feedback.jsx'
import { FooterContainer, LinksContainer, FooterSection, StyledAnchor} from './Styles/Footer.style.js';

const Footer = () => {
  return (
    <FooterContainer>
      <LinksContainer>
        <FooterSection>
          <h3>Resources</h3>
          <StyledAnchor href='#'>Research Outreach</StyledAnchor >
          <StyledAnchor href='#'>Schedule An Event</StyledAnchor>
          <StyledAnchor href='#'>Meet a Counselor Near You</StyledAnchor>
        </FooterSection>
        <FooterSection>
          <h3>Headquarters</h3>
          <div>1529 Jericho Turnpike, New Hyde Park, NY 11040</div>
        </FooterSection>
        <FooterSection>
          <h3>Contact</h3>
          <div>Ph: (152) 1555-2933 | (832) 820-7474</div>
          <div>National Helpline: (123) 455-5555</div>
          <div>Donations: (123) 111-0102</div>
        </FooterSection>

      </LinksContainer>
      <Feedback/>

    </FooterContainer>
  );
};

export default Footer;