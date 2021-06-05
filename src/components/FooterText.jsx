import PropTypes from 'prop-types';
import {
  FooterTextContainer,
  FooterTextTitle,
  FooterTextLine,
} from '../assets/styles/StyledFooter';

export default function FooterText({ title, lines = [] }) {
  return (
    <FooterTextContainer>
      <FooterTextTitle>{title}</FooterTextTitle>
      {lines.map((line) => (
        <FooterTextLine>{line}</FooterTextLine>
      ))}
    </FooterTextContainer>
  );
}

FooterText.propTypes = {
  title: PropTypes.string,
  lines: PropTypes.arrayOf(PropTypes.string),
};

FooterText.defaultProps = {
  title: null,
  lines: [],
};
