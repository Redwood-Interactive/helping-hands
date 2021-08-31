import React, { useState } from 'react';
import { UserContainer, ContactUser, Information, ItemsDetailContainer, UpperInformationContainer, Title, Profile, CategoryLocationContainer, Category, Location, Description } from '../Contributions/Styles/ItemsModal.style.js';

const ItemsDetail = ({ title, description, category, location, iconclass, condition, userinfo}) => {

  return (
    <ItemsDetailContainer>
     <UserContainer>
      <Profile>Profile</Profile>
      <ContactUser variant='secondary'>Contact</ContactUser>
    </UserContainer>
    <Information>
      <UpperInformationContainer>
        <Title>
          [{condition}] {title}
        </Title>
        <CategoryLocationContainer>
          <Category>
            <i className={iconclass}/> {category}
          </Category>
          <Location>
          <i className="fas fa-map-marker-alt" /> {location}
          </Location>
        </CategoryLocationContainer>
      </UpperInformationContainer>
      <Description>
        Description:
        <br />
        {description}
      </Description>
    </Information>
    </ItemsDetailContainer>

  )
}
export default ItemsDetail