import {
  StyledInfosFormsContainer,
  StyledInfosFormsColsContainer,
  StyledInfosFormsColContainer,
  StyledButtonContainer,
  StyledInfosFormsColLeftContainer,
} from '../../styles/StyledInfosForms';
import { Flex } from '../../styles/generics/GenericContainers';
import { StyledTitleH2, StyledTitleH4 } from '../../styles/generics/GenericTitles';
import InfosInputForm from './InfosInputForm';
import { StyledButton } from '../../styles/generics/GenericButtons';
import InfosCheckBoxForm from './InfosCheckBoxForm';
import InfosDropdownForm from './InfosDropdownForm';
import InfosDatePickerForm from './InfosDatePickerForm';

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
              <InfosInputForm label="Nom de la structure" wide />
              <InfosInputForm
                label="Nombre de personnes composant la structure"
                wide
              />
            </div>
          </StyledInfosFormsColLeftContainer>
          <StyledInfosFormsColContainer>
            <StyledTitleH2>LA MANIFESTATION SPORTIVE</StyledTitleH2>
            <InfosInputForm label="Nom de la manisfestation sportive" wide />
            <InfosInputForm label="Nombre de participants" />
            <Flex start>
              <InfosInputForm label="Adresse de la manifestation" />
            </Flex>
            <Flex start>
              <InfosDropdownForm label="Lieu" options={locations} />
              <InfosCheckBoxForm label="Montrer la carte" />
            </Flex>
            <Flex start>
              <InfosInputForm label="Type d'activité sportive" />
              <InfosDropdownForm label="Niveau sportif" options={sportLevels} />
            </Flex>
            <Flex start>
              <InfosDatePickerForm label="Date de début" />
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
