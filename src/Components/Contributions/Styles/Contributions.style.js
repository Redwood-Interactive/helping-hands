import styled from 'styled-components';

export const ContributionsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 100px;
  margin-bottom: 150px;
`;

export const ContributionTitle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100vw;
  font-size: 50px;
  padding: 20px;
`;

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ButtonsDiv = styled.div`
  position: relative;
  width: 100%;
  display: inline-flex;
  justify-content: center;
  margin-top: 45px;
`;

export const Button = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 50px;
  /* border: 2px solid black; */
  border-radius: 25px;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 8px 0px;
  transition: 0.2s ease-in;
  &:hover {
    background-color: #E5EAE5;
  }
`;