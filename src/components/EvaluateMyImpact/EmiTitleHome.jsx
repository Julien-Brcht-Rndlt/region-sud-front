import styled from 'styled-components';

export const StyledEmiTitleHome = styled.div`
  display: block;
  height: 60px;
  margin: 15px;
`;

export default function EmiTitleHome() {
  return (
    <StyledEmiTitleHome>
      <h1>Avant de commencer l&#39;évaluation de mon évènement :</h1>
    </StyledEmiTitleHome>
  );
}
