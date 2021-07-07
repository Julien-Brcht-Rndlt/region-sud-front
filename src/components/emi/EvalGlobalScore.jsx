import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StyledTitleH1, StyledTitleH2 } from '../../styles/generics/GenericTitles';
import { StyledButton } from '../../styles/generics/GenericButtons';
import {
  Flex,
  FlexCol,
  FlexSpace,
  Block,
} from '../../styles/generics/GenericContainers';
import Nuageux from '../../assets/img/nuageux.png';

export const StyledEvalGlobalContainer = styled(FlexSpace)`
  height: 45rem;
`;

const StyledEvalGlobalLeftCol = styled(Block)`
  padding: 50px;
  padding-left: 90px;
`;

const StyledEvalGlobalRightCol = styled(Block)`
  width: 50%;
`;

const StyledImgContainer = styled(FlexSpace)`
  width: 400px;
  border: blue solid 1px;
  background-color: grey;
  height: 20rem;
  justify-content: center;
  padding: 25px;
  margin-top: 20px;
`;

const StyledEvalGlobalButton = styled(StyledButton)`
  width: 250px;
  margin-top: 50px;
`;

const StyledEvalGlobalImg = styled.img`
  padding: 30px;
`;

const StyledEvalGlobalMoreButton = styled(StyledButton)`
  width: 250px;
  margin-top: 250px;
`;

const StyledShouldListContainer = styled(FlexCol)`
  width: 500px;
  height: 300px;
`;

const StyledYellowLine = styled.div`
  border-bottom: 10px solid ${(props) => props.theme.yellowFeatureColor};
  width: 80px;
  height: auto;
`;
const StyledTitleMyResult = styled(StyledTitleH1)`
  height: 15px;
`;

export default function EvalGlobalScore() {
  return (
    <StyledEvalGlobalContainer around>
      <StyledEvalGlobalLeftCol>
        <StyledTitleMyResult>Mon résultat</StyledTitleMyResult>
        <StyledYellowLine />
        <StyledImgContainer>
          <StyledEvalGlobalImg src={Nuageux} alt="des nuages..." />
        </StyledImgContainer>
        <Flex>
          <Link to="/pdf">
            <StyledEvalGlobalButton>Envoyer par mail</StyledEvalGlobalButton>
            <StyledEvalGlobalButton glassy> Imprimer </StyledEvalGlobalButton>
          </Link>
        </Flex>
      </StyledEvalGlobalLeftCol>
      <StyledEvalGlobalRightCol>
        <StyledShouldListContainer start halign="center">
          <div>Afficher recap icones</div>
          <span>Mes recommandations concernant</span>
          <StyledTitleH2>theme props</StyledTitleH2>
          <span>recommandations props blablabla </span>
          <span>recommandations props blablabla </span>
          <span>recommandations props blablabla </span>
        </StyledShouldListContainer>
        <StyledEvalGlobalMoreButton glassy>
          En savoir +
        </StyledEvalGlobalMoreButton>
      </StyledEvalGlobalRightCol>
    </StyledEvalGlobalContainer>
  );
}
