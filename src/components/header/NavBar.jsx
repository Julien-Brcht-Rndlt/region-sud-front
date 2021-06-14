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
      path: '/EmiHome',
    },
    {
      id: 3,
      content: 'Etre accompagné',
      path: '/',
    },
    {
      id: 4,
      content: "M'informer",
      path: '/',
    },
  ];
  return (
    <StyledNavBar>
      {navbarLinks.map((link) => (
        <NavBarItem id={link.id} path={link.path} content={link.content} />
      ))}
    </StyledNavBar>
  );
}
