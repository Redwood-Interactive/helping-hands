import React, { useState, useEffect } from 'react';
import { HomeProfileContainer, SettingsIcon } from './Styles/HomeProfile.style.js';
import HomeProfileInfo from './HomeProfileInfo.jsx';
import HomeProfileHist from './HomeProfileHist.jsx';
import { Link, useLocation } from 'react-router-dom';


const HomeProfile = () => {
  return (
   <HomeProfileContainer className="outermost">
     <Link id='link' to={{
    pathname: "/settings",
    state: {
      user: {
        id: 1,
        first_name: 'Justin',
        last_name: 'Case',
        current_rating: 2,
        email: 'redwoodentertainment@gmail.com',
        phone: 2342634275,
        profile_pic: "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1070837284-e1611613819374.jpg?w=1946",
        location: [
          {
            street_name: '11403 June Dr',
            city: 'Austin',
            state: 'TX',
            zipcode: 78753
          }
        ]
      }
    },
  }}>
     <SettingsIcon src="https://static.thenounproject.com/png/20344-200.png"></SettingsIcon>
     </Link>
     <HomeProfileInfo />
     <HomeProfileHist />
     Entire Profile Section for User
   </HomeProfileContainer>
  );
}

export default HomeProfile;