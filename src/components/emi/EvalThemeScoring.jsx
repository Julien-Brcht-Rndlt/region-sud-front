import { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StyledTitleH3 } from '../../styles/generics/GenericTitles';
import { Flex, FlexCol } from '../../styles/generics/GenericContainers';
import EvalContext from '../../contexts/EvalContext';
import Scoring from './scoring.json';

export const StyledEvalBox = styled(Flex)`
  width: 605px;
  height: 100px;
`;

export const ContainerEvalReco = styled(FlexCol)`
  height: 100%;
  font-size: 13px;
`;

export const StyledLabel = styled.span`
  font-size: 20px;
  color: ${(props) => props.theme.blueFeatureColor};
`;

export const ImgScoring = styled.img`
  height: 150px;
  width: 150px;
`;

export default function EvalThemeScoring({ themeId, themeTitle }) {
  const [scoreRepr, setScoreRepr] = useState({});
  const { evalState } = useContext(EvalContext);

  useEffect(() => {
    if (evalState && evalState.themes) {
      const evalTheme = evalState.themes.find((theme) => theme.id === parseInt(themeId, 10));
      if (evalTheme) {
        const { score } = evalTheme;
        if (score !== undefined || score !== 0) {
          let scaleReprs = Scoring.themes_scoring
          .find((themeScoring) => themeScoring.id === parseInt(themeId, 10)).scores_reprs;
          scaleReprs = scaleReprs
          .filter((scaleRepr) => scaleRepr.min <= score && scaleRepr.max >= score);
        setScoreRepr(scaleReprs[0]);
        }
      }
    }
  });

  useEffect(() => {
    setScoreRepr({});
  }, [themeId]);

    return (
      <StyledEvalBox center>
        <ContainerEvalReco center>
          <StyledLabel>Votre indice</StyledLabel>
          <StyledTitleH3>{themeTitle}</StyledTitleH3>
          {
            scoreRepr && (
            <div>
              <ImgScoring src={scoreRepr.icone} alt={scoreRepr.level} />
            </div>
            )
          }
        </ContainerEvalReco>
      </StyledEvalBox>
    );
}

EvalThemeScoring.propTypes = {
    themeId: PropTypes.string.isRequired,
    themeTitle: PropTypes.string.isRequired,
};
