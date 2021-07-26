import styled from 'styled-components';
import { Flex } from '../../styles/generics/GenericContainers';
import Logo from '../Logo';
import NavBar from './NavBar';
import SiteName from './SiteName';
import logoRegion from '../../assets/img/logoRegion.png';

export const StyledHeader = styled(Flex)`
  width: auto;
  border: solid 5px ${(props) => props.theme.blueFeatureColor};
  padding: 15px;
  background-color: ${(props) => props.theme.blueFeatureColor};
  font-family: ${(props) => props.theme.fontFamilyNormal};
`;

export default function Header() {
  return (
    <>
      <StyledHeader valign="center">
        <SiteName />
        <NavBar />
        <Logo src={logoRegion} width={191} height={109} alt="logo région sud" />
      </StyledHeader>
    </>
  );
}
