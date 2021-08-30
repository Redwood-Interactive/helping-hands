import React, { useState, useEffect } from 'react';
import { HomeProfileContainer, SettingsIcon, ProfileInfoContainer, HomeProfileImg, UserInfoContainer } from './Styles/HomeProfile.style.js';
import HomeProfileHist from './HomeProfileHist.jsx';
import { Link, useLocation } from 'react-router-dom';


const HomeProfile = ({isLoggedIn, userInfo}) => {
  console.log('you are logged in from HomeProfile', isLoggedIn, userInfo)
  return (
    <HomeProfileContainer className="outermost">
      <HomeProfileContainer className="outermost"></HomeProfileContainer>
        <ProfileInfoContainer>
          <Link id='link' className="settingsWrapper" to={{
            pathname: "/settings",
            state: {
              user: userInfo
              // user: {
              //   id: 1,
              //   first_name: 'Justin',
              //   last_name: 'Case',
              //   current_rating: 2,
              //   email: 'redwoodentertainment@gmail.com',
              //   phone: 2342634275,
              //   profile_pic: "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1070837284-e1611613819374.jpg?w=1946",
              //   location: [
              //     {
              //       street_name: '11403 June Dr',
              //       city: 'Austin',
              //       state: 'TX',
              //       zipcode: 78753
              //     }
              //   ]
              // }
            },
          }}>
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