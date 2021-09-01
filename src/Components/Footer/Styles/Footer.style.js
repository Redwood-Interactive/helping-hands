import styled from 'styled-components';

export const FooterContainer = styled.div`
  position: relative;
  left: 0;
  bottom: 0;
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #bf5700;
  padding: 40px;
`;

export const LinksContainer = styled.div`
display: flex;
justify-content: space-between;
`;

export const FooterSection = styled.div`
margin-right: 55px;
display: flex;
flex-direction: column;
white-space: nowrap

`;

export const StyledAnchor = styled.a`
text-decoration: none;
color: black;
transition: 0.2s ease-in;
`;
