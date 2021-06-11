import StyledSubTitle from '../../styles/genericStyles/StyledSubTitle';
import StyledPreSubTitle from '../../styles/StyledPreSubTitle';
import {
  StyledInfosFormsContainer,
  StyledInfosFormsColsContainer,
  StyledInfosFormsColContainer,
  StyledButtonContainer,
  StyledInfosFormsColLeftContainer,
} from '../../styles/StyledInfosForms';
import { FlexJustStart } from '../../styles/genericStyles/StyledContainer';
import InfosInputForm from './InfosInputForm';
import Button from '../Button';
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
          <FlexJustStart>
            <InfosInputForm label="Adresse de la manifestation" />
          </FlexJustStart>
          <FlexJustStart>
            <InfosDropdownForm label="Lieu" options={locations} />
            <InfosCheckBoxForm label="Montrer la carte" />
          </FlexJustStart>
          <FlexJustStart>
            <InfosInputForm label="Type d'activité sportive" />
            <InfosDropdownForm label="Niveau sportif" options={sportLevels} />
          </FlexJustStart>
          <FlexJustStart>
            <InfosDatePickerForm label="Date de début" />
            <InfosDatePickerForm label="Date de fin" />
          </FlexJustStart>
        </StyledInfosFormsColContainer>
      </StyledInfosFormsColsContainer>
      <StyledButtonContainer>
        <Button label="Suivant" />
      </StyledButtonContainer>
    </StyledInfosFormsContainer>
  );
}
