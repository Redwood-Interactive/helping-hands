import React, { useState, useEffect } from 'react';
import { ItemsContainer, Title, ItemsProducts, Item, ItemImage, AnotherDiv, TextDiv, Location, ImageDiv, CategoryDiv, CategoryIcon, Time, ItemIconDiv, ItemIcon, BottomRow, CategoryName } from '../Contributions/Styles/Items.style.js';
import { RemoveIcon } from './Styles/HomeProfile.style.js';

const AllUserRequests = ( { requests, removeReq } ) => {
  const icons = {
    Food: 'fas fa-utensils',
    Drink: 'fas fa-coffee',
    Clothing: "fas fa-tshirt",
    Service: 'fas fa-hands-helping',
    Furniture: 'fas fa-couch',
    Electronic: 'fas fa-plug',
    Toy: 'fas fa-football-ball',
    Miscellaneous: 'fas fa-ellipsis-h'
  }

  return (
    <ItemsContainer>
      <ItemsProducts>
        {requests.map((item, index) => {

          return (
          <Item key={item.id}>
            <ImageDiv>
              <RemoveIcon className="fas fa-times fa-2x" onClick={removeReq.bind(null, item.id)}></RemoveIcon>
              <ItemIconDiv>
              <ItemIcon className={icons[item.category]}></ItemIcon>
              </ItemIconDiv>
            </ImageDiv>
            <TextDiv>
              <Title>{item.title}</Title>
              <AnotherDiv>
                <Location>{item.location.city}, {item.location.state}</Location>
                <BottomRow>
                  <Time>{item.r_date.slice(0, 10)}</Time>
                  <CategoryName>{item.category}</CategoryName>
                </BottomRow>
              </AnotherDiv>
            </TextDiv>
          </Item> )
        }
        )}
      </ItemsProducts>
    </ItemsContainer>
  );
}

export default AllUserRequests;