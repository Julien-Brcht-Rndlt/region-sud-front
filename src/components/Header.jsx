import { StyledHeader } from '../styles/StyledHeader';
import Logo from './Logo';
import NavBar from './NavBar';

export default function Header() {
  return (
    <>
      <StyledHeader>
        {Text}
        <Logo />
        <NavBar />
      </StyledHeader>
    </>
  );
}
