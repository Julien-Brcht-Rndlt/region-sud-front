import { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StyledTitleH3, StyledTitleH4 } from '../../styles/generics/GenericTitles';
import EvalContext from '../../contexts/EvalContext';
import Scoring from './scoring.json';

export const StyledSubtitleH4 = styled.h4`
  color: ${(props) => props.theme.blueFeatureColor};
  font-family: ${(props) => props.theme.fontFamilyNormal};
  font-size: 1rem;
`;

export default function EvalThemeScoring({ themeId, themeTitle }) {
  const { evalContext } = useContext(EvalContext);
  const { score } = evalContext;

  const scoresReprs = Scoring.themes_scoring[themeId - 1].scores_reprs;
  scoresReprs.filter((scoreRepr) => scoreRepr.min <= score && scoreRepr.max >= score);
  const [scoreRepr] = scoresReprs;

    return (
      <div>
        <StyledTitleH3>Votre indice</StyledTitleH3>
        <StyledTitleH4>{themeTitle}</StyledTitleH4>
        {
          scoreRepr && <div><img src={scoreRepr.icone} alt="" /></div>
        }
      </div>
    );
}

EvalThemeScoring.propTypes = {
    themeId: PropTypes.number.isRequired,
    themeTitle: PropTypes.string.isRequired,
};
