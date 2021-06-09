import StyledSubTitle from '../../assets/styles/genericStyles/StyledSubTitle';
import {
  StyledInfosFormsContainer,
  StyledInfosFormsColsContainer,
  StyledInfosFormsColContainer,
} from '../../assets/styles/StyledInfosForms';
import { FlexJustStart } from '../../assets/styles/genericStyles/StyledContainer';
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
      <span>Informations préalables</span>
      <StyledInfosFormsColsContainer>
        <StyledInfosFormsColContainer>
          <div>
            <StyledSubTitle subtitle="La structure organisatrice" />
            <InfosInputForm label="Nom de la structure" wide />
            <InfosInputForm
              label="Nombre de personnes composant la structure"
              wide
            />
          </div>
        </StyledInfosFormsColContainer>
        <StyledInfosFormsColContainer>
          <StyledSubTitle subtitle="La manifestation sportive" />
          <InfosInputForm label="Nom de la manisfestation sportive" wide />
          <InfosInputForm label="Nombre de participants" />
          <FlexJustStart>
            <InfosInputForm label="Adresse de la manifestation" />
            <InfosDropdownForm label="Lieu" options={locations} />
            <InfosCheckBoxForm label="Montrer la carte" />
          </FlexJustStart>
          <FlexJustStart>
            <InfosDatePickerForm label="Date de début" />
            <InfosDatePickerForm label="Date de fin" />
          </FlexJustStart>
          <FlexJustStart>
            <InfosInputForm label="Type d'activité sportive" />
            <InfosDropdownForm label="Niveau sportif" options={sportLevels} />
          </FlexJustStart>
        </StyledInfosFormsColContainer>
      </StyledInfosFormsColsContainer>
      <div>
        <Button label="Suivant" />
      </div>
    </StyledInfosFormsContainer>
  );
}
