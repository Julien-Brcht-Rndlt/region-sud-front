import styled from 'styled-components';
import FaqHeader from './FaqHeader';

export const StyledFaqHomeContainer = styled.div`
  display: flex;
  border: 5px solid red;
  width: 100%;
  height: 600px;
`;

export default function FaqFome() {
  return (
    <>
      <FaqHeader />
      <StyledFaqHomeContainer />
    </>
  );
}
