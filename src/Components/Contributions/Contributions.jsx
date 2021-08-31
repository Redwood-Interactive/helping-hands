import React, { useEffect, useState } from 'react';
import { ContributionsContainer, ContributionTitle, ContainerDiv, ButtonsDiv, Button } from './Styles/Contributions.style.js'
import Sidebar from './Sidebar.jsx';
import Items from './Items.jsx';
import axios from 'axios';
import dummyData from '../../dummydata/dummydata.js'

const Contributions = ({ isLoggedIn, userInfo }) => {
  const [data, setData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getContributions();
    // transformData(dummyData.contributions);
  }, [userInfo])

  const getContributions = () => {
    axios.get('/getcontributions')
      .then(res => {
        transformData(res.data);
      })
  }

  const transformData = (contributions) => {
    // Here we can transform any data to the proper format
    // console.log('Contributions', contributions);
    setData(contributions);
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
      <ContributionTitle>Contributions</ContributionTitle>
      <ContainerDiv>
        <Sidebar isLoggedIn={isLoggedIn} userInfo={userInfo}/>
        {isLoaded ? <Items data={data} userInfo={userInfo}/> : null}
      </ContainerDiv>
      <ButtonsDiv>
        <Button onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>Go to top</Button>
        <Button onClick={loadMore}>Load more</Button>
      </ButtonsDiv>
    </ContributionsContainer>
  );
};

export default Contributions;