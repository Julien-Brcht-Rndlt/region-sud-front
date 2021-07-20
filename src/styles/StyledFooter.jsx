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
    font-size: 10px;
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
    font-size: 10px;
    width: auto;
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
`;

export const FooterLinksList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 60%;
  background-color: rgb(0, 90, 255);
  list-style-type: none;
  transform: translate(0, -55px);
  @media ${device.mobileS} {
    font-size: 10px;
    width: 160px;
    padding: 5px;
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterLinksALink = styled.a`
  color: #fff;
  text-decoration: none;
  @media ${device.mobileS} {
    font-size: 10px;
    width: 200px;
  }
`;
