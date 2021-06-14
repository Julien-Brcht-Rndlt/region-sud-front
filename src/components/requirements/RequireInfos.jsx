import styled from 'styled-components';
import { StyledTitleH1 } from '../../styles/genericStyles/StyledTitle';
import { FlexSpace } from '../../styles/genericStyles/GenericContainers';
import { StyledRoundedButton } from '../../styles/genericStyles/StyledButtons';
import RequireElmtsList from './RequireElmtsList';

const StyledTitleH4 = styled.h4``;

export const StyledBoxButtonElement = styled(FlexSpace)`
  width: 50%;
`;

export default function RequireInfos() {
  return (
    <>
      <StyledTitleH1>Avant de commencer l&#39;évaluation de mon évènement :</StyledTitleH1>
      <StyledTitleH4> J&#39;aurais besoin de :</StyledTitleH4>
      <RequireElmtsList />
      <StyledBoxButtonElement around>
        <StyledRoundedButton>C&#39;est parti !</StyledRoundedButton>
        <StyledRoundedButton glassy>
          Où trouver toutes ces pièces ?
        </StyledRoundedButton>
      </StyledBoxButtonElement>
    </>
  );
}
