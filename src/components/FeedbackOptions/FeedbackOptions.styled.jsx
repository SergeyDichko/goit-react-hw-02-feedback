import styled from '@emotion/styled'


export const FeedbackList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 15px;
`;
export const FeedbackItem = styled.li`
  font-weight: 700;
  list-style-type: none;
`;

export const FeedbackBtn = styled.button`
  background-color: black;
  box-shadow: 3px 3px rgb(0 0 0 / 15%);
  padding: 5px;
  width: 75px;
  border: none;
  color: white;
  text-transform: capitalize;
  border-radius: 5px;
  cursor: pointer;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    transform: scale(1.3);
  }
`;