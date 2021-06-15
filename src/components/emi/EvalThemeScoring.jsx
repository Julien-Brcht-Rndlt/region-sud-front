import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StyledSubTitleH3, StyledSubTitleH4 } from '../../styles/genericStyles/GenericTitles';

export const StyledSubtitleH4 = styled.h4`
  color: ${(props) => props.theme.blueFeatureColor};
  font-family: ${(props) => props.theme.fontFamilyNormal};
  font-size: 1rem;
`;

export default function EvalThemeScoring({ themeTitle, themeScore, scoreIcone }) {
    return (
      <div>
        <StyledSubTitleH3>Votre indice</StyledSubTitleH3>
        <StyledSubTitleH4>{themeTitle}</StyledSubTitleH4>
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
