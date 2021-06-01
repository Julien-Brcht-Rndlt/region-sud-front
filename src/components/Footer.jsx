import { FooterContainer, FooterContWithBorder } from '../styles/StyledFooter';
import Logo from './Logo';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContWithBorder>
        <Logo
          src="./logo_region_footer.png"
          width="174px"
          height="94px"
          alt="Logo Région-Sud dans pieds de page"
        />
        <div>FooterText components HERE</div>
      </FooterContWithBorder>
    </FooterContainer>
  );
}
