import styled from 'styled-components';

export const ProfileHistContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;

export const Text = styled.div`
  font-size: 24px;
`;

export const HistoryContainer = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  width: 60%;
  min-height: 407px;
  margin: auto;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContriButton = styled.div`
  flex-grow: 1;
  font-size: 20px;
  border: 0.8px solid black;
  border-radius: 10px 0px 0px 0px;
  border-top: 0px;
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
  background-color: ${props => {
    if (props.selected) {
      return 'bisque';
    } else {
      return 'white';
    }
  }}
`;

export const ReqButton = styled.div`
  flex-grow: 1;
  font-size: 20px;
  border: 0.8px solid black;
  border-radius: 0px 10px 0px 0px;
  border-top: 0px;
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
  background-color: ${props => {
    if (!props.selected) {
      return 'bisque';
    } else {
      return 'white';
    }
  }}
`;