import React, { useState, useEffect } from 'react';
import { ItemsContainer, Title, ItemsProducts, Item, ItemImage, TextDiv, Location, ImageDiv, CategoryDiv, CategoryIcon, ContributionTitle, Time } from '../Contributions/Styles/Items.style.js';

const AllUserRequests = ( { requests } ) => {
  return (
    <ItemsContainer>
      <ItemsProducts>
        {requests.map((item, index) =>
          <Item key={index}>
            <ImageDiv>
              <ItemImage src={item.photos}/>
              <CategoryDiv>
                <CategoryIcon>∆</CategoryIcon>
              </CategoryDiv>
            </ImageDiv>
            <TextDiv>
              <Title>{item.title}</Title>
              <Location>Location</Location>
              <Time>5m ago</Time>
            </TextDiv>
          </Item>
        )}
      </ItemsProducts>
    </ItemsContainer>
  );
}

export default AllUserRequests;