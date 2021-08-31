import React, { useEffect, useState } from 'react';
import { ContributionsContainer, ContributionTitle, ContainerDiv, ButtonsDiv, Button } from '../Contributions/Styles/Contributions.style.js';
import Sidebar from './Sidebar.jsx';
import Items from './Items.jsx';
import axios from 'axios';

const Requests = ({ isLoggedIn, userInfo }) => {
  const [data, setData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getRequests();
  }, [])

  const getRequests = () => {
    axios.get('/requestsAll')
      .then(res => {
        // console.log(res.data);
        setData(res.data);
      })
  }

  useEffect(() => {
    if (data) {
      setIsLoaded(true);
    }
  }, [data])

  return (
    <ContributionsContainer>
      <ContributionTitle>Requests</ContributionTitle>
      <ContainerDiv>
        <Sidebar />
        {isLoaded ? <Items data={data} userinfo={userInfo}/> : null }
      </ContainerDiv>
      <ButtonsDiv>
        <Button>Load more</Button>
        <Button onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>Go to top</Button>
      </ButtonsDiv>
    </ContributionsContainer>
  );
};

export default Requests;