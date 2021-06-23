import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FlexCol } from '../../styles/generics/GenericContainers';
import EvalThemeScoring from './EvalThemeScoring';
import EvalThemeShouldList from './EvalThemeShouldList';

export const ScoreResultContainer = styled(FlexCol)``;

export default function EvalThemeResult({ themeTitle }) {
  const shouldList = ['recommandation 1', 'recommandation 2', 'recommandation 3', 'recommandation 4', 'recommandation 5'];
  return (
    <ScoreResultContainer end>
      <EvalThemeScoring themeTitle={themeTitle} themeScore={11} scoreIcone="" />
      <EvalThemeShouldList shouldList={shouldList} shouldTitle="Pour vous amiliorer :" />
    </ScoreResultContainer>
  );
}

EvalThemeResult.propTypes = {
  themeTitle: PropTypes.string.isRequired,
};
