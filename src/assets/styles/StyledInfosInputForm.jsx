import styled from 'styled-components';
import { StyledFormItemLabel } from './genericStyles/StyledFormItem';

export const StyledInfosInputLabel = styled(StyledFormItemLabel)`
  color: ${(props) => props.theme.blueFeatureColor};
  font-family: ${(props) => props.theme.fontFamilyNormal};
  font-weight: 600;
  width: 30rem;
`;

export const StyledInfosInput = styled.input`
  border: 1px solid #005aff;
  background: ${(props) => props.theme.secondaryFeatureColor};
  padding: 10px 15px 15px 15px;
  width: ${(props) => (props.wide ? '100%' : '70%')};
  margin-bottom: 20px;
`;
