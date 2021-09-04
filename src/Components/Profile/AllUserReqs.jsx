import React, { useState, useEffect } from 'react';
import { ItemsContainer, Title, ItemsProducts, Item, ItemImage, AnotherDiv, TextDiv, Location, ImageDiv, CategoryDiv, CategoryIcon, Time, ItemIconDiv, ItemIcon, BottomRow, CategoryName } from '../Contributions/Styles/Items.style.js';
import { RemoveIcon, StatusContainer, Active, Fulfilled } from './Styles/HomeProfile.style.js';
import moment from 'moment';

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
          if (item.available) {
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
                    <Time>{moment(item.r_date).fromNow()}</Time>
                    <CategoryName>{item.category}</CategoryName>
                  </BottomRow>
                </AnotherDiv>
                <StatusContainer>
                  <div>Status: </div>
                  <Active>Active</Active>
                </StatusContainer>
              </TextDiv>
            </Item> )
          } else {
            return (
              <Item key={item.id}>
                <ImageDiv>
                  <ItemIconDiv>
                  <ItemIcon className={icons[item.category]}></ItemIcon>
                  </ItemIconDiv>
                </ImageDiv>
                <TextDiv>
                  <Title>{item.title}</Title>
                  <AnotherDiv>
                    <Location>{item.location.city}, {item.location.state}</Location>
                    <BottomRow>
                      <Time>{moment(item.r_date).fromNow()}</Time>
                      <CategoryName>{item.category}</CategoryName>
                    </BottomRow>
                  </AnotherDiv>
                  <StatusContainer>
                  <div>Status: </div>
                  <Fulfilled>Fulfilled</Fulfilled>
                </StatusContainer>
                </TextDiv>
              </Item> )
          }
        }
        )}
      </ItemsProducts>
    </ItemsContainer>
  );
}

export default AllUserRequests;