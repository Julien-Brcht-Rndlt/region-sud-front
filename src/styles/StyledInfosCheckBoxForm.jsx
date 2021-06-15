import styled from 'styled-components';
import { StyledFormItemLabel } from './generics/StyledFormItem';

export const StyledInfosCheckBoxLabel = styled(StyledFormItemLabel)`
  font-weight: 600;
  font-family: ${(props) => props.theme.fontFamilyNormal};
  margin-bottom: 10px;
`;

export const StyledInfosCheckBox = styled.input.attrs({ type: 'checkbox' })`
  border: 1px solid ${(props) => props.theme.blueFeatureColor};
`;
