import PropTypes from 'prop-types';
import StyledButtonEmpty from '../assets/styles/genericStyles/StyledButtonEmpty';

export default function Button({ text }) {
  return <StyledButtonEmpty src="#">{text}</StyledButtonEmpty>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
