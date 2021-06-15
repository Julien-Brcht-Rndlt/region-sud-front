import styled from 'styled-components';
import { StyledTitleH1 } from '../../styles/genericStyles/GenericTitles';
import { FlexSpace } from '../../styles/genericStyles/GenericContainers';
import { StyledRoundedButton } from '../../styles/genericStyles/StyledButtons';
import RequireElmtsList from './RequireElmtsList';

const StyledTitleH4 = styled.h4`
  font-size: 20px;
  padding: 25px;
  color: ${(props) => props.theme.blueFeatureColor};
`;

export const StyledBorderH1 = styled.div`
  border-bottom: 10px solid ${(props) => props.theme.yellowFeatureColor};
  width: 80px;
`;

export const StyledColumnElmts = styled.div`
  padding: 25px;
`;

export const StyledBoxButtonElement = styled(FlexSpace)`
  width: 60%;
  padding: 70px;
`;

export default function RequireInfos() {
  return (
    <>
      <StyledColumnElmts>
        <StyledTitleH1>Avant de commencer l&#39;évaluation de mon évènement :</StyledTitleH1>
        <StyledBorderH1 />
        <StyledTitleH4> J&#39;aurais besoin de :</StyledTitleH4>
        <RequireElmtsList />
        <StyledBoxButtonElement around>
          <StyledRoundedButton>C&#39;est parti !</StyledRoundedButton>
          <StyledRoundedButton glassy>Où trouver toutes ces pièces ?</StyledRoundedButton>
        </StyledBoxButtonElement>
      </StyledColumnElmts>
    </>
  );
}
