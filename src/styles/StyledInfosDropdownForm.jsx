import styled from 'styled-components';
import { StyledFormItemLabel } from './generics/StyledFormItem';

export const StyledInfosDropdownLabel = styled(StyledFormItemLabel)`
  font-weight: 600;
  font-family: ${(props) => props.theme.fontFamilyNormal};
  margin-bottom: 0px;
  padding-bottom: 10px;
`;

export const StyledInfosDropdown = styled.select`
  border: 1px solid ${(props) => props.theme.blueFeatureColor};
  background-color: ${(props) => props.theme.secondaryFeatureColor};
  padding: 10px 15px 15px 15px;
  width: 60%;
  margin-bottom: 25px;
`;
