import styled from 'styled-components';
import { StyledFormItemLabel } from './genericStyles/StyledFormItem';

export const StyledInfosInputLabel = styled(StyledFormItemLabel)``;

export const StyledInfosInput = styled.input`
  border: none;
  border-color: ${(props) => props.theme.secondaryFeatureColor};
  background: ${(props) => props.theme.secondaryFeatureColor};
  padding: 15px 15px 15px 15px;
  width: ${(props) => (props.wide ? '100%' : '70%')};
`;
