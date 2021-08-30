import React, { useState, useEffect, useRef } from 'react';
import { ItemsContainer, Title, ItemsProducts, Item, ItemImage, AnotherDiv, TextDiv, Location, ImageDiv, CategoryDiv, CategoryIcon, Time, ButtonsDiv, Button, ItemIconDiv, ItemIcon, BottomRow, CategoryName} from '../Contributions/Styles/Items.style.js';
import ItemsModal from './ItemsModal.jsx';
import dummyData from '../../dummydata/dummydata.js'

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
        {dummyData.contributions.map((item, index) =>
          <Item key={index} onClick={() => {
            setShowModal(true)
            setClickedImages(item.photos)
            setTitle(item.title)
            setDescription(item.description)
            setCategory(item.category)
            setLocation(item.user.location[0].city)
            }}>
            <ImageDiv>
              {/* <ItemImage src={item.photos} /> */}
              <ItemIconDiv>
                <ItemIcon className={icons[item.category]}></ItemIcon>
              </ItemIconDiv>
            </ImageDiv>
            <TextDiv>
              <Title>{item.title}</Title>
              <AnotherDiv>
                <Location>Location</Location>
                <BottomRow>
                  <Time>5m ago</Time>
                  <CategoryName>Category</CategoryName>
                </BottomRow>
              </AnotherDiv>
            </TextDiv>
          </Item>
        )}
      </ItemsProducts>
      <ItemsModal show={showModal} onHide={() => setShowModal(false)} clickedimages={clickedimages} title={title} description={description} category={category} location={location}/>
      <ButtonsDiv>
        <Button>Load more</Button>
        <Button onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>Go to top</Button>
      </ButtonsDiv>
    </ItemsContainer>
  );
};

export default Items;