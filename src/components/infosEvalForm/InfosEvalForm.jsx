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
/* import formReducer from '../../reducers/formReducer'; */
import { ADD_INFOS /* , COMPLETE */ } from '../../reducers/actions';
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
  const [active, setActive] = useState(true);
  const [count, setCount] = useState(0);
  const locations = ['Abries', 'Marseille', 'Toulon', 'Hyeres'];
  const sportLevels = ['Amateur', 'Expert'];
  const { org, dispatch } = useContext(OrgContext);
  const { orgEvent } = useContext(EventContext);

  const [orgForm, setOrgForm] = useState(org);
  const [orgEventForm, setEventForm] = useState(orgEvent);

  const infosForm = {
    org: orgForm,
    orgEvent: orgEventForm,
    requiredFields,
    active,
    setActive,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit form');
    dispatch({ type: ADD_INFOS, payload: { org: orgForm, orgEvent: orgEventForm } });
  };

  return (
    <StyledInfosFormsContainer>
      <form onSubmit={() => handleSubmit()}>
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
                infosForm={infosForm.org}
                setInfosForm={setOrgForm}
                label="Nom de la structure"
                wide
              />
              <InfosEvalInput
                inputName="orgMembers"
                infosForm={infosForm.org}
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
              infosForm={infosForm.orgEvent}
              setInfosForm={setEventForm}
              label="Nom de la manisfestation sportive"
              wide
            />
            <InfosEvalInput
              inputName="eventStaff"
              infosForm={infosForm.orgEvent}
              setInfosForm={setEventForm}
              label="Nombre de participants"
            />
            <Flex start>
              <InfosEvalInput
                inputName="eventAddr"
                infosForm={infosForm.orgEvent}
                setInfosForm={setEventForm}
                label="Adresse de la manifestation"
              />
            </Flex>
            <Flex start>
              <InfosEvalDropdown
                elmtFormName="eventLoc"
                infosForm={infosForm.orgEvent}
                setInfosForm={setEventForm}
                label="Lieu"
                options={locations}
              />
              <InfosEvalCheckbox label="Montrer la carte" />
            </Flex>
            <Flex start>
              <InfosEvalInput
                inputName="activity"
                infosForm={infosForm.orgEvent}
                setInfosForm={setEventForm}
                label="Type d'activité sportive"
              />
              <InfosEvalDropdown
                elmtFormName="sportLevels"
                infosForm={infosForm.orgEvent}
                setInfosForm={setEventForm}
                label="Niveau sportif"
                options={sportLevels}
              />
            </Flex>
            <Flex start>
              <InfosEvalDatepicker
                elmtFormName="eventStart"
                infosForm={infosForm.orgEvent}
                setInfosForm={setEventForm}
                label="Date de début"
              />
              <InfosEvalDatepicker
                elmtFormName="eventEnd"
                infosForm={infosForm.orgEvent}
                setInfosForm={setEventForm}
                label="Date de fin"
              />
            </Flex>
          </StyledInfosFormsColContainer>
        </StyledInfosFormsColsContainer>
        <StyledButtonContainer>
          <StyledButton onClick={(event) => handleSubmit(event)} type="submit" width="25rem" height="4rem" disabled={!active}>
            Suivant
          </StyledButton>
        </StyledButtonContainer>
      </form>
    </StyledInfosFormsContainer>
  );
}
