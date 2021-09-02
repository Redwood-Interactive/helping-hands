import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 250px;
  height: 60vh;
  position: relative;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const AddBtn = styled.div`
  width: 210px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 2px solid black;
  font-size: ${props => props.font};
  cursor: pointer;
  background-color: #f7f7f7;
  &:hover {
    background-color: #e5eae5;
  }
`;

export const SearchDiv = styled.form`
  margin: 25px 50px;
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
  /* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px; */
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

export const Checkbox = styled.input`

`;

export const CheckLabel = styled.label`
  position: relative;
  bottom: 5px;
  left: 5px;
`;