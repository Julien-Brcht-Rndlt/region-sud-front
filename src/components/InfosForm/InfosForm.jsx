import StyledSubTitle from '../../assets/styles/genericStyles/StyledSubTitle';
import InfosInputForm from './InfosInputForm';
import Button from '../Button';

export default function InfosForm() {
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
        <InfosInputForm label="Nombre de participants" />
        <InfosInputForm label="Type d'activité sportive" />
      </div>
      <div>
        <Button label="Suivant" />
      </div>
    </div>
  );
}
