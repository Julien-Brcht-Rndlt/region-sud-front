import styled from 'styled-components';

export const StyledFormItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 60%;
`;

export const StyledFormItemLabel = styled.label`
  color: ${(props) => props.theme.darkFeatureColor};
`;
