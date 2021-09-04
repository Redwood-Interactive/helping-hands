import styled from 'styled-components';

export const FeedbackTextArea = styled.textarea`
  height: 60px;
  width: 250px;
  font-size: 14px;
  z-index: 9;
`;

export const FeedbackForm = styled.form`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

export const FeedbackSubmitButton = styled.button`
  font-size: 16px;
  color: white;
  border: 1px solid #EB6A00;
  background-color: #EB6A00;
  border-radius: 2px;
  padding: 8px;
  cursor: pointer;
  margin-top: 5px;
`;

export const FeedbackTitle = styled.div`
  font-size: 20px;
  position: relative;
  right: 30px;
`;