import styled from 'styled-components';

export const ItemsContainer = styled.div `
  width: 100%;
  /* height: 800px; */
  /* border: 3px solid black; */
  display: flex;
  justify-content: center;
  padding: 150px 50px;
`;

export const ItemsProducts = styled.div `
  display: flex;
  width: 1200px;
  /* border: 1px solid red; */
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.div `
  display: flex;
  margin: 15px;
  width: 225px;
  height: 325px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background: white;
  cursor: pointer;
  flex-direction: column;
  transition: 0.2s ease-in;
  overflow: hidden;
  border-radius: 10px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

export const ImageDiv = styled.div`
  position: relative;
  height: 225px;
  width: 100%;
`;

export const ItemImage = styled.img `
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CategoryDiv = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0;
  height: 0;
  border-bottom: 50px solid black;
  border-left: 50px solid transparent;
  opacity: .5;
`;

export const CategoryIcon = styled.div`
  position: absolute;
  bottom: -40px;
  right: 10px;
  color: white;
  opacity: 1;
`;

export const TextDiv = styled.div `
  position: relative;
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 8px;
`;

export const Title = styled.div `
  font-size: 20px;
`;

export const Location = styled.div `

`;

export const Time = styled.div `

`;