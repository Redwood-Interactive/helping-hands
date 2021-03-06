import React, { useState, useEffect, useRef } from 'react';
import { ItemsContainer, Title, ItemsProducts, Item, ItemImage, AnotherDiv, TextDiv, Location, ImageDiv, CategoryDiv, CategoryIcon, Time, ItemIconDiv, ItemIcon, BottomRow, CategoryName } from '../Contributions/Styles/Items.style.js';
import ItemsModal from './ItemsModal.jsx';
import moment from 'moment';

const Items = (props) => {

  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState([]);
  const [iconClass, setClass] = useState('');
  const [user, setUser] = useState({});
  const [newData, setNewData] = useState([]);

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

  useEffect(() => {
    if (props.data) {
      setNewData(props.data);
    }
  }, [props.data])

  useEffect(() => {
    if (props.queriedSearch.length) {
      setNewData([...props.data].filter(item => item.title.toLowerCase().includes(props.queriedSearch.toLowerCase())));
    } else {
      setNewData(props.data);
    }
  }, [props.queriedSearch])

  return (
    <ItemsContainer>
      <ItemsProducts>
        {props.data ?
          !props.categories.length ?
            newData.map((item, index) => { // show all
              return (
                <Item key={index} onClick={() => {
                  setShowModal(true)
                  setTitle(item.title)
                  setDescription(item.r_description)
                  setCategory(item.category)
                  setLocation(item.location.city + ', ' + item.location.state)
                  setClass(icons[item.category])
                  setUser(item.user)
                }}>
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
                  </TextDiv>
                </Item>
              )
            }) :
            newData.map((item, index) => {
              if (props.categories.indexOf(item.category) !== -1) {
                return (
                  <Item key={index} onClick={() => {
                    setShowModal(true)
                    setTitle(item.title)
                    setDescription(item.r_description)
                    setCategory(item.category)
                    setLocation(item.location.city + ', ' + item.location.state)
                    setClass(icons[item.category])
                    setUser(item.user)
                  }}>
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
                    </TextDiv>
                  </Item>
                )
              }
            })
          : null}
      </ItemsProducts>
      <ItemsModal show={showModal} onHide={() => setShowModal(false)} title={title} description={description} category={category} location={location} iconclass={iconClass} user={user} />
    </ItemsContainer>
  );
};

export default Items;