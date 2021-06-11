import PropTypes from 'prop-types';
import StyledButtonEmpty from '../styles/genericStyles/StyledButton';

export default function Button({ text }) {
  return <StyledButtonEmpty src="#">{text}</StyledButtonEmpty>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
