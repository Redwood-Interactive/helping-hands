import React from 'react';
import { ContributionsContainer } from './Styles/Contributions.style.js'
import Buttons from './Buttons.jsx';
import Items from './Items.jsx';

const Contributions = () => {
  return (
    <ContributionsContainer>
      <Buttons />
      <Items />
    </ContributionsContainer>
  );
};

export default Contributions;