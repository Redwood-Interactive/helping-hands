import styled from 'styled-components';

export const ItemsContainer = styled.div `
  /* width: 83%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border: 1px solid black;
`;

export const ItemsProducts = styled.div `
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
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
  border-bottom: 70px solid black;
  border-left: 70px solid transparent;
  opacity: .5;
`;

export const CategoryIcon = styled.div`
  position: absolute;
  bottom: -60px;
  right: 15px;
  color: white;
  opacity: 1;
  font-size: 20px;
`;

export const AnotherDiv = styled.div``;

export const TextDiv = styled.div `
  position: relative;
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 8px;
  justify-content: space-between;
`;

export const Title = styled.div `
  font-size: 20px;
`;

export const Location = styled.div ``;

export const Time = styled.div ``;

