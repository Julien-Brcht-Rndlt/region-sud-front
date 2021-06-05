import { StyledNavBar, StyledLink } from '../assets/styles/StyledNavBar';

export default function NavBar() {
  return (
    <StyledNavBar>
      <ul>
        <li>
          <StyledLink to="/">Acceuil</StyledLink>
        </li>
        <li>
          <StyledLink to="/">Evaluer mon impact environnemental</StyledLink>
        </li>
        <li>
          <StyledLink to="/">Etre accompagné</StyledLink>
        </li>
        <li>
          <StyledLink to="/">M&#39;informer</StyledLink>
        </li>
      </ul>
    </StyledNavBar>
  );
}
