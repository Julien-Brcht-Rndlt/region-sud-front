import { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import EvalContext from '../../contexts/EvalContext';
import { StyledTitleH3, StyledTitleH4 } from '../../styles/generics/GenericTitles';
/* 
export const StyledSubtitleH4 = styled.h4`
  color: ${(props) => props.theme.blueFeatureColor};
  font-family: ${(props) => props.theme.fontFamilyNormal};
  font-size: 1rem;
`; */

export const StyledEvalBox = styled(Flex)`
  width: 675px;
  height: 600px;
  padding: 110px;
  position: absolute;
`;

export const ContainerEvalReco = styled(FlexCol)`
  height: 55%;
  font-size: 13px;
`;

export const ImgCustom = styled.img``;

export default function EvalThemeScoring({ themeTitle, themeScore, scoreIconeshouldTitle }) {
  const { evalContext } = useContext(EvalContext);
  evalContext.score = 0;
  return (
    <>
      <StyledEvalBox>
        <StyledTitleH3>Votre indice</StyledTitleH3>
        <StyledTitleH4>{themeTitle}</StyledTitleH4>
        <h5>{shouldTitle}</h5>
        {themeScore > 0 && (
          <div>
            <img src={scoreIcone} alt="" />
          </div>
        )}
      </StyledEvalBox>
    </>
  );
}

EvalThemeScoring.propTypes = {
  themeTitle: PropTypes.string.isRequired,
  themeScore: PropTypes.number.isRequired,
  scoreIcone: PropTypes.string.isRequired,
};
