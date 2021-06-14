import PropTypes from 'prop-types';
import { Center } from '../../styles/genericStyles/GenericContainers';

export default function FooterText({ title, lines = [] }) {
  return (
    <Center>
      <h4>{title}</h4>
      {lines.map((line) => (
        <div>{line}</div>
      ))}
    </Center>
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
