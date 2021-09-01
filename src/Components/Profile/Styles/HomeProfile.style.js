import styled from 'styled-components';

export const HomeProfileContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 160px;
  margin-bottom: 50px;
`;

export const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SettingsIcon = styled.img`
  height: 50px;
  width: 50px;
`;

export const UserInfoContainer = styled.div`
  width: 250px;
  margin-left: 50px;
  font-size: 22px;
`;

export const HomeProfileImg = styled.img`
  height: 170px;
  width: 170px;
  border-radius: 50%;
  object-fit: cover;
`;

export const RemoveIcon = styled.i`
  position: absolute;
  left: 195px;
  top: 5px;
  z-index: 2;
`;

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Active = styled.div`
  padding-left: 5px;
  color: green;
  font-weight: bold;
`;

export const Fulfilled = styled.div`
  padding-left: 5px;
  color: red;
  font-weight: bold;
`;
