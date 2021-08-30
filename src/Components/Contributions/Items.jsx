import React, { useState, useEffect, useRef } from 'react';
import { ItemsContainer, Title, ItemsProducts, Item, ItemImage, AnotherDiv, TextDiv, Location, ImageDiv, CategoryDiv, CategoryIcon, Time } from './Styles/Items.style.js';
import ItemsModal from './ItemsModal.jsx';
// import dummyData from '../../dummydata/dummydata.js'

const Items = (props) => {

  const [showModal, setShowModal] = useState(false);
  const [clickedimages, setClickedImages] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState([]);

  return (
    <ItemsContainer>
      <ItemsProducts>
        {props.data ? props.data.map((item, index) =>
          <Item key={index} onClick={() => {
            setShowModal(true)
            setClickedImages(item.photos)
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
              <AnotherDiv>
                <Location>Location</Location>
                <Time>5m ago</Time>
              </AnotherDiv>
            </TextDiv>
          </Item>
        ) : null}
      </ItemsProducts>
      <ItemsModal show={showModal} onHide={() => setShowModal(false)} clickedimages={clickedimages} title={title} description={description} category={category} location={location}/>
    </ItemsContainer>
  );
};

export default Items;