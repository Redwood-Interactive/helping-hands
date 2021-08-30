import React, { useState, useEffect } from 'react';
import { HomeProfileContainer, SettingsIcon, ProfileInfoContainer, HomeProfileImg, UserInfoContainer } from './Styles/HomeProfile.style.js';
import HomeProfileHist from './HomeProfileHist.jsx';
import { Link } from 'react-router-dom';

const HomeProfile = () => {
  return (
    <HomeProfileContainer className="outermost">
      <ProfileInfoContainer>
        <Link id='link' className="settingsWrapper"to='/settings'>
            <SettingsIcon src="https://static.thenounproject.com/png/20344-200.png"></SettingsIcon>
        </Link>
        <HomeProfileImg src="https://pbs.twimg.com/media/E0qRXsQXoAAbn71.jpg"></HomeProfileImg>
        <UserInfoContainer>
          <p>First Name, Last Name</p>
          <p><b>Location:</b> Austin, TX</p>
          <p><b>User Rating</b></p>
        </UserInfoContainer>
      </ProfileInfoContainer>
      <HomeProfileHist />
    </HomeProfileContainer>
  );
}

export default HomeProfile;