import styled from 'styled-components';

export const NavbarContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #bf5700;
  position: fixed;
  top: 0;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  z-index: 5;
`;

export const Logo = styled.img`
  position: relative;
  left: 175px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 6;
`;

export const NavbarList = styled.ul`
  position: relative;
  display: inline-flex;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  align-items: center;
  right: 150px;
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
  font-size: 20px;
  color: white;
  background-color: #EB6A00;
  border-radius: 2px;
  padding: 7px;
  cursor: pointer;
  transition: 0.2s ease-in;
  &:hover {
    background-color: #FF811A;
  }
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

