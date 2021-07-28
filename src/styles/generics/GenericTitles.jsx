import styled from 'styled-components';
import { device } from '../theme';

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
@media ${device.mobileS} {
  font-family: ${(props) => props.theme.fontFamilyNormal};
  font-size: 0.9rem;
  margin: 20px 0;
  font-weight: lighter;
  }
  @media ${device.tablet} {
    font-size: 1.1em;
  }

  @media ${device.laptop} {
    font-size: 1.2em;
  }


`;
