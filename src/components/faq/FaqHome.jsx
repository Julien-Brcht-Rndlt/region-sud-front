import styled from 'styled-components';
import FaqHeader from './FaqHeader';
import FaqFooter from './FaqFooter';
import { StyledTitleH2Black } from '../../styles/genericStyles/GenericTitles';
import FaqQuestionsList from './FaqQuestionsList';

export const StyledFaqHomeContainer = styled.div`
  display: flex;
  width: 100%;
  height: 600px;
`;

export const StyledFaqTitleH2Container = styled.div`
  padding: 25px;
  height: 30px;
  margin-left: 50px;
`;

export default function FaqFome() {
  return (
    <>
      <FaqHeader />
      <StyledFaqTitleH2Container>
        <StyledTitleH2Black>Foire aux questions</StyledTitleH2Black>
      </StyledFaqTitleH2Container>
      <StyledFaqHomeContainer>
        <FaqQuestionsList />
      </StyledFaqHomeContainer>
      <FaqFooter />
    </>
  );
}
