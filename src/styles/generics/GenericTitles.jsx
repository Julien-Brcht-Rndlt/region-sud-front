import styled from 'styled-components';

export const StyledTitleH1 = styled.h1`
  ${(props) => props.theme.titleFont};
`;

export const StyledTitleH2 = styled.h2`
  ${(props) => props.theme.titleFont};
  font-size: 1.7rem;
`;

export const StyledTitleH6Black = styled.h6`
  ${(props) => props.theme.titleFont};
  font-size: 1.7rem;
  color: ${(props) => props.theme.blackFeatureColor};
`;

export const StyledTitleH3 = styled.h3`
  color: ${(props) => props.theme.blueFeatureColor};
  font-family: ${(props) => props.theme.fontFamilyFeature};
  font-weight: ${(props) => props.theme.fontWeightBold};
  font-size:18px;
`;

export const StyledTitleH4 = styled.h4`
  color: ${(props) => props.theme.blueFeatureColor};
  font-family: ${(props) => props.theme.fontFamilyNormal};
  font-weight: ${(props) => props.theme.fontWeightNormal};
  font-size: 15px;
`;

export const StyledTitleP = styled.p`
  font-family: ${(props) => props.theme.fontFamilyNormal};
  font-size: 1rem;
`;
