import styled from 'styled-components';
import PropTypes from 'prop-types';

export const StyledTitleEval = styled.h3`
  color: ${(props) => props.theme.blueFeatureColor};
`;

export const StyledSubtitleEval = styled.h4`
  color: ${(props) => props.theme.blueFeatureColor};
  font-family: ${(props) => props.theme.fontFamilyNormal};
  font-size: 1rem;
`;

export default function EvalThemeScoring({ themeTitle, themeScore, scoreIcone }) {
    return (
      <div>
        <StyledSubtitleEval>Votre indice</StyledSubtitleEval>
        <StyledTitleEval>{themeTitle}</StyledTitleEval>
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