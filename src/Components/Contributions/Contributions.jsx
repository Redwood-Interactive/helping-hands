import React from 'react';
import { ContributionsContainer } from './Styles/Contributions.style.js'
import Sidebar from './Sidebar.jsx';
import Items from './Items.jsx';

const Contributions = () => {
  return (
    <ContributionsContainer>
      <Sidebar />
      <Items />
    </ContributionsContainer>
  );
};

export default Contributions;