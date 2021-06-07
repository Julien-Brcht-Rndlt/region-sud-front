import styled from 'styled-components';

export const StyledInfosCheckBoxLabel = styled.label``;

export const StyledInfosCheckBox = styled.input.attrs({ type: 'checkbox' })`
  border: 1px;
  border-color: ${(props) => props.theme.lightGreyFeatureColor};
`;
