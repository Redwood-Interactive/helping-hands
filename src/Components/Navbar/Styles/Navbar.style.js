import styled from 'styled-components';

export const NavbarContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  background-color: #bf5700;
`;

export const NavbarList = styled.ul`
  display: inline-flex;
`;

export const NavbarListItem = styled.li`
  list-style: none;
  text-decoration:none;
  padding: 10px;
  color: white;
  font-size: 25px;

  &:hover{
    cursor: pointer;
  }
`;

export const NavbarDivButton =styled.div`
  font-size: 25px;
  height: 30px;
  // width: 60px;
  color: ${props => props.color || 'blue'};
  background-color: white;
`;
