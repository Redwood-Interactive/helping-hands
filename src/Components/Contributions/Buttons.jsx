import React from 'react';
import { ButtonsDiv, AnotherDiv, FilterDiv, FilterDropdown, AddSearchDiv, AddBtn, Search, BtnLabel }
from './Styles/Buttons.style.js';

const Buttons = () => {
  return (
    <ButtonsDiv>
      <AnotherDiv>
      <FilterDiv>
        Filter:
        <BtnLabel>Category</BtnLabel>
        <FilterDropdown>
          <option hidden>Category</option>
          <option>None</option>
          <option>Food</option>
          <option>Beverage</option>
          <option>Clothing</option>
          <option>Fur</option>
          <option>Toys</option>
          <option>household</option>
        </FilterDropdown>

        <BtnLabel>Location</BtnLabel>
        <FilterDropdown>

        </FilterDropdown>

        <BtnLabel>Condition</BtnLabel>
        <FilterDropdown>
          <option hidden>Condition</option>
          <option>New</option>
          <option>Like new</option>
          <option>Used</option>
          <option>Worn</option>
          <option></option>
        </FilterDropdown>

      </FilterDiv>
      <AddSearchDiv>
        <AddBtn>Add new+</AddBtn>
        <Search placeholder="Search..."></Search>
      </AddSearchDiv>
      </AnotherDiv>
    </ButtonsDiv>
  );
};

export default Buttons;