import { StyledTitleH2 } from '../../styles/generics/GenericTitles';
import { StyledButton } from '../../styles/generics/GenericButtons';

export default function EvalGlobalScore() {
    return (
      <div>
        <div>
          <StyledTitleH2>Mon résultat</StyledTitleH2>

          <StyledButton>Envoyer par mail</StyledButton>
          <StyledButton glassy>Imprimer</StyledButton>
        </div>
        <div>
          <div>Diplay recap icones</div>
          <div>liste des reco en fonction des icones</div>
        </div>
        <StyledButton glassy>En savoir +</StyledButton>
      </div>
    );
}
