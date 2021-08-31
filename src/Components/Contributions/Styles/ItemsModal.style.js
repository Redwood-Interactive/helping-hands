import styled from 'styled-components';

export const ItemsImageContainer = styled.div`
  background: black;
`;

export const ItemsModalImages = styled.img`
  width: 100%;
  height: 350px;
  object-fit: contain;
`;

export const ItemsDetailContainer = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 250px;
`;

export const Profile = styled.div `
  text-align: center;
  border: 1px black solid;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 10px;
  height: 170px;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const UserPic = styled.img`
  width: 95px;
  height: 95px;
  object-fit: cover;
  border-radius: 50%;
  margin-left: 10px;
`;

export const NameCol = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  justify-content: center;
  font-size: 20px;
`;

export const BottomRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  font-size: 15px;
`;

export const ContactUserDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContactUser = styled.button`
  position: relative;
  height: 70px;
  width: 50%;
  border: 1px solid black;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 10px;
  top: 10px;
  font-size: 20px;
  transition: 0.1s ease-in;
  &:hover {
    background-color: #e2e0e0;
  }
  margin-right: ${props => props.margin || '0'};
`;

export const Information = styled.div`
  border: 1px black solid;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 10px;
  width: 65%;
  height: 250px;
  display: flex;
  flex-direction: column;
`;

export const UpperInformationContainer = styled.div`
  border-bottom: 1px black solid;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.div `
  /* border: 1px red solid; */
  width: 70%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 20px;
  padding-left: 10px;
`;

export const CategoryLocationContainer = styled.div `
  /* border: 1px red solid; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 10px;
  padding-left: 10px;
  border-left: 1px solid black;
`;

export const Category = styled.div `
  border-bottom: 1px black solid;
  text-align: center;
`;

export const Location = styled.div `
  /* border: 1px red solid; */
  text-align: center;
`;

export const Description = styled.div `
  /* border: 1px red solid; */
  text-align: left;
  margin: 15px;
  margin-top: 10px;
  font-size: 18px;
`;