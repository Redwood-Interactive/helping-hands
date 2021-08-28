import styled from 'styled-components';

export const NavbarContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #bf5700;
  position: fixed;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  z-index: 5;
`;

export const NavbarList = styled.ul`
  position: absolute;
  display: inline-flex;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  align-items: center;
  top: -15px;
  right: 100px;
`;

export const NavbarListItem = styled.li`
  list-style: none;
  text-decoration:none;
  padding: 10px;
  color: white;
  font-size: 25px;
  cursor: pointer;
  display: inline-flex;
`;

export const NavbarDivButton =styled.div`
  margin-right: 20px;
  font-size: 25px;
  color: black;
  /* border: 1px solid white; */
  background-color: #f7f7f7;
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.2s ease-in;
  &:hover {
    background-color: #e5eae5;
  }
`;

export const Logo = styled.img`
  position: relative;
  left: 125px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 6;
`;