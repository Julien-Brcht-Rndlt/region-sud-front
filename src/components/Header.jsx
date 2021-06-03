import { StyledHeader } from '../styles/StyledHeader';
import Logo from './Logo';
import NavBar from './NavBar';
import SiteName from './SiteName';

export default function Header() {
  return (
    <>
      <StyledHeader>
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
