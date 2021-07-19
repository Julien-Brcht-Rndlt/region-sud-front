import { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import { StyledButton } from '../../styles/generics/GenericButtons';
import { Flex } from '../../styles/generics/GenericContainers';
import FunnelDynamicButton from './FunnelDynamicButton';
import Theme from '../funnel/Theme';
import EvalThemeResult from './EvalThemeResult';
import QuickEvalNav from './QuickEvalNav';
import FunnelContext from '../../contexts/FunnelContext';
import EvalContext from '../../contexts/EvalContext';
import { COMPUTE_TOTAL_SCORE } from '../../reducers/actions';
import { DisabledButton } from '../infosEvalForm/InfosEvalDynamicButton';

export default function EvalProcess({ id }) {
  const [active, setActive] = useState(false);
  const { funnel } = useContext(FunnelContext);
  const { evalState, evalDispatch } = useContext(EvalContext);
  const nbThemes = funnel.themes.length;

  const handleComplete = () => {
    evalDispatch({ type: COMPUTE_TOTAL_SCORE });
  };

  useEffect(() => {
    if (evalState && evalState.completedThemes) {
      setActive(evalState.completedThemes.find((themeId) => themeId === id));
    }
  });

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
                <FunnelDynamicButton target={`/EmiEval/${parseInt(id, 10) + 1}#section-theme`} active={active}>Suivant</FunnelDynamicButton>
              ) : (
                <FunnelDynamicButton target="/EmiResult" active={active} action={handleComplete}>Terminé</FunnelDynamicButton>
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
