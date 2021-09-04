import styled from 'styled-components';

export const ProfileHistContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;

export const Text = styled.div`
  font-size: 27px;
  margin-bottom: 5px;
`;

export const HistoryContainer = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  width: 1030px;
  min-height: 435px;
  margin: auto;
  overflow: hidden;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContriButton = styled.div`
  flex-grow: 1;
  font-size: 24px;
  border-bottom: 1px solid black;
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
  font-size: 24px;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
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