import PropTypes from 'prop-types';
import StyledButton from '../assets/styles/genericStyles/StyledButton';

export default function Button({ text }) {
  return <StyledButton src="#">{text}</StyledButton>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
