import { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Flex } from '../../styles/generics/GenericContainers';
import FunnelDynamicButton from './FunnelDynamicButton';
import Theme from '../funnel/Theme';
import EvalThemeResult from './EvalThemeResult';
import QuickEvalNav from './QuickEvalNav';
import FunnelContext from '../../contexts/FunnelContext';
import EvalContext from '../../contexts/EvalContext';
import { COMPUTE_TOTAL_SCORE } from '../../reducers/actions';

export default function EvalProcess({ id }) {
  const [nextActive, setNextActive] = useState(false);
  const [prevActive, setPrevActive] = useState(false);
  const { funnel } = useContext(FunnelContext);
  const { evalState, evalDispatch } = useContext(EvalContext);
  const nbThemes = (funnel.themes && funnel.themes.length) || 0;

  const handleComplete = () => {
    evalDispatch({ type: COMPUTE_TOTAL_SCORE });
  };

  useEffect(() => {
    setPrevActive(id > 1);
    if (evalState && evalState.completedThemes) {
      setNextActive(evalState.completedThemes.find((themeId) => themeId === id));
    }
  });

  return (
    <>
      {id && (
        <>
          <Flex centre>
            <Theme id={id} />
            <EvalThemeResult themeId={id} />
            <QuickEvalNav />
          </Flex>
          <Flex center>
            <FunnelDynamicButton label="Précédent" active={prevActive} target={`/EmiEval/${parseInt(id, 10) - 1}#section-theme`} />
            {id < nbThemes ? (
              <FunnelDynamicButton label="Suivant" target={`/EmiEval/${parseInt(id, 10) + 1}#section-theme`} active={nextActive} />
            ) : (
              <FunnelDynamicButton label="Terminé" target="/EmiResult" active={nextActive} action={handleComplete} />
            )}
          </Flex>
        </>
      )}
    </>
  );
}

EvalProcess.propTypes = {
  id: PropTypes.string.isRequired,
};
