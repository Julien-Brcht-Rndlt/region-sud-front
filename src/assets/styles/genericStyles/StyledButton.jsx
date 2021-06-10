import styled from 'styled-components';

export const StyledButton = styled.button`
  color: #ffffff;
  background-color: #005aff;
  padding: 20px 25px 20px 25px;
  border: none;
  font-size: 1.2em;
  cursor: pointer;
  &:hover {
    background-color: #013da5;
    transition: 0.4s;
  }
`;

export const StyledButtonEmpty = styled.button`
  color: black;
  background-color: white;
  padding: 20px 25px 20px 25px;
  border: solid 1px black;
  border-radius: 10px;
  font-size: 1.2em;
  cursor: pointer;
  &:hover {
    background-color: #005aff;
    color: white;
    transition: 0.4s;
  }
`;

export const StyledButtonFilled = styled.button`
  color: #ffffff;
  background-color: #005aff;
  padding: 20px 25px 20px 25px;
  border-radius: 10px;
  font-size: 1.2em;
  cursor: pointer;
  &:hover {
    background-color: #013da5;
    transition: 0.4s;
  }
`;
