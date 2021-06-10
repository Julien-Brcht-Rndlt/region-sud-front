import { StyledNavBar, StyledLink } from '../../styles/StyledNavBar';

export default function NavBar() {
  return (
    <StyledNavBar>
      <ul>
        <li>
          <StyledLink to="/">Accueil</StyledLink>
        </li>
        <li>
          <StyledLink to="/EmiHome">
            Evaluer mon impact environnemental
          </StyledLink>
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
