import styled from 'styled-components';

export const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // background-color: #bf5700;
  // background-color: #7EA1C4;
  background-color: #f2f2f2;
  // background-color: #bf5700;
  // background-color: #bf5700;
  // background-color: #bf5700;
  position: fixed;
  top: 0;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  z-index: 5;
`;

export const Logo = styled.img`
  position: relative;
  left: 50px;
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
  right: 50px;
  top: 7px;
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

