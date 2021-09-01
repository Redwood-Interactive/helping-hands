import React, { useEffect, useState } from 'react';
import { ContributionsContainer, ContributionTitle, ContainerDiv, ButtonsDiv, Button } from '../Contributions/Styles/Contributions.style.js';
import Sidebar from './Sidebar.jsx';
import Items from './Items.jsx';
import axios from 'axios';

const Requests = ({ isLoggedIn, userInfo }) => {
  const [data, setData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getRequests();
  }, [])

  const getRequests = () => {
    axios.get('/requestsAll')
      .then(res => {
        // console.log(res.data);
        transformData(res.data);
      })
  }

  const transformData = (requests) => {
    // Here we can transform any data to the proper format
    setData(requests);
  }

  useEffect(() => {
    if (data) {
      setIsLoaded(true);
    }
  }, [data])

  const loadMore = () => {
    // console.log('Load more 20 more items');
  }

  return (
    <ContributionsContainer>
      <ContributionTitle>Requests</ContributionTitle>
      <ContainerDiv>
        <Sidebar setCategories={setCategories} categories={categories} isLoggedIn={isLoggedIn} userInfo={userInfo}/>
        {isLoaded ? <Items data={data} userinfo={userInfo} categories={categories}/> : null }
      </ContainerDiv>
      <ButtonsDiv>
        <Button onClick={loadMore}>Load more</Button>
        <Button onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>Go to top</Button>
      </ButtonsDiv>
    </ContributionsContainer>
  );
};

export default Requests;