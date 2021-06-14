import styled from 'styled-components';

export const StyledTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
  margin-left: 50px;
  max-width: 500px;
`;

export const StyledTitleH1 = styled.h1`
  ${(props) => props.theme.titleFont};
`;

export const StyledTitleP = styled.p`
  font-family: ${(props) => props.theme.fontFamilyNormal};
  font-size: 1rem;
`;
