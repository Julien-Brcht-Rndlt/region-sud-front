import PropTypes from 'prop-types';
import { FooterTextContainer } from '../../assets/styles/StyledFooter';

export default function FooterText({ title, lines = [] }) {
  return (
    <FooterTextContainer>
      <h4>{title}</h4>
      {lines.map((line) => (
        <div>{line}</div>
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
