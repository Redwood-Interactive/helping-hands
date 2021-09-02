import React, { useState } from 'react';
import { UserContainer, ContactUser, ContactUserDiv, Information, ItemsDetailContainer, UpperInformationContainer, Title, Profile, TopRow, NameCol, UserPic, BottomRow, CategoryLocationContainer, Category, Location, Description } from '../Contributions/Styles/ItemsModal.style.js';

const ItemsDetail = ({ title, description, category, location, iconclass, user}) => {
  var phone;
  if (user.phone) {
    phone = user.phone.toString();
    phone = '(' + phone.slice(0, 3) + ') ' + phone.slice(3, 7) + '-' + phone.slice(7);
  }

  const email = () => {
    window.open(`mailto:${user.email}?subject=[Helping Hands] Inquiry for: ${title}`, '_blank');
  }

  const call = () => {
    window.open(`tel:${user.phone}`)
  }

  return (
    <ItemsDetailContainer>
    <Information>
      <UpperInformationContainer>
        <Title>
          {title}
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
    <UserContainer>
      <Profile>
        <TopRow>
          <UserPic src={user.profile_pic}></UserPic>
          <NameCol>
            {user.first_name} <br />
            {user.last_name}
          </NameCol>
        </TopRow>
        <BottomRow>
          {user.email} <br />
          {phone}
        </BottomRow>
      </Profile>
      <ContactUserDiv>
        <ContactUser onClick={email} margin={'10px'} variant='secondary'><i className="far fa-envelope"/> Email</ContactUser>
        <ContactUser onClick={call} variant='secondary'><i className="fas fa-phone-alt"/> Call</ContactUser>
      </ContactUserDiv>
    </UserContainer>
    </ItemsDetailContainer>

  )
}
export default ItemsDetail