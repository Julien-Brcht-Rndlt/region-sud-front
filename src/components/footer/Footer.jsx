import {
  FooterContainer,
  FooterContWithBorder,
  FooterTextsContainer,
} from '../../styles/StyledFooter';
import FooterLinks from './FooterLinks';
import FooterText from './FooterText';
import Logo from '../Logo';
import logoRegion from '../../assets/img/logoRegion.png';

export default function Footer() {
  let count = 0;
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
          src={logoRegion}
          width={240}
          height={100}
          alt="Logo Région-Sud dans pieds de page"
        />
        <FooterTextsContainer>
          {footerTextContent.map((content) => {
            count += 1;
            return (
              <>
                <FooterText title={`${content.title}`} lines={content.lines} />
                <div style={{ display: 'none' }}>{count}</div>
              </>
          );
            })}
        </FooterTextsContainer>
        <FooterLinks links={footerLinks} />
      </FooterContWithBorder>
    </FooterContainer>
  );
}
