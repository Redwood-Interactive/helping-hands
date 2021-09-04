import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 250px;
  height: ${props => props.height};
  position: relative;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.div`
  width: 100%;
  font-size: 35px;
  text-align: left;
  border-bottom: 2px solid black;
`;

export const AddBtn = styled.div`
  width: 210px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid black;
  position: relative;
  font-size: ${props => props.font};
  cursor: pointer;
  transition: 0.2s ease-in;
  &:hover {
    background-color: #e5eae5;
  }
  margin-top: 15px;
  margin-bottom: 25px;
`;

export const SearchDiv = styled.form`
  margin-top: 15px;
  width: 210px;
  display: flex;
  flex-direction: column;
`;

export const SearchSubDiv = styled.div`
  width: 210px;
  display: flex;
  flex-direction: column;
`;

export const SearchBar = styled.input`
  width: 210px;
  margin-right: 5px;
`;

export const SearchBtn = styled.button`
  width: 210px;
  border: 1px solid black;
  border-radius: 5px;
  margin-top: 5px;
`;

export const LocationDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 25px;
`;

export const LocationSubDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  width: 100%;
  flex-wrap: wrap;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;


export const ZipInput = styled.input`
  width: 100%;
`;

export const RadiusSelect = styled.select`
  height: 30px;
  width: 100%;
`;

export const CheckboxDiv = styled.div`
  width: 100%;
  justify-content: flex-start;
  margin-bottom: 25px;
`;

export const Checkboxes = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CheckSubDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Checkbox = styled.input ``;

export const CheckLabel = styled.label`
  position: relative;
  bottom: 5px;
  left: 5px;
`;