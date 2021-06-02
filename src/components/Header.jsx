import { StyledHeader } from '../styles/StyledHeader';
import Logo from './Logo';
import NavBar from './NavBar';
import SiteName from './SiteName';

export default function Header() {
  return (
    <>
      <StyledHeader>
        {Text}
        <Logo />
        <NavBar />
        <SiteName />
      </StyledHeader>
    </>
  );
}
