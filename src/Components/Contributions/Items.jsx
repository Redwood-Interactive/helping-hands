import React, { useState, useEffect } from 'react';
import { ItemsContainer, Title, ItemsProducts, Item, ItemImage, TextDiv, Location, ImageDiv, CategoryDiv, CategoryIcon, ContributionTitle, Time } from './Styles/Items.style.js';
import ItemsModal from './ItemsModal.jsx';
import dummyData from '../../dummydata/dummydata.js'

const Items = () => {

  const [showModal, setModal] = useState(false);
  const [itemsWidth, setItemsWidth] = useState('');

  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();
  }, [])

  const resize = () => {
    const width = window.innerWidth;
    console.log('hello')
    if (width <= 1440) {
      setItemsWidth('800px');
    } else if (width <= 1690) {
      setItemsWidth('900px');
    } else {
      setItemsWidth('1025px');
    }
  }

  return (
    <ItemsContainer>
      <ItemsProducts width={itemsWidth}>
      <ContributionTitle>Contributions</ContributionTitle>
        {dummyData.contributions.map((item, index) =>
          <Item>
            <ImageDiv>
              <ItemImage src={item.photos} onClick={() => setModal(true)} />
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
        {dummyData.contributions.map((item, index) =>
          <Item>
            <ImageDiv>
              <ItemImage src={item.photos} onClick={() => setModal(true)} />
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
      <ItemsModal show={showModal} onHide={() => setModal(false)} />

    </ItemsContainer>
  );
};

export default Items;