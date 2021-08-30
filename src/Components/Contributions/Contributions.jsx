import React, { useEffect, useState } from 'react';
import { ContributionsContainer, ContributionTitle, ContainerDiv } from './Styles/Contributions.style.js'
import Sidebar from './Sidebar.jsx';
import Items from './Items.jsx';
import axios from 'axios';

const Contributions = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getContributions();
  }, [])

  const getContributions = () => {
    axios.get('/getcontributions')
      .then(res => {
        // console.log(res.data);
      })
  }

  return (
    <ContributionsContainer>
      <ContributionTitle>Contributions</ContributionTitle>
      <ContainerDiv>
        <Sidebar />
        <Items/>
      </ContainerDiv>
    </ContributionsContainer>
  );
};

export default Contributions;