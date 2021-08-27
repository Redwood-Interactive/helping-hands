import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarContainer, NavbarList, NavbarListItem } from './Styles/Navbar.style.js'


const Navbar = ({ isLoggedIn }) => {

  const login = () => {
    // LOGIN OR SIGN UP WITH GOOGLE
    // dropdowns
      // sign in / register with google
        // -> new window.open
  }

  return (
    <NavbarContainer>
      <NavbarList>
        <NavbarListItem>
          <Link id='link' to='/'>Home</Link>
        </NavbarListItem>
        <NavbarListItem>
          <Link id='link' to='/contributions'>Contributions</Link></NavbarListItem>
        <NavbarListItem>
          <Link id='link' to='/requests'>Requests</Link></NavbarListItem>
        {isLoggedIn ?
        <NavbarListItem>
          <Link id='link' to='/profile'>Profile</Link>
        </NavbarListItem> :
        <NavbarListItem onClick={()=>{login()}}>Sign up / Login</NavbarListItem>
        }
      </NavbarList>
    </NavbarContainer>
  );
};

export default Navbar;