import PropTypes from 'prop-types';
import Theme from '../funnel/Theme';

export default function EvalProcess({ id }) {
  return (
    id && <Theme id={id} />
  );
}

EvalProcess.propTypes = {
  id: PropTypes.string,
};

EvalProcess.defaultProps = {
  id: null,
};
