import styled from 'styled-components';

export const StatsBlockContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

//leave the semicolon off of color here adding it will break something
export const StatsBlockSection = styled.section`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #fff
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100vh;
`;

export const StatsBlockTray = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;

`;

export const StatsBlockCounter = styled.div`
  color: black;
  padding: 40px 20px;
  display: grid;
  grid-gap: 30px;
  text-align: center;
`;

export const StatsBlockNumber = styled.div`
  font-size: 45px;
  margin: 10px 0;
`;
