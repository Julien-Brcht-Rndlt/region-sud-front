import PropTypes from 'prop-types';
import Theme from '../funnel/Theme';
import EvalThemeResult from './EvalThemeResult';

export default function EvalProcess({ id }) {
  return (
    <>
      {
        id && (
          <>
            <Theme id={id} />
            <EvalThemeResult themeId={id} />
          </>
        )
      }
    </>
  );
}

EvalProcess.propTypes = {
  id: PropTypes.string,
};

EvalProcess.defaultProps = {
  id: null,
};
