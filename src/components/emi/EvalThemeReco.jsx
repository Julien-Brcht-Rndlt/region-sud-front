import styled from 'styled-components';
import { Flex, FlexCol } from '../../styles/generics/GenericContainers';
import { StyledTitleH2, StyledTitleH1 } from '../../styles/generics/GenericTitles';
import soleil from '../../assets/img/soleil.PNG';

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

export default function EvalThemeRecoBody() {
  return (
    <>
      <StyledEvalBox>
        <ContainerEvalReco center>
          <StyledTitleH2>Votre indice</StyledTitleH2>
          <StyledTitleH1>Gestion et valorisation des déchets</StyledTitleH1>
          <ImgCustom src={soleil} alt="soleil" />
          <StyledTitleH1>Pour vous améliorer :</StyledTitleH1>
          <p>Recommandation Question 1</p>
          <p>Recommandation Question 2</p>
          <p>Recommandation Question 3</p>
          <p>Vous pourrez voir toutes les recommandatations à la fin de l&#39;évaluation.</p>
        </ContainerEvalReco>
      </StyledEvalBox>
    </>
  );
}
