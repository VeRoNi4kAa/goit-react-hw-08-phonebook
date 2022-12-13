import styled from 'styled-components';

export const UserContainer = styled.div`
  list-style: none;
  display: inline;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
export const LogButton = styled.button`
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
`;
