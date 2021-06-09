import {
  FooterContainer,
  FooterContWithBorder,
  FooterTextsContainer,
} from '../assets/styles/StyledFooter';
import FooterLinks from './FooterLinks';
import FooterText from './FooterText';
import Logo from './Logo';

export default function Footer() {
  const footerTextContent = [
    {
      title: 'CONTACT',
      lines: [
        'Service Mer et littoral',
        'RÉGION SUD',
        "PROVENCE-ALPES-CÔTE D'AZUR",
      ],
    },
    {
      title: '',
      lines: [
        'Du lundi au vendredi',
        '10h - 12h et 13h - 17h',
        '04 91 57 50 57',
      ],
    },
    {
      title: 'LIENS UTILES',
      lines: ['Site principal Ma Région Sud'],
    },
  ];

  const footerLinks = [
    {
      label: 'Plan de site',
      url: '/',
    },
    {
      label: 'Mentions légales',
      url: '/',
    },
    {
      label: 'Données personnelles',
      url: '/',
    },
    {
      label: 'Politique des cookies',
      url: '/',
    },
    {
      label: 'Gestion des cookies',
      url: '/',
    },
  ];

  return (
    <FooterContainer>
      <FooterContWithBorder>
        <Logo
          src="./logo_region_footer.png"
          width={174}
          height={94}
          alt="Logo Région-Sud dans pieds de page"
        />
        <FooterTextsContainer>
          {footerTextContent.map((content) => (
            <FooterText title={content.title} lines={content.lines} />
          ))}
        </FooterTextsContainer>
      </FooterContWithBorder>
      <FooterLinks links={footerLinks} />
    </FooterContainer>
  );
}
