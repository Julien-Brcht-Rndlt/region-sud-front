import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Flex, FlexCol } from '../../styles/generics/GenericContainers';
import { StyledTitleH3, StyledTitleH4 } from '../../styles/generics/GenericTitles';

export const StyledEvalBox = styled(Flex)`
  width: 300px;
  height: 300px;
  padding: 110px;
  border: solid 3px black;
  position: absolute;
`;

export const ContainerEvalReco = styled(FlexCol)`
  height: 20%;
  font-size: 13px;
`;

export const ImgCustom = styled.img``;

export default function EvalThemeScoring({ title, themeScore, scoreIcone }) {
  return (
    <>
      <StyledEvalBox>
        <StyledTitleH3>Votre indice</StyledTitleH3>
        <StyledTitleH4>{title}</StyledTitleH4>
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
  title: PropTypes.string.isRequired,
  themeScore: PropTypes.number.isRequired,
  scoreIcone: PropTypes.string.isRequired,
};
