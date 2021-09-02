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
`;

export const Button = styled.div`
  position: relative;
  height: 50px;
  border: 2px solid black;
  border-radius: 25px;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
`;