import React, { useState } from 'react';
import { ItemsContainer, ItemsProducts, Item, ItemImage, TextDiv, Location, ImageDiv, CategoryDiv, CategoryIcon, Title, Time } from './Styles/Items.style.js';
import ItemsModal from './ItemsModal.jsx';
import dummyData from '../../dummydata/dummydata.js'

const Items = () => {

const [showModal, setModal] = useState(false);
const [clickedimages, setImages] = useState([]);
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [category, setCategory] = useState('');
const [location, setLocation] = useState([]);





  return (
    <ItemsContainer>
      <ItemsProducts>
        {dummyData.contributions.map((item, index) =>
          <Item key={index} onClick={() => {
            setModal(true)
            setImages(item.photos)
            setTitle(item.title)
            setDescription(item.description)
            setCategory(item.category)
            setLocation(item.user.location[0].city)
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
      <ItemsModal show={showModal} onHide={() => setModal(false)} clickedimages={clickedimages} title={title} description={description} category={category} location={location}/>

    </ItemsContainer>
  );
};

export default Items;