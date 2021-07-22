import { StyledNavBar } from '../../styles/StyledNavBar';
import NavBarItem from './NavBarItem';

export default function NavBar() {
  const navbarLinks = [
    {
      id: 1,
      content: 'ACCUEIL',
      path: '/',
    },
    {
      id: 2,
      content: 'ÉVALUER MON IMPACT',
      path: '/EmiStart',
    },
    {
      id: 3,
      content: 'ÊTRE ACCOMPAGNÉ',
      path: '/FaqHome',
    },
    {
      id: 4,
      content: "M'INFORMER",
      path: '/EmiResult',
    },
  ];
  return (
    <StyledNavBar>
      <ul>
        {navbarLinks.map((link) => (
          <NavBarItem id={link.id} path={link.path} content={link.content} />
        ))}
      </ul>
    </StyledNavBar>
  );
}
