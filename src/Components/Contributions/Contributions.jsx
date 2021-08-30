import React, { useEffect, useState } from 'react';
import { ContributionsContainer, ContributionTitle, ContainerDiv, ButtonsDiv, Button } from './Styles/Contributions.style.js'
import Sidebar from './Sidebar.jsx';
import Items from './Items.jsx';
import axios from 'axios';
import dummyData from '../../dummydata/dummydata.js'

const Contributions = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // getContributions();
    transformData(dummyData.contributions);
  }, [])

  const getContributions = () => {
    axios.get('/getcontributions')
      .then(res => {
        // console.log(res.data);
      })
  }

  const transformData = (data) => {
    // Here we can transform any data to the proper format
    setData(data);
  }

  const loadMore = () => {
    // console.log('Load more 20 more items');
  }

  return (
    <ContributionsContainer>
      <ContributionTitle>Contributions</ContributionTitle>
      <ContainerDiv>
        <Sidebar />
        <Items data={data}/>

      </ContainerDiv>
      <ButtonsDiv>
        <Button onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>Go to top</Button>
        <Button onClick={loadMore}>Load more</Button>
      </ButtonsDiv>
    </ContributionsContainer>
  );
};

export default Contributions;