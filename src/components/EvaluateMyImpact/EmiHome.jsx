import styled from 'styled-components';
import EmiContainerHome from './EmiContainerHome';

export const StyledEmiHome = styled.div`
  width: auto;
  height: 900px;
  display: flex;
  flex-direction: column;
`;

export default function EmiHome() {
  return (
    <StyledEmiHome>
      <EmiContainerHome />
    </StyledEmiHome>
  );
}
