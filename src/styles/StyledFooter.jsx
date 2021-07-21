import styled from 'styled-components';
import { FlexCol, Center } from './generics/GenericContainers';
import { device } from './theme';

export const FooterContainer = styled(FlexCol)`
  justify-content: space-around;
  align-items: center;
  background-color: rgb(0, 90, 255);
  height: 577px;
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
  height: 424px;
  width: 60%;
  padding: 25px;
  @media ${device.mobileS} {
    width: auto;
  }
  @media ${device.mobileL} {
    width: auto;
  }
  @media ${device.tablet} {
    width: 650px;
  }
  @media ${device.laptop} {
    width: 900px;
  }
  @media ${device.laptopL} {
    width: 1350px;
  }
  @media ${device.desktop} {
    width: 2400px;
  }
`;

export const FooterTextsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  @media ${device.mobileS} {
    font-size: 10px;
    width: 250px;
    flex-direction: column;
    align-items: center;
  }
  @media ${device.mobileL} {
    font-size: 12px;
    width: 325px;
    height: auto;
  }
  @media ${device.tablet} {
    width: auto;
    display: flex;
    height: 150px;
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
  width: 60%;
  background-color: rgb(0, 90, 255);
  list-style-type: none;
  transform: translate(0, -55px);
  @media ${device.mobileS} {
    width: 160px;
    padding: 5px;
    flex-direction: column;
    align-items: center;
  }
  @media ${device.mobileL} {
    font-size: 8px;
    width: 225px;
  }
  @media ${device.tablet} {
    font-size: 8px;
    width: 500px;
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
    width: 750px;
  }
`;

export const FooterLinksALink = styled.a`
  color: #fff;
  text-decoration: none;
  @media ${device.mobileS} {
    font-size: 10px;
    width: 200px;
  }
  @media ${device.mobileL} {
    font-size: 11px;
    width: 325px;
    height: auto;
  }
  @media ${device.tablet} {
    font-size: 11px;
  }
  @media ${device.laptop} {
    font-size: 12px;
  }
  @media ${device.laptopL} {
    font-size: 13px;
    height: auto;
  }
  @media ${device.desktop} {
    font-size: 15px;
  }
`;
