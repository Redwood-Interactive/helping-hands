import React, { useEffect, useState } from 'react';
import { SidebarContainer, AddBtn, SearchDiv, SearchSubDiv, SearchBar, SearchBtn, LocationDiv, LocationSubDiv, Label, ZipDiv, ZipInput, RadiusSelect, CheckboxDiv, Checkboxes, CheckSubDiv, Checkbox, CheckLabel } from './Styles/Sidebar.style.js';
import AddItemModal from './AddItemModal.jsx'

const Sidebar = () => {
  const [addItemModal, setAddItemModal] = useState(false);

  return (
    <SidebarContainer>
      <AddBtn onClick={() => setAddItemModal(true)}>Add Item +</AddBtn>
      <SearchDiv>
        <Label>Search</Label>
        <SearchSubDiv>
          <SearchBar placeholder='Search...'></SearchBar>
          <SearchBtn>Enter</SearchBtn>
        </SearchSubDiv>
      </SearchDiv>
      <LocationDiv>
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
      </LocationDiv>
      <CheckboxDiv>
        <Label>Category</Label>
        <Checkboxes>
          <CheckSubDiv><Checkbox type="checkbox" id='category1' name='food'/><CheckLabel htmlFor='category1'>Food</CheckLabel></CheckSubDiv>
          <CheckSubDiv><Checkbox type="checkbox" id='category2' name='drink'/><CheckLabel htmlFor='category2'>Drink</CheckLabel></CheckSubDiv>
          <CheckSubDiv><Checkbox type="checkbox" id='category3' name='clothing'/><CheckLabel htmlFor='category3'>Clothing</CheckLabel></CheckSubDiv>
          <CheckSubDiv><Checkbox type="checkbox" id='category4' name='service'/><CheckLabel htmlFor='category4'>Service</CheckLabel></CheckSubDiv>
          <CheckSubDiv><Checkbox type="checkbox" id='category5' name='furniture'/><CheckLabel htmlFor='category5'>Furniture</CheckLabel></CheckSubDiv>
          <CheckSubDiv><Checkbox type="checkbox" id='category6' name='electronic'/><CheckLabel htmlFor='category6'>Electronic</CheckLabel></CheckSubDiv>
          <CheckSubDiv><Checkbox type="checkbox" id='category7' name='hobby'/><CheckLabel htmlFor='category7'>Hobby</CheckLabel></CheckSubDiv>
          <CheckSubDiv><Checkbox type="checkbox" id='category8' name='miscellaneous'/><CheckLabel htmlFor='category8'>Miscellaneous</CheckLabel></CheckSubDiv>
        </Checkboxes>
      </CheckboxDiv>
      <CheckboxDiv>
        <Label>Condition</Label>
        <Checkboxes>
          <CheckSubDiv><Checkbox type="checkbox" id='condition1' name='new'/><CheckLabel htmlFor='condition1'>New</CheckLabel></CheckSubDiv>
          <CheckSubDiv><Checkbox type="checkbox" id='condition2' name='likeNew'/><CheckLabel htmlFor='condition2'>Like new</CheckLabel></CheckSubDiv>
          <CheckSubDiv><Checkbox type="checkbox" id='condition3' name='used'/><CheckLabel htmlFor='condition3'>Used</CheckLabel></CheckSubDiv>
          <CheckSubDiv><Checkbox type="checkbox" id='condition4' name='worn'/><CheckLabel htmlFor='condition4'>Worn</CheckLabel></CheckSubDiv>
        </Checkboxes>
      </CheckboxDiv>
      <AddItemModal show={addItemModal} onHide={() => setAddItemModal(false)} />
    </SidebarContainer>
  );
};

export default Sidebar;