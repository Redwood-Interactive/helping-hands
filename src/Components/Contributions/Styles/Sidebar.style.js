import styled from 'styled-components';

export const SidebarContainer = styled.div`
  height: ${props => props.height};
  width: 325px;
  /* border: 3px solid black; */
  /* background-color: yellow; */
  position: fixed;
  left: 0;
  top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

`;

export const AddBtn = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 2px solid black;
  font-size: 25px;
  cursor: pointer;
  background-color: ;
  &:hover {

  }
`;

export const SearchDiv = styled.form`
  margin: 25px 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SearchSubDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const SearchBar = styled.input`
  width: 70%;
  margin-right: 5px;
`;

export const SearchBtn = styled.button`
  width: 30%;
  /* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px; */
  border: 1px solid black;
  border-radius: 5px;
`;

export const LocationDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 25px;
`;

export const LocationSubDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;


export const ZipInput = styled.input`

`;

export const RadiusSelect = styled.select`
  height: 30px;
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