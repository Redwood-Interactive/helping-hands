import React, { useState, useEffect } from 'react';
import { ItemsContainer, Title, ItemsProducts, Item, ItemImage, TextDiv, Location, ImageDiv, CategoryDiv, CategoryIcon, ContributionTitle, Time } from '../Contributions/Styles/Items.style.js';
import { RemoveIcon } from './Styles/HomeProfile.style.js';

const AllUserContributions = ( { contributions, removeContri } ) => {
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
        {contributions.map((item, index) => {

          if (item.available) {
            return ( <Item key={item.id}>
              <ImageDiv>
                <RemoveIcon className="fas fa-times fa-2x" onClick={removeContri.bind(null, item.id)}></RemoveIcon>
                <ItemImage src={item.photos[0]}/>
                <CategoryDiv></CategoryDiv>
                <CategoryIcon className={icons[item.category]}></CategoryIcon>
              </ImageDiv>
              <TextDiv>
                <Title>{item.title}</Title>
                <Location>{item.location.city}, {item.location.state}</Location>
                <Time>{item.c_date}</Time>
                <div>Status: Active</div>
              </TextDiv>
            </Item> )

          } else {
            return ( <Item key={item.id}>
              <ImageDiv>
                <ItemImage src={item.photos[0]}/>
                <CategoryDiv></CategoryDiv>
                <CategoryIcon className={icons[item.category]}></CategoryIcon>
              </ImageDiv>
              <TextDiv>
                <Title>{item.title}</Title>
                <Location>{item.location.city}, {item.location.state}</Location>
                <Time>{item.c_date}</Time>
                <div>Status: Fulfilled</div>
              </TextDiv>
            </Item> )
          }

        }
        )}
      </ItemsProducts>
    </ItemsContainer>
  );
}

export default AllUserContributions;