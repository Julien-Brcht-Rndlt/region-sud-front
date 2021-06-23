import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Flex, FlexCol } from '../../styles/generics/GenericContainers';
import { StyledTitleH3, StyledTitleH4 } from '../../styles/generics/GenericTitles';

export const StyledEvalBox = styled(Flex)`
  width: 380px;
  height: 300px;
  border: solid 3px black;
`;

export const ContainerEvalReco = styled(FlexCol)`
  height: 20%;
  font-size: 13px;
`;

export const ImgCustom = styled.img``;

export default function EvalThemeScoring({ themeTitle, themeScore, scoreIcone }) {
  return (
    <>
      <StyledEvalBox>
        <ContainerEvalReco center>
          <StyledTitleH3>Votre indice</StyledTitleH3>
          <StyledTitleH4>{themeTitle}</StyledTitleH4>
          {themeScore > 0 && <img src={scoreIcone} alt="" />}
        </ContainerEvalReco>
      </StyledEvalBox>
    </>
  );
}

EvalThemeScoring.propTypes = {
  themeTitle: PropTypes.string.isRequired,
  themeScore: PropTypes.number.isRequired,
  scoreIcone: PropTypes.string.isRequired,
};
