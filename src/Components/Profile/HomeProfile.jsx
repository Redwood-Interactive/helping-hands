import React, { useState, useEffect } from 'react';
import { HomeProfileContainer, SettingsIcon } from './Styles/HomeProfile.style.js';
import HomeProfileInfo from './HomeProfileInfo.jsx';
import HomeProfileHist from './HomeProfileHist.jsx';

const HomeProfile = () => {
  return (
   <HomeProfileContainer className="outermost">
     <SettingsIcon src="https://static.thenounproject.com/png/20344-200.png"></SettingsIcon>
     <HomeProfileInfo />
     <HomeProfileHist />
     Entire Profile Section for User
   </HomeProfileContainer>
  );
}

export default HomeProfile;