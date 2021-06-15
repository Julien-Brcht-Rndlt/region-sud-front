import { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import EvalContext from '../../contexts/EvalContext';
import { StyledTitleH3, StyledTitleH4 } from '../../styles/genericStyles/GenericTitles';

export const StyledSubtitleH4 = styled.h4`
  color: ${(props) => props.theme.blueFeatureColor};
  font-family: ${(props) => props.theme.fontFamilyNormal};
  font-size: 1rem;
`;

export default function EvalThemeScoring({ themeTitle, themeScore, scoreIcone }) {
  const { eventEval } = useContext(EvalContext);
  if (eventEval) { console.log('eval context loaded'); }
    return (
      <div>
        <StyledTitleH3>Votre indice</StyledTitleH3>
        <StyledTitleH4>{themeTitle}</StyledTitleH4>
        {
          themeScore > 0 && <div><img src={scoreIcone} alt="" /></div>
        }
      </div>
    );
}

EvalThemeScoring.propTypes = {
    themeTitle: PropTypes.string.isRequired,
    themeScore: PropTypes.number.isRequired,
    scoreIcone: PropTypes.string.isRequired,
};
