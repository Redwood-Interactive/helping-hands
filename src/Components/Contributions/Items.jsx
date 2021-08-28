import React, { useState } from 'react';
import { ItemsContainer, ItemsProducts, Item, ItemImage, TextDiv, Location, ImageDiv, CategoryDiv, CategoryIcon, Title, Time } from './Styles/Items.style.js';
import ItemsModal from './ItemsModal.jsx';
import dummyData from '../../dummydata/dummydata.js'

const Items = () => {

const [showModal, setModal] = useState(false);
const [clickedImages, setImages] = useState([]);


  return (
    <ItemsContainer>
      <ItemsProducts>
        {dummyData.contributions.map((item, index) =>
          <Item key={index} onClick={() => {
            setModal(true)
            setImages(item.photos)
            }}>
            <ImageDiv>
              <ItemImage src={item.photos} />
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
      <ItemsModal show={showModal} onHide={() => setModal(false)} clickedImages={clickedImages}/>

    </ItemsContainer>
  );
};

export default Items;