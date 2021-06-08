import styled from 'styled-components';

export const StyledInfosInputLabel = styled.label`
  color: ${(props) => props.theme.darkGreyFeatureColor};
`;

export const StyledInfosInput = styled.input`
  border: none;
  border-color: ${(props) => props.theme.secondaryFeatureColor};
  background: ${(props) => props.theme.secondaryFeatureColor};
  padding: 10px 15px 10px 15px;
  width: 70%;
`;
