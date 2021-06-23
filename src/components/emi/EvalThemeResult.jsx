import PropTypes from 'prop-types';
import EvalThemeScoring from './EvalThemeScoring';

export default function EvalThemeResult({ title }) {
  return (
    <div>
      <EvalThemeScoring title={title} />
    </div>
  );
}

EvalThemeResult.propTypes = {
  title: PropTypes.string.isRequired,
};
