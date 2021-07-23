import styled from 'styled-components';
import { FlexCol, Center } from './generics/GenericContainers';
import { device } from './theme';

export const FooterContainer = styled(FlexCol)`
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.blueFeatureColor};
  padding: 15px;
  color: #fff;
   @media ${device.mobileS} {
    width: auto;
  }
  @media ${device.mobileL} {
    width: auto;
  }
  @media ${device.tablet} {
    width: auto;
  }
  @media ${device.laptop} {
    width: auto;
  }
  @media ${device.laptopL} {
    width: auto;
  }
  @media ${device.desktop} {
    width: auto;
  }
`;

export const FooterContWithBorder = styled(Center)`
  border: 2px solid white;
  outline-offset: 0.1rem;
  padding: 25px;
  margin: 3rem;
`;

export const FooterTextsContainer = styled.div`

  display: flex;
  justify-content: space-around;
  @media ${device.mobileS} {
    font-size: 10px;
    flex-direction: column;
    align-items: center;
  }
  @media ${device.mobileL} {
    font-size: 12px;
  }
  @media ${device.tablet} {
    width: auto;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
  }
  @media ${device.laptop} {
    font-size: 14px;
  }
  @media ${device.laptopL} {
    font-size: 16px;
  }
  @media ${device.desktop} {
    font-size: 20px;
  }
`;

export const FooterLinksList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  transform: translate(0, -79px);
  @media ${device.mobileS} {
    padding: 5px;
    flex-direction: column;
    align-items: center;
  }
  @media ${device.mobileL} {
    font-size: 8px;
  }
  @media ${device.tablet} {
    font-size: 8px;
    justify-content: space-around;
    flex-direction: row;
  }
  @media ${device.laptop} {
    font-size: 12px;
  }
  @media ${device.laptopL} {
    height: auto;
  }
  @media ${device.desktop} {
    height: auto;
  }
`;

export const FooterLinksALink = styled.a`
  color: #fff;
  text-decoration: none;
  background-color: ${(props) => props.theme.blueFeatureColor};
  font-family: ${(props) => props.theme.fontFamilyNormal};
  padding: 1rem;
  @media ${device.mobileS} {
    font-size: 10px;
  }
  @media ${device.mobileL} {
    font-size: 11px;
    height: auto;
  }
  @media ${device.tablet} {
    font-size: 11px;
  }
  @media ${device.laptop} {
    font-size: 12px;
  }
  @media ${device.laptopL} {
    font-size: 1.3rem;
    height: auto;
  }
  @media ${device.desktop} {
    font-size: 15px;
  }
`;
