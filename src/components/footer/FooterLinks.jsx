import PropTypes from 'prop-types';
import { FooterLinksList, FooterLinksALink } from '../../styles/StyledFooter';

export default function FooterLinks({ links = [] }) {
  let count = 0;
  return (
    <FooterLinksList>
      {
        links.map((link) => {
          count += 1;
          return (
            <li>
              <FooterLinksALink key={`${link.label}${count}`} href={link.url}>{link.label}</FooterLinksALink>
            </li>
          );
        })
      }
    </FooterLinksList>
  );
}

FooterLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.string,
  })),
};

FooterLinks.defaultProps = {
  links: [],
};
