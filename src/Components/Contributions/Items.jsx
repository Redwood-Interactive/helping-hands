import React, { useState, useEffect } from 'react';
import { ItemsContainer, Title, ItemsProducts, Item, ItemImage, TextDiv, Location, ImageDiv, CategoryDiv, CategoryIcon, ContributionTitle, Time } from './Styles/Items.style.js';
import ItemsModal from './ItemsModal.jsx';
import dummyData from '../../dummydata/dummydata.js'

const Items = () => {

  const [showModal, setShowModal] = useState(false);
  const [itemsWidth, setItemsWidth] = useState('');
  const [clickedimages, setClickedImages] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState([]);

  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();
  }, [])

  const resize = () => {
    const width = window.innerWidth;
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
          <Item key={index} onClick={() => {
            setShowModal(true)
            setClickedImages(item.photos)
            setTitle(item.title)
            setDescription(item.description)
            setCategory(item.category)
            setLocation(item.user.location[0].city)
            }}>
            <ImageDiv>
              <ItemImage src={item.photos} onClick={() => setShowModal(true)} />
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
      <ItemsModal show={showModal} onHide={() => setShowModal(false)} clickedimages={clickedimages} title={title} description={description} category={category} location={location}/>
    </ItemsContainer>
  );
};

export default Items;