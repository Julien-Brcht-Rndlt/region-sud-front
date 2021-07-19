import { useContext } from 'react';
import styled from 'styled-components';
import { FlexCol } from '../../styles/generics/GenericContainers';
import EvalContext from '../../contexts/EvalContext';
import Scoring from './scoring.json';

export const ContainerProgressBar = styled(FlexCol)`
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  height: 475px;
  width: 70px;
  padding: 25px;
  margin-top: 10rem;
  border: solid 2px ${(props) => props.theme.lightGreyFeatureColor};
`;

export const ImgProgressBar = styled.img`
  height: 70px;
  width: 70px;
`;

export default function QuickEvalNav() {
  const { evalState } = useContext(EvalContext);

  const getScoreRepr = (themeId, score) => {
    if (score !== undefined || score !== null) {
      let scaleReprs = Scoring.themes_scoring
      .find((themeScoring) => themeScoring.id === parseInt(themeId, 10)).scores_reprs;
      scaleReprs = scaleReprs
      .filter((scaleRepr) => scaleRepr.min <= score && scaleRepr.max >= score);
    return scaleReprs[0];
    }
    return null;
  };

  return (
    <ContainerProgressBar>
      {
        evalState && evalState.themes && (
          evalState.themes.map((theme) => {
            const scoreRepr = getScoreRepr(theme.id, theme.score);
            return (
              <>
                <div>
                  Scoring:
                  {theme.score}
                </div>
                {
                  scoreRepr && <ImgProgressBar src={scoreRepr.icone} alt={scoreRepr.level} />
                }
              </>
            );
          })
        )
      }
    </ContainerProgressBar>
  );
}
