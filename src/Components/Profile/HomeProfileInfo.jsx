import React, { useState, useEffect } from 'react';
import { HomeProfileImg, HomeProfInfoContainer } from './Styles/HomeProfileInfo.style.js';

const HomeProfileInfo = () => {
  return (
   <HomeProfInfoContainer>
     <HomeProfileImg src="https://pbs.twimg.com/media/E0qRXsQXoAAbn71.jpg"></HomeProfileImg>
     <p>First Name, Last Name</p>
     <p>Location: Austin, TX</p>
     <p>User Rating</p>
   </HomeProfInfoContainer>
  );
};

export default HomeProfileInfo;