import PropTypes from 'prop-types';

export default function ThemeEvalShouldList({ shouldTitle, shouldList }) {
  return (
    <div>
      <h5>{shouldTitle}</h5>
      <ul>
        {
          shouldList.map(
            (should) => <li>{should}</li>
          )
        }
      </ul>
    </div>
  );
}

ThemeEvalShouldList.propTypes = {
    shouldTitle: PropTypes.string,
    shouldList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ThemeEvalShouldList.defaultProps = {
    shouldTitle: '',
};