import React, { useState, useEffect } from 'react';
import { HomeProfileContainer, SettingsIcon, ProfileInfoContainer, HomeProfileImg, UserInfoContainer } from './Styles/HomeProfile.style.js';
import HomeProfileHist from './HomeProfileHist.jsx';
import { Link, useLocation } from 'react-router-dom';


const HomeProfile = ({isLoggedIn, userInfo}) => {

  return (
    <div>
    {isLoggedIn ? <HomeProfileContainer className="outermost">
    <HomeProfileContainer className="outermost"></HomeProfileContainer>
      <ProfileInfoContainer>
        <Link id='link' className="settingsWrapper" to={{
          pathname: "/settings",
          state: {
            user: userInfo
          },
        }}>
          <SettingsIcon src="https://static.thenounproject.com/png/20344-200.png"></SettingsIcon>
        </Link>
        <HomeProfileImg src={userInfo.profile_pic}></HomeProfileImg>
        <UserInfoContainer>
          <p>{userInfo.first_name} {userInfo.last_name}</p>
          <p><b>Location:</b>{userInfo.locations[0].city}, {userInfo.locations[0].state}</p>
          <p><b>User Rating: </b>{userInfo.current_rating}</p>
        </UserInfoContainer>
      </ProfileInfoContainer>
      <HomeProfileHist userInfo={userInfo}/>
    </HomeProfileContainer> : <div></div>}
    </div>
      );
}

      export default HomeProfile;