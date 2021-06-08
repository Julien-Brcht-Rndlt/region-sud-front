import styled from 'styled-components';
import { StyledFormItemLabel } from './genericStyles/StyledFormItem';

export const StyledInfosDropdownLabel = styled(StyledFormItemLabel)``;

export const StyledInfosDropdown = styled.select`
  border: none;
  border-color: ${(props) => props.theme.secondaryFeatureColor};
  background-color: ${(props) => props.theme.secondaryFeatureColor};
  padding: 5px 15px 5px 15px;
  width: 60%;
`;
