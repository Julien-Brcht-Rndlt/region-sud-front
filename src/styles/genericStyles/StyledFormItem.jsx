import styled from 'styled-components';

export const StyledFormItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 25.5rem;
  margin-bottom: 30px;
`;

export const StyledFormItemLabel = styled.label`
  color: ${(props) => props.theme.blueFeatureColor};
  font-weight: 600;
  font-family: ${(props) => props.theme.fontFamilyNormal};
  margin-bottom: 10px;
`;
