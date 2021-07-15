import { useContext } from 'react';
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import { StyledButton } from '../../styles/generics/GenericButtons';
import { Flex } from '../../styles/generics/GenericContainers';
import Theme from '../funnel/Theme';
import EvalThemeResult from './EvalThemeResult';
import QuickEvalNav from './QuickEvalNav';
import FunnelContext from '../../contexts/FunnelContext';
import EvalContext from '../../contexts/EvalContext';
import { COMPUTE_TOTAL_SCORE } from '../../reducers/actions';
import { DisabledButton } from '../infosEvalForm/InfosEvalDynamicButton';

export default function EvalProcess({ id }) {
  const { funnel } = useContext(FunnelContext);
  const { evalDispatch } = useContext(EvalContext);
  const nbThemes = funnel.themes.length;

  const handleComplete = () => {
    evalDispatch({ type: COMPUTE_TOTAL_SCORE });
  };

  return (
    <>
      {
        id && (
          <>
            <Flex centre>
              <Theme id={id} />
              <EvalThemeResult themeId={id} />
              <QuickEvalNav />
            </Flex>
            <Flex center>
              {id > 1 ? (
                <HashLink to={`/EmiEval/${parseInt(id, 10) - 1}#section-theme`}>
                  <StyledButton>Précédent</StyledButton>
                </HashLink>
              ) : (
                <DisabledButton>Précédent</DisabledButton>
              )}
              {id < nbThemes ? (
                <HashLink to={`/EmiEval/${parseInt(id, 10) + 1}#section-theme`}>
                  <StyledButton>Suivant</StyledButton>
                </HashLink>
              ) : (
                <HashLink
                  to="/EmiResult"
                  onClick={() => {
                  handleComplete();
                  }}
                >
                  <StyledButton>Terminé</StyledButton>
                </HashLink>
              )}
            </Flex>
          </>
        )
      }
    </>
  );
}

EvalProcess.propTypes = {
  id: PropTypes.string.isRequired,
};
