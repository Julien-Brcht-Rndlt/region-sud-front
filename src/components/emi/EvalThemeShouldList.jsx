import { useContext } from 'react';
import PropTypes from 'prop-types';
import EvalContext from '../../contexts/EvalContext';

export default function ThemeEvalShouldList({ shouldTitle, shouldList }) {
  const { evalContext } = useContext(EvalContext);
  if (evalContext) { console.log('eval context loaded'); }
  return (
    <div>
      <h5>{shouldTitle}</h5>
      <ul>
        {
          shouldList.map(
            // eslint-disable-next-line comma-dangle
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
