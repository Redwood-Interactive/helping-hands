import React, { useState } from 'react';
import { Information, ItemsDetailContainer, UpperInformationContainer, Title, Profile, CategoryLocationContainer, Category, Location, Description, UserContainer } from '../Contributions/Styles/ItemsModal.style.js';

const ItemsDetail = ({ title, description, category, location}) => {

  return (
    <ItemsDetailContainer>
    <UserContainer>
      <Profile>
        Profile
      </Profile>
    </UserContainer>
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