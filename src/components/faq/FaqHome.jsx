import styled from 'styled-components';
import FaqHeader from './FaqHeader';
import FaqFooter from './FaqFooter';
import { StyledTitleH2Black } from '../../styles/genericStyles/GenericTitles';
import FaqQuestionItem from './FaqQuestionItem';

export const StyledFaqHomeContainer = styled.div`
  display: flex;
  padding: 25px;
  border: 5px solid red;
  width: 100%;
  height: 600px;
`;

export default function FaqFome() {
  return (
    <>
      <FaqHeader />
      <StyledFaqHomeContainer>
        <StyledTitleH2Black>Foire aux questions</StyledTitleH2Black>
        <FaqQuestionItem />
      </StyledFaqHomeContainer>
      <FaqFooter />
    </>
  );
}
