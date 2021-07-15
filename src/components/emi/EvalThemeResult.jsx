import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FlexCol } from '../../styles/generics/GenericContainers';
import EvalThemeScoring from './EvalThemeScoring';
import EvalThemeShouldList from './EvalThemeShouldList';
import FunnelContext from '../../contexts/FunnelContext';

export const StyledThemeResultContainer = styled(FlexCol)`
  width: auto;
  margin-top: 150px;
  height: 100%;
`;

export const SpaceBetween = styled.div``;

export default function EvalThemeResult({ themeId }) {
  const [shouldList/* , setShouldList */] = useState([]);
  const { funnel } = useContext(FunnelContext);
  const currTheme = funnel.themes.find((theme) => theme.id === parseInt(themeId, 10));

  return (
    <StyledThemeResultContainer>
      <EvalThemeScoring themeId={themeId} themeTitle={currTheme.title} />
      <EvalThemeShouldList shouldList={shouldList} shouldTitle="Pour vous améliorer :" />
    </StyledThemeResultContainer>
  );
}

EvalThemeResult.propTypes = {
  themeId: PropTypes.number.isRequired,
};
