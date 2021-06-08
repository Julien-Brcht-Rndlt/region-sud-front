import StyledSubTitle from '../../assets/styles/genericStyles/StyledSubTitle';
import {
  StyledInfosFormsContainer,
  StyledInfosFormsColsContainer,
} from '../../assets/styles/StyledInfosForms';
import { FlexJustCenter } from '../../assets/styles/genericStyles/StyledContainer';
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
        <div>
          <StyledSubTitle subtitle="La structure organisatrice" />
          <InfosInputForm label="Nom de la structure" wide />
          <InfosInputForm
            label="Nombre de personnes composant la structure"
            wide
          />
        </div>
        <div>
          <StyledSubTitle subtitle="La manifestation sportive" />
          <InfosInputForm label="Nom de la manisfestation sportive" wide />
          <FlexJustCenter>
            <InfosInputForm label="Nombre de participants" />
            <InfosInputForm label="Adresse de la manifestation" />
          </FlexJustCenter>
          <FlexJustCenter>
            <InfosDropdownForm label="Lieu" options={locations} />
            <InfosCheckBoxForm label="Montrer la carte" />
          </FlexJustCenter>
          <FlexJustCenter>
            <InfosDatePickerForm label="Date de début" />
            <InfosDatePickerForm label="Date de fin" />
          </FlexJustCenter>
          <FlexJustCenter>
            <InfosInputForm label="Type d'activité sportive" />
            <InfosDropdownForm label="Niveau sportif" options={sportLevels} />
          </FlexJustCenter>
        </div>
      </StyledInfosFormsColsContainer>
      <div>
        <Button label="Suivant" />
      </div>
    </StyledInfosFormsContainer>
  );
}
