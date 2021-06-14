import styled from 'styled-components';
import { FlexCol, Center } from './genericStyles/GenericContainers';

export const FooterContainer = styled(FlexCol)`
  justify-content: space-around;
  align-items: center;
  background-color: rgb(0, 90, 255);
  height: 577px;
  padding: 15px;
  color: #fff;
`;

export const FooterContWithBorder = styled(Center)`
  border: 2px solid white;
  outline-offset: 0.1rem;
  height: 424px;
  width: 60%;
  padding: 25px;
`;

export const FooterTextsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const FooterLinksList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 60%;
  background-color: rgb(0, 90, 255);
  list-style-type: none;
  transform: translate(0, -55px);
`;

export const FooterLinksALink = styled.a`
  color: #fff;
  text-decoration: none;
`;
