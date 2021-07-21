import { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FlexCol } from '../../styles/generics/GenericContainers';
import EvalThemeScoring from './EvalThemeScoring';
import EvalThemeShouldList from './EvalThemeShouldList';
import EvalContext from '../../contexts/EvalContext';
import FunnelContext from '../../contexts/FunnelContext';

export const StyledThemeResultContainer = styled(FlexCol)`
  width: auto;
  margin-top: 150px;
  height: 100%;
`;

export const SpaceBetween = styled.div``;

export default function EvalThemeResult({ themeId }) {
  const [shouldList, setShouldList] = useState([]);
  const { evalState } = useContext(EvalContext);
  const { funnel } = useContext(FunnelContext);
  const currTheme = funnel.themes && funnel.themes
    .find((theme) => theme.id === parseInt(themeId, 10));

  useEffect(() => {
    if (evalState && evalState.themes) {
      const evalTheme = evalState.themes.find((theme) => theme.id === parseInt(themeId, 10));
      if (evalTheme && evalTheme.shouldList) {
        setShouldList(evalTheme.shouldList);
      }
    }
  });

  useEffect(() => {
    setShouldList([]);
  }, [themeId]);

  return (
    <>
      {
        currTheme && (
          <StyledThemeResultContainer>
            <EvalThemeScoring themeId={themeId} themeTitle={currTheme.title} />
            <EvalThemeShouldList shouldList={shouldList} shouldTitle="Pour vous améliorer :" />
          </StyledThemeResultContainer>
        )
      }
    </>
  );
}

EvalThemeResult.propTypes = {
  themeId: PropTypes.number.isRequired,
};
