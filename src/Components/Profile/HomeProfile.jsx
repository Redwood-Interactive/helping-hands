import React, { useState, useEffect } from 'react';
import { HomeProfileContainer, SettingsIcon, ProfileInfoContainer, HomeProfileImg, UserInfoContainer, UserSettings, EditProfile, Username } from './Styles/HomeProfile.style.js';
import HomeProfileHist from './HomeProfileHist.jsx';
import { Link, useLocation } from 'react-router-dom';


const HomeProfile = ({ isLoggedIn, userInfo }) => {

  return (
    <div>
    {Object.keys(userInfo).length !== 0 ? <HomeProfileContainer className="outermost">
      <ProfileInfoContainer>
        <HomeProfileImg src={userInfo.profile_pic}></HomeProfileImg>
        <UserInfoContainer>
          <Username>{userInfo.first_name} {userInfo.last_name}</Username>
          <p><b>Location: </b>{userInfo.locations[0].city}, {userInfo.locations[0].state}</p>
              <Link id='link' className="settingsWrapper" to={{
                pathname: "/settings",
                state: {
                  user: userInfo
                },
              }}>
                <UserSettings>
              <EditProfile>Edit Profile</EditProfile>
              <SettingsIcon src="https://static.thenounproject.com/png/20344-200.png"></SettingsIcon>
          </UserSettings>
            </Link>

        </UserInfoContainer>
      </ProfileInfoContainer>
      <HomeProfileHist userInfo={userInfo}/>
    </HomeProfileContainer> : <div></div>}
    </div>
  );
}

export default HomeProfile;