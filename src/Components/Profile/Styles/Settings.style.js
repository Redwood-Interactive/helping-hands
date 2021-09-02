import Image from 'react-bootstrap/Image';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';


export const InputContainer = styled.div`
margin: 175px 0 75px;
border-radius: 5px;
border: 1px solid black;
position: relative;
flex-wrap: wrap;
width: 40%;
min-width: 400px;
top: 20%;
left: 30%;
`;

export const Img = styled.img`
heigth: 50px;
width: 50px;
`;

export const ImageEdit = styled(Image)`
height: 100px;
width: 100px;
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 10px;
`;

export const FormRow = styled.div`
  display: flex;
`;

export const SmallRow = styled.div`
  display: flex;
  width: 66%;
`;

export const Edit = styled(Button)`
height: 40px;
`;

export const Submit = styled(Button)`
width: 80px;
`;

export const ProfileIcon = styled.div`
color: black
`;

export const ImageRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 58%;
  padding: 10px;
`;

export const SettingRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 72%;
  padding: 10px;
`;

export const DropdownMenu = styled.div`
  position: relative;
  height: 100px;
  overflowY: scroll;
`;