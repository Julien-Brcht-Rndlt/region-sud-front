import PropTypes from 'prop-types';
import { Center } from '../../styles/generics/GenericContainers';

export default function FooterText({ title, lines = [] }) {
  let count = 0;
  return (
    <Center>
      <h4>{title}</h4>
      {
        lines.map((line) => {
          count += 1;
          return (
            <div key={`${title}${count}`}>{line}</div>
        );
        })
      }
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
