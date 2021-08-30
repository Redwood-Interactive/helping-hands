import React from 'react';
import { ContributionsContainer, ContributionTitle, ContainerDiv } from './Styles/Contributions.style.js'
import Sidebar from './Sidebar.jsx';
import Items from './Items.jsx';

const Contributions = () => {
  return (
    <ContributionsContainer>
      <ContributionTitle>Contributions</ContributionTitle>
      <ContainerDiv>
        <Sidebar />
        <Items />
      </ContainerDiv>
    </ContributionsContainer>
  );
};

export default Contributions;