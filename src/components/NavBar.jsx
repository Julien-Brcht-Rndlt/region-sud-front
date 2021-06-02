import { BrowserRouter as Link } from 'react-router-dom';
import { StyledNavBar } from '../styles/StyledNavBar';

export default function NavBar() {
  return (
    <StyledNavBar>
      <ul>
        <li>
          <Link to="/">Acceuil</Link>
        </li>
        <li>
          <Link to="/">Evaluer mon impact environnemental</Link>
        </li>
        <li>
          <Link to="/">Etre accompagné</Link>
        </li>
        <li>
          <Link to="/">M informer</Link>
        </li>
      </ul>
    </StyledNavBar>
  );
}
