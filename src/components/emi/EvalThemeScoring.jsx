import { useContext } from 'react';
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
  const { eventEval, score } = useContext(EvalContext);
  // const {  } = evalContext;
  console.log(eventEval);
  console.log(themeId);
  console.log(score);
  console.log(Scoring.themes_scoring[themeId].scores_reprs);

  let scoresReprs = Scoring.themes_scoring[themeId].scores_reprs;
  scoresReprs = scoresReprs.filter((scoreRepr) => scoreRepr.min <= score && scoreRepr.max >= score);

  const [scoreRepr] = scoresReprs;
  console.log(scoreRepr.icone);

    return (
      <StyledEvalBox center>
        <ContainerEvalReco center>
          <StyledLabel>Votre indice</StyledLabel>
          <StyledTitleH3>{themeTitle}</StyledTitleH3>
          {
            scoreRepr && <div><ImgScoring src={scoreRepr.icone} alt="" /></div>
          }
        </ContainerEvalReco>
      </StyledEvalBox>
    );
}

EvalThemeScoring.propTypes = {
    themeId: PropTypes.number.isRequired,
    themeTitle: PropTypes.string.isRequired,
};
