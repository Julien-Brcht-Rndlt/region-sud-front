import styled from 'styled-components';
import { StyledFormItemLabel } from './genericStyles/StyledFormItem';

export const StyledInfosCheckBoxLabel = styled(StyledFormItemLabel)``;

export const StyledInfosCheckBox = styled.input.attrs({ type: 'checkbox' })`
  border: 1px;
  border-color: ${(props) => props.theme.lightGreyFeatureColor};
`;
