import styled from 'styled-components';
import {
  StyledInfosFormsContainer,
  StyledInfosFormsColsContainer,
  StyledInfosFormsColContainer,
  StyledButtonContainer,
  StyledInfosFormsColLeftContainer,
} from '../../styles/StyledInfosForms';
import { Flex } from '../../styles/genericStyles/GenericContainers';
import { StyledTitleH2, StyledTitleH4 } from '../../styles/genericStyles/GenericTitles';
import InfosInputForm from './InfosInputForm';
import { StyledButton } from '../../styles/genericStyles/StyledButtons';
import InfosCheckBoxForm from './InfosCheckBoxForm';
import InfosDropdownForm from './InfosDropdownForm';
import InfosDatePickerForm from './InfosDatePickerForm';

export const StyledBorderYellowH1 = styled.div`
  border-bottom: 10px solid ${(props) => props.theme.yellowFeatureColor};
  width: 80px;
`;

export const StyledTitleH2Form = styled(StyledTitleH2)`
  height: 10px;
`;
export const StyledContainerYellow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const StyledSpaceBetween = styled.div`
  height: 20px;
`;

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
              <StyledContainerYellow>
                <StyledTitleH2Form>LA STRUCTURE ORGANISATRICE</StyledTitleH2Form>
                <StyledBorderYellowH1 />
              </StyledContainerYellow>
              <StyledSpaceBetween />
              <InfosInputForm label="Nom de la structure" wide />
              <InfosInputForm label="Nombre de personnes composant la structure" wide />
            </div>
          </StyledInfosFormsColLeftContainer>
          <StyledInfosFormsColContainer>
            <StyledTitleH2Form>LA MANIFESTATION SPORTIVE</StyledTitleH2Form>
            <StyledBorderYellowH1 />
            <StyledSpaceBetween />
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
          <StyledButton type="submit" width="25rem" height="4rem">
            Suivant
          </StyledButton>
        </StyledButtonContainer>
      </form>
    </StyledInfosFormsContainer>
  );
}
