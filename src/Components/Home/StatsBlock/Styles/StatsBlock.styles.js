import styled from 'styled-components';

export const StatsBlockContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

//leave the semicolon off of color here adding it will break something
export const StatsBlockSection = styled.section`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;

export const StatsBlockTray = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;

`;

export const StatsBlockCounter = styled.div`
  color: black;
  display: grid;
  grid-gap: 30px;
  text-align: center;
`;

export const StatsBlockNumber = styled.div`
  font-size: 45px;
  margin: 10px 0;
`;
