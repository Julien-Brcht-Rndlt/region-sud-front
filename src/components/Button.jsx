import PropTypes from 'prop-types';
import { StyledButton } from '../styles/genericStyles/StyledButton';

export default function Button({ label }) {
  return <StyledButton src="#">{label}</StyledButton>;
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
};
