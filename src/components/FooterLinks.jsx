import { FooterLinksList, FooterLinksALink } from '../styles/StyledFooter';

export default function FooterLinks({ links }) {
  return (
    <FooterLinksList>
      {links.map((link) => (
        <li>
          <FooterLinksALink href={link.url}>{link.label}</FooterLinksALink>
        </li>
      ))}
    </FooterLinksList>
  );
}
