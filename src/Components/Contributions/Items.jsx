import React, { useState, useEffect, useRef } from 'react';
import { ItemsContainer, Title, ItemsProducts, Item, ItemImage, AnotherDiv, TextDiv, Location, ImageDiv, CategoryDiv, CategoryIcon, Time, ButtonsDiv, Button, BottomRow, CategoryName } from './Styles/Items.style.js';
import ItemsModal from './ItemsModal.jsx';
// import dummyData from '../../dummydata/dummydata.js'

const Items = (props) => {

  const [showModal, setShowModal] = useState(false);
  const [clickedimages, setClickedImages] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState([]);

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
        { props.data ? props.data.map((item, index) =>
          <Item key={index} onClick={() => {
            setShowModal(true)
            setClickedImages(item.photos)
            setTitle(item.title)
            setDescription(item.description)
            setCategory(item.category)
            setLocation(item.user.location[0].city)
          }}>
            <ImageDiv>
              <ItemImage src={item.photos[0]} />
              <CategoryDiv></CategoryDiv>
              <CategoryIcon className={icons[item.category]}></CategoryIcon>
            </ImageDiv>
            <TextDiv>
              <Title>{item.title}</Title>
              <AnotherDiv>
                <Location>{item.location.city}, {item.location.state}</Location>
                <BottomRow>
                  <Time>5m ago</Time>
                  <CategoryName>{item.category}</CategoryName>
                </BottomRow>
              </AnotherDiv>
            </TextDiv>
          </Item>
        ) : null }
      </ItemsProducts>
      <ItemsModal show={showModal} onHide={() => setShowModal(false)} clickedimages={clickedimages} title={title} description={description} category={category} location={location}/>
    </ItemsContainer>
  );
};

export default Items;