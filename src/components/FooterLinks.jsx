import PropTypes from 'prop-types';
import {
  FooterLinksList,
  FooterLinksALink,
} from '../assets/styles/StyledFooter';

export default function FooterLinks({ links = [] }) {
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

FooterLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string),
};

FooterLinks.defaultProps = {
  links: [],
};
