import { StyledNavBar } from '../../styles/StyledNavBar';
import NavBarItem from './NavBarItem';

export default function NavBar() {
  const navbarLinks = [
    {
      id: 1,
      content: 'Accueil',
      path: '/',
    },
    {
      id: 2,
      content: 'Evaluer mon impact environnemental',
      path: '/EmiStart',
    },
    {
      id: 3,
      content: 'Etre accompagné',
      path: '/FaqHome',
    },
    {
      id: 4,
      content: "M'informer",
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
