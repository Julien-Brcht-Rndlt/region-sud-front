import styled from 'styled-components';
import { Flex } from '../../styles/genericStyles/GenericContainers';
import Logo from '../Logo';
import NavBar from './NavBar';
import SiteName from './SiteName';

export const StyledHeader = styled(Flex)`
  width: auto;
  border: solid 5px ${(props) => props.theme.blueFeatureColor};
  height: 95px;
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
        <Logo
          src="./assets/Logo_region_sud.png"
          width={191}
          height={109}
          alt="logo région sud"
        />
      </StyledHeader>
    </>
  );
}
