import styled from 'styled-components';

export const FooterContainer = styled.div`
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #bf5700;
  padding: 40px;
  justify-content: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const FooterSection = styled.div`
margin-right: 55px;
display: flex;
flex-direction: column;
/* white-space: nowrap; */
width: 300px;
margin-bottom: 25px;
`;

export const StyledAnchor = styled.a`
text-decoration: none;
color: black;
transition: 0.2s ease-in;
`;
