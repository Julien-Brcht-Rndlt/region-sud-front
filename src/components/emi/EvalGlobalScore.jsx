import styled from 'styled-components';
import { StyledTitleH2 } from '../../styles/generics/GenericTitles';
import { StyledButton } from '../../styles/generics/GenericButtons';
import { FlexSpace } from '../../styles/generics/GenericContainers';
/* import nuageux from '../../assets/img/nuageux.png'; */
import Nuageux from '../../assets/img/nuageux.png';

export const StyledGlobalScoreContainer = styled(FlexSpace)`
  height: 40rem;
`;

export default function EvalGlobalScore() {
    return (
      <StyledGlobalScoreContainer around>
        <div>
          <StyledTitleH2>Mon résultat</StyledTitleH2>
          <div><img src={Nuageux} alt="des nuages..." /></div>
          <StyledButton>Envoyer par mail</StyledButton>
          <StyledButton glassy>Imprimer</StyledButton>
        </div>
        <div>
          <div>Afficher recap icones</div>
          <div>liste des reco en fonction des icones</div>
          <StyledButton glassy>En savoir +</StyledButton>
        </div>
      </StyledGlobalScoreContainer>
    );
}
