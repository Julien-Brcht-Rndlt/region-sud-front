import StyledSubTitle from '../../assets/styles/genericStyles/StyledSubTitle';
import InfosInputForm from './InfosInputForm';
import Button from '../Button';
import InfosCheckBoxForm from './InfosCheckBoxForm';
import InfosDropdownForm from './InfosDropdownForm';

export default function InfosForm() {
  const locations = ['Abries', 'Marseille', 'Toulon', 'Hyeres'];
  const sportLevels = ['Amateur', 'Expert'];

  return (
    <div>
      <div>
        <span>Informations préalables</span>
        <StyledSubTitle title="La structure organisatrice" />
        <InfosInputForm label="Nom de la structure" />
        <InfosInputForm label="Nombre de personnes composant la structure" />
      </div>
      <div>
        <StyledSubTitle title="La manifestation sportive" />
        <InfosInputForm label="Nom de la manisfestation sportive" />
        <InfosInputForm label="Adresse" />
        <InfosDropdownForm label="Lieu" options={locations} />
        <InfosCheckBoxForm label="Montrer la carte" />
        <InfosInputForm label="Nombre de participants" />
        <InfosInputForm label="Type d'activité sportive" />
        <InfosDropdownForm label="Niveau sportif" options={sportLevels} />
      </div>
      <div>
        <Button label="Suivant" />
      </div>
    </div>
  );
}
