import {
  StyledInfosFormsContainer,
  StyledInfosFormsColsContainer,
  StyledInfosFormsColContainer,
  StyledButtonContainer,
  StyledInfosFormsColLeftContainer,
} from '../../styles/StyledInfosForms';
import { Flex } from '../../styles/genericStyles/GenericContainers';
import { StyledTitleH2, StyledTitleH4 } from '../../styles/genericStyles/GenericTitles';
import InfosEvalInput from './InfosEvalInput';
import { StyledButton } from '../../styles/genericStyles/StyledButtons';
import InfosEvalCheckbox from './InfosEvalCheckbox';
import InfosEvalDropdown from './InfosEvalDropdown';
import InfosEvalDatepicker from './InfosEvalDatepicker';

export default function InfosForm() {
  const locations = ['Abries', 'Marseille', 'Toulon', 'Hyeres'];
  const sportLevels = ['Amateur', 'Expert'];

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <StyledInfosFormsContainer>
      <form onSubmit={(event) => handleSubmit(event)}>
        <StyledTitleH4>Informations préalables</StyledTitleH4>
        <StyledInfosFormsColsContainer>
          <StyledInfosFormsColLeftContainer>
            <div>
              <StyledTitleH2>LA STRUCTURE ORGANISATRICE</StyledTitleH2>
              <InfosEvalInput label="Nom de la structure" wide />
              <InfosEvalInput
                label="Nombre de personnes composant la structure"
                wide
              />
            </div>
          </StyledInfosFormsColLeftContainer>
          <StyledInfosFormsColContainer>
            <StyledTitleH2>LA MANIFESTATION SPORTIVE</StyledTitleH2>
            <InfosEvalInput label="Nom de la manisfestation sportive" wide />
            <InfosEvalInput label="Nombre de participants" />
            <Flex start>
              <InfosEvalInput label="Adresse de la manifestation" />
            </Flex>
            <Flex start>
              <InfosEvalDropdown label="Lieu" options={locations} />
              <InfosEvalCheckbox label="Montrer la carte" />
            </Flex>
            <Flex start>
              <InfosEvalInput label="Type d'activité sportive" />
              <InfosEvalDropdown label="Niveau sportif" options={sportLevels} />
            </Flex>
            <Flex start>
              <InfosEvalDatepicker label="Date de début" />
              {/* <InfosDatePickerForm label="Date de fin" /> */}
            </Flex>
          </StyledInfosFormsColContainer>
        </StyledInfosFormsColsContainer>
        <StyledButtonContainer>
          <StyledButton type="submit" width="25rem" height="4rem">Suivant</StyledButton>
        </StyledButtonContainer>
      </form>
    </StyledInfosFormsContainer>
  );
}
