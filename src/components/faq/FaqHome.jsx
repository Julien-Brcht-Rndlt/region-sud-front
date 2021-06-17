import styled from 'styled-components';
import FaqHeader from './FaqHeader';
import FaqFooter from './FaqFooter';
import { StyledTitleH6Black } from '../../styles/genericStyles/GenericTitles';
import FaqQuestionsList from './FaqQuestionsList';

export const StyledFaqContainerQuestions = styled.div`
  display: flex;
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
