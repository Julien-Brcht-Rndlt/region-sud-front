import styled from 'styled-components';
import Logo from './Logo';
import NavBar from './NavBar';
import SiteName from './SiteName';

export const StyledHeader = styled.div`
  width: auto;
  border: solid 5px #005aff;
  height: 95px;
  padding: 15px;
  background-color: #005aff;
  display: flex;
  align-items: center;
`;

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
