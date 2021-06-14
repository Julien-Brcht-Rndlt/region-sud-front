import StyledSubTitle from '../../styles/genericStyles/StyledSubTitle';
import StyledPreSubTitle from '../../styles/StyledPreSubTitle';
import {
  StyledInfosFormsContainer,
  StyledInfosFormsColsContainer,
  StyledInfosFormsColContainer,
  StyledButtonContainer,
  StyledInfosFormsColLeftContainer,
} from '../../styles/StyledInfosForms';
import { Flex } from '../../styles/genericStyles/GenericContainers';
import InfosInputForm from './InfosInputForm';
import { StyledButton } from '../../styles/genericStyles/StyledButtons';
import InfosCheckBoxForm from './InfosCheckBoxForm';
import InfosDropdownForm from './InfosDropdownForm';
import InfosDatePickerForm from './InfosDatePickerForm';

export default function InfosForm() {
  const locations = ['Abries', 'Marseille', 'Toulon', 'Hyeres'];
  const sportLevels = ['Amateur', 'Expert'];

  return (
    <StyledInfosFormsContainer>
      <StyledPreSubTitle content="Informations préalables" />
      <StyledInfosFormsColsContainer>
        <StyledInfosFormsColLeftContainer>
          <div>
            <StyledSubTitle subtitle="La structure organisatrice" />
            <InfosInputForm label="Nom de la structure" wide />
            <InfosInputForm
              label="Nombre de personnes composant la structure"
              wide
            />
          </div>
        </StyledInfosFormsColLeftContainer>
        <StyledInfosFormsColContainer>
          <StyledSubTitle subtitle="La manifestation sportive" />
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
            <InfosDatePickerForm label="Date de fin" />
          </Flex>
        </StyledInfosFormsColContainer>
      </StyledInfosFormsColsContainer>
      <StyledButtonContainer>
        <StyledButton>Suivant</StyledButton>
      </StyledButtonContainer>
    </StyledInfosFormsContainer>
  );
}
