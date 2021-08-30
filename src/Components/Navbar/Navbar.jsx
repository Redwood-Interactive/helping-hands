import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarContainer, Logo, NavbarList, NavbarListItem, NavbarDivButton } from './Styles/Navbar.style.js'


var windowFeatures = "height=972,width=660, modal=yes, alwaysRaised=yes";

const Navbar = ({ isLoggedIn }) => {

  return (
    <NavbarContainer>
      <Logo onClick={() => window.open('/', '_self')}src='https://i1.wp.com/pcdeeprun.org/wp-content/uploads/2017/03/HelpingHands.png?fit=450%2C450&ssl=1'/>
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
        <NavbarListItem>
          <NavbarDivButton onClick={()=>{window.open('/auth/google')}} color={'red'}>Sign up</NavbarDivButton>
          <NavbarDivButton onClick={()=>{window.open('/auth/google')}}>Login</NavbarDivButton>
        </NavbarListItem>
        }
      </NavbarList>
    </NavbarContainer>
  );
};

export default Navbar;