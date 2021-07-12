import styled from 'styled-components';
import { StyledTitleH1 } from '../../styles/generics/GenericTitles';
import { StyledButton } from '../../styles/generics/GenericButtons';
import {
  Flex,
  FlexSpace,
  Block,
} from '../../styles/generics/GenericContainers';
import ShouldGlobalComp from './ShouldGlobalComp';
import sunny from '../../assets/img/sunny.png';

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
          <StyledEvalGlobalImg src={sunny} alt="des nuages..." />
        </StyledImgContainer>
        <Flex>
          <StyledEvalGlobalButton>Envoyer par mail</StyledEvalGlobalButton>
          <StyledEvalGlobalButton glassy> Imprimer</StyledEvalGlobalButton>
          <StyledEvalGlobalButton glassy> En savoir +</StyledEvalGlobalButton>
        </Flex>
      </StyledEvalGlobalLeftCol>
      <StyledEvalGlobalRightCol>
        <ShouldGlobalComp />
      </StyledEvalGlobalRightCol>
    </StyledEvalGlobalContainer>
  );
}
