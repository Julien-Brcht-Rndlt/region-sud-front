import { useState, useContext } from 'react';
import styled from 'styled-components';
import {
  StyledInfosFormsContainer,
  StyledInfosFormsColsContainer,
  StyledInfosFormsColContainer,
  StyledButtonContainer,
  StyledInfosFormsColLeftContainer,
} from '../../styles/StyledInfosForms';
import { Flex } from '../../styles/generics/GenericContainers';
import { StyledTitleH2, StyledTitleH4 } from '../../styles/generics/GenericTitles';
import { StyledButton } from '../../styles/generics/GenericButtons';
import OrgContext from '../../contexts/OrgContext';
import EventContext from '../../contexts/EventContext';
import InfosEvalInput from './InfosEvalInput';
import InfosEvalCheckbox from './InfosEvalCheckbox';
import InfosEvalDropdown from './InfosEvalDropdown';
import InfosEvalDatepicker from './InfosEvalDatepicker';

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
  const { orgContext } = useContext(OrgContext);
  if (orgContext) { console.log('org context loaded'); }
  const { eventContext } = useContext(EventContext);
  if (eventContext) { console.log('event context loaded'); }

  const [orgForm, setOrgForm] = useState(orgContext);
  const [eventForm, setEventForm] = useState(eventContext);

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
              <InfosEvalInput
                inputName="orgName"
                infosForm={orgForm}
                setInfosForm={setOrgForm}
                label="Nom de la structure"
                wide
              />
              <InfosEvalInput
                inputName="orgMembers"
                infosForm={orgForm}
                setInfosForm={setOrgForm}
                label="Nombre de personnes composant la structure"
                wide
              />
            </div>
          </StyledInfosFormsColLeftContainer>
          <StyledInfosFormsColContainer>
            <StyledContainerYellow>
              <StyledTitleH2Form>LA MANIFESTATION SPORTIVE</StyledTitleH2Form>
              <StyledBorderYellowH1 />
            </StyledContainerYellow>
            <StyledSpaceBetween />
            <InfosEvalInput
              inputName="eventName"
              infosForm={eventForm}
              setInfosForm={setEventForm}
              label="Nom de la manisfestation sportive"
              wide
            />
            <InfosEvalInput
              inputName="eventStaff"
              infosForm={eventForm}
              setInfosForm={setEventForm}
              label="Nombre de participants"
            />
            <Flex start>
              <InfosEvalInput
                inputName="eventAddr"
                infosForm={eventForm}
                setInfosForm={setEventForm}
                label="Adresse de la manifestation"
              />
            </Flex>
            <Flex start>
              <InfosEvalDropdown
                elmtFormName="eventLoc"
                infosForm={eventForm}
                setInfosForm={setEventForm}
                label="Lieu"
                options={locations}
              />
              <InfosEvalCheckbox label="Montrer la carte" />
            </Flex>
            <Flex start>
              <InfosEvalInput
                inputName="activity"
                infosForm={eventForm}
                setInfosForm={setEventForm}
                label="Type d'activité sportive"
              />
              <InfosEvalDropdown
                elmtFormName="sportLevels"
                infosForm={eventForm}
                setInfosForm={setEventForm}
                label="Niveau sportif"
                options={sportLevels}
              />
            </Flex>
            <Flex start>
              <InfosEvalDatepicker label="Date de début" />
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
