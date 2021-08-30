import React, { useEffect, useState } from 'react';
import { ContributionsContainer, ContributionTitle, ContainerDiv, ButtonsDiv, Button } from '../Contributions/Styles/Contributions.style.js';
import Sidebar from './Sidebar.jsx';
import Items from './Items.jsx';
import axios from 'axios';

const Requests = () => {
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
      <ContributionTitle>Requests</ContributionTitle>
      <ContainerDiv>
        <Sidebar />
        <Items />
      </ContainerDiv>
      <ButtonsDiv>
        <Button>Load more</Button>
        <Button onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>Go to top</Button>
      </ButtonsDiv>
    </ContributionsContainer>
  );
};

export default Requests;