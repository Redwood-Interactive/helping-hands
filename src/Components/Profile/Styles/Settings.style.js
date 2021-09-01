import styled from 'styled-components';

export const InputContainer = styled.div`
margin: 175px 0 75px;
border-radius: 5px;
border: 1px solid black;
position: relative;
width: 40%;
top: 20%;
left: 29%;
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

export const AddrRow = styled.div`
  display: flex;
  align-items:
  justify-content: center;
`;

export const ImageItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 50%;
  padding: 10px;
`;

export const ImageRow = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  justify-content: space-between;
  width: 60%;
  padding: 10px;
`;

export const SettingRow = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  width: 72%;
  padding: 10px;
`;

export const ProfileIcon = styled.div`
  width: 50px;
  height: 50px;
`;

export const DropdownMenu = styled.div`
  position: relative;
  height: 100px;
  overflowY: scroll;
`;