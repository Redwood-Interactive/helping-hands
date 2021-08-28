import React, { useState, useEffect } from 'react';
import { HomeProfileContainer, SettingsIcon } from './Styles/HomeProfile.style.js';
import HomeProfileInfo from './HomeProfileInfo.jsx';
import HomeProfileHist from './HomeProfileHist.jsx';
import { Link } from 'react-router-dom';

const HomeProfile = () => {
  return (
   <HomeProfileContainer className="outermost">
     <Link id='link' to='/settings'>
     <SettingsIcon src="https://static.thenounproject.com/png/20344-200.png"></SettingsIcon>
     </Link>
     <HomeProfileInfo />
     <HomeProfileHist />
     Entire Profile Section for User
   </HomeProfileContainer>
  );
}

export default HomeProfile;