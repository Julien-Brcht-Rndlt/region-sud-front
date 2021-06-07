import styled from 'styled-components';

export const StyledInfosDropdownLabel = styled.span`
  color: ${(props) => props.theme.greyFeatureColor};
`;

export const StyledInfosDropdown = styled.select`
  border: 0px;
  border-color: ${(props) => props.theme.secondaryFeatureColor};
`;
