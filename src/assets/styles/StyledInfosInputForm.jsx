import styled from 'styled-components';

export const StyledInfosInputLabel = styled.label`
  color: ${(props) => props.theme.darkGreyFeatureColor};
`;

export const StyledInfosInput = styled.input`
  border: 0px;
  border-color: ${(props) => props.theme.secondaryFeatureColor};
`;
