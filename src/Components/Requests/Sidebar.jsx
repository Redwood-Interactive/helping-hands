import React, { useState } from 'react';
import { SidebarContainer, AddBtn, SearchDiv, SearchSubDiv, SearchBar, SearchBtn, LocationDiv, LocationSubDiv, Label, ZipDiv, ZipInput, RadiusSelect, CheckboxDiv, Checkboxes, CheckSubDiv, Checkbox, CheckLabel } from '../Contributions/Styles/Sidebar.style.js';
import AddItemModal from './AddItemModal.jsx';
import LoginPage from '../LoginPage/LoginPage.jsx';
import LocationPage from '../LoginPage/LocationPage.jsx';

const Sidebar = ({ isLoggedIn, userInfo, setSearchQuery, handleSubmitSearch, categories, setCategories }) => {
  const [addItemModal, setAddItemModal] = useState(false);

  const handleCategoryChange = (e) => {
    const category = e.target.name;
    if (categories.includes(category)) { // uncheck
      let newState = [...categories];
      newState.splice(newState.indexOf(category), 1);
      setCategories(newState);
    } else { // check
      setCategories(prevCategories => [...prevCategories, category]);
    }
  }

  const modalRender = () => {
    // change this back to isLoggedIn && userInfo.locations[0].street_name

    // if (isLoggedIn && Object.keys(userInfo).length) {
    //   return <AddItemModal show={addItemModal} onHide={() => setAddItemModal(false)} userInfo={userInfo} setAddItemModal={setAddItemModal}/>
    // } else if (!isLoggedIn) {
    //   return <LoginPage show={addItemModal} onHide={() => setAddItemModal(false)} />
    // } else if (isLoggedIn && !userInfo.locations[0].street_name) {
    //   return <LocationPage show={addItemModal} onHide={() => setAddItemModal(false)}/>
    // }

    if (Object.keys(userInfo).length > 0 && isLoggedIn && !userInfo.locations[0].street_name) {
      return <LocationPage show={addItemModal} onHide={() => setAddItemModal(false)} />
    } else if (!isLoggedIn) {
      return <LoginPage show={addItemModal} onHide={() => setAddItemModal(false)} />
    } else {
      return <AddItemModal show={addItemModal} onHide={() => setAddItemModal(false)} userInfo={userInfo} setAddItemModal={setAddItemModal} />
    }
  }

    return (
      <SidebarContainer>
        <AddBtn onClick={() => setAddItemModal(true)}>Add Item +</AddBtn>
        <SearchDiv>
          <Label>Search</Label>
          <SearchSubDiv>
            <SearchBar onChange={e => setSearchQuery(e.target.value)} placeholder='Search...'></SearchBar>
            <SearchBtn onClick={handleSubmitSearch}>Enter</SearchBtn>
          </SearchSubDiv>
        </SearchDiv>
        {/* <LocationDiv>
        <LocationSubDiv>
          <Label>Zipcode</Label>
          <ZipInput placeholder='Enter zipcode...'></ZipInput>
        </LocationSubDiv>
        <LocationSubDiv>
          <Label>Radius</Label>
          <RadiusSelect>
            <option>1 mile</option>
            <option>2 miles</option>
            <option>5 miles</option>
            <option>10 miles</option>
            <option>20 miles</option>
            <option>40 miles</option>
          </RadiusSelect>
        </LocationSubDiv>
      </LocationDiv> */}
      <CheckboxDiv>
        <Label>Category</Label>
        <Checkboxes>
          <CheckSubDiv><Checkbox onChange={handleCategoryChange} type="checkbox" id='category1' name='Food'/><CheckLabel htmlFor='category1'>Food</CheckLabel></CheckSubDiv>
          <CheckSubDiv><Checkbox onChange={handleCategoryChange} type="checkbox" id='category2' name='Drink'/><CheckLabel htmlFor='category2'>Drink</CheckLabel></CheckSubDiv>
          <CheckSubDiv><Checkbox onChange={handleCategoryChange} type="checkbox" id='category3' name='Clothing'/><CheckLabel htmlFor='category3'>Clothing</CheckLabel></CheckSubDiv>
          <CheckSubDiv><Checkbox onChange={handleCategoryChange} type="checkbox" id='category4' name='Service'/><CheckLabel htmlFor='category4'>Service</CheckLabel></CheckSubDiv>
          <CheckSubDiv><Checkbox onChange={handleCategoryChange} type="checkbox" id='category5' name='Furniture'/><CheckLabel htmlFor='category5'>Furniture</CheckLabel></CheckSubDiv>
          <CheckSubDiv><Checkbox onChange={handleCategoryChange} type="checkbox" id='category6' name='Electronic'/><CheckLabel htmlFor='category6'>Electronic</CheckLabel></CheckSubDiv>
          <CheckSubDiv><Checkbox onChange={handleCategoryChange} type="checkbox" id='category7' name='Toy'/><CheckLabel htmlFor='category7'>Toy</CheckLabel></CheckSubDiv>
          <CheckSubDiv><Checkbox onChange={handleCategoryChange} type="checkbox" id='category8' name='Miscellaneous'/><CheckLabel htmlFor='category8'>Miscellaneous</CheckLabel></CheckSubDiv>
        </Checkboxes>
      </CheckboxDiv>
      {modalRender()}
    </SidebarContainer>
  );
};

  export default Sidebar;