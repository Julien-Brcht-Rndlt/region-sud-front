import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Flex, FlexCol } from '../../styles/generics/GenericContainers';
import { StyledTitleH3 } from '../../styles/generics/GenericTitles';

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

export const ImgCustom = styled.img``;

export default function EvalThemeScoring({ themeTitle, themeScore, scoreIcone }) {
  return (
    <StyledEvalBox center>
      <ContainerEvalReco center>
        <StyledLabel>Votre indice</StyledLabel>
        <StyledTitleH3>{themeTitle}</StyledTitleH3>
        {themeScore > 0 && <img src={scoreIcone} alt="" />}
      </ContainerEvalReco>
    </StyledEvalBox>
  );
}

EvalThemeScoring.propTypes = {
  themeTitle: PropTypes.string.isRequired,
  themeScore: PropTypes.number.isRequired,
  scoreIcone: PropTypes.string.isRequired,
};
