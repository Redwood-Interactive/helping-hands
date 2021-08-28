import React from 'react';
import { ImageStyle, StatementContainer } from './Styles/Mission.style.js';

const MissionStatement = (props) => {
  return (
    <div>
      <StatementContainer>
        <h3>Helping Hands Mission Statement</h3>
        <p>An Unprecedented School Year Our 12th year distributing backpacks and supplies to refugees and the underserved, we decided to give back to parents and teachers. We have an education grant and a bi-weekly self-care parenting group.</p>
      </StatementContainer>
      <ImageStyle src="https://soundwaveart.com/wp-content/uploads/2017/09/Helping-those-in-need.jpg"></ImageStyle>
    </div>
  )
}

export default MissionStatement;