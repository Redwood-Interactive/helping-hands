import React, { useState } from 'react';
import { User, Information, ItemsDetailContainer, UpperInformationContainer, Title, Profile, CategoryLocationContainer, Category, Location, Description } from './Styles/ItemsModal.style.js';

const ItemsDetail = ({ title, description, category, location}) => {

  return (
    <ItemsDetailContainer>
    <User>
      <Profile>
        Profile
      </Profile>
    </User>
    <Information>
      <UpperInformationContainer>
        <Title>
          {title}
        </Title>

        <CategoryLocationContainer>
          <Category>
            {category}
          </Category>
          <Location>
            {location}
          </Location>
        </CategoryLocationContainer>

      </UpperInformationContainer>
      <Description>
        {description}
      </Description>

    </Information>
    </ItemsDetailContainer>

  )
}
export default ItemsDetail