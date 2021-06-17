import styled from 'styled-components';
import FaqHeader from './FaqHeader';
import FaqFooter from './FaqFooter';
import { StyledTitleH6Black } from '../../styles/generics/GenericTitles';
import FaqQuestionsList from './FaqQuestionsList';
import { Flex } from '../../styles/generics/GenericContainers';

export const StyledFaqContainerQuestions = styled(Flex)`
  width: 100%;
  height: 410px;
`;

export const StyledFaqTitleH2Container = styled.div`
  padding: 25px;
  height: 100px;
  margin-left: 50px;
`;

export default function FaqFome() {
  return (
    <>
      <FaqHeader />
      <StyledFaqTitleH2Container>
        <StyledTitleH6Black>Foire aux questions</StyledTitleH6Black>
      </StyledFaqTitleH2Container>
      <StyledFaqContainerQuestions>
        <FaqQuestionsList />
      </StyledFaqContainerQuestions>
      <FaqFooter />
    </>
  );
}
