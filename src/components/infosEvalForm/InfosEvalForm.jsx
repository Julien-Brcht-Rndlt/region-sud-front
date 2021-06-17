import { useState, useContext, useReducer } from 'react';
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
import formReducer from '../../reducers/formReducer';
import { ADD_ORG, ADD_ORG_EVENT, COMPLETE } from '../../reducers/actions';
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
  const { eventContext } = useContext(EventContext);

  const [orgForm, setOrgForm] = useState(orgContext);
  const [orgEventForm, setEventForm] = useState(eventContext);

  const infosForm = {
    org: orgContext,
    event: eventContext,
  };

  const [dispatch] = useReducer(formReducer, infosForm);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: ADD_ORG, payload: orgForm });
    dispatch({ type: ADD_ORG_EVENT, payload: orgEventForm });
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
              infosForm={orgEventForm}
              setInfosForm={setEventForm}
              label="Nom de la manisfestation sportive"
              wide
            />
            <InfosEvalInput
              inputName="eventStaff"
              infosForm={orgEventForm}
              setInfosForm={setEventForm}
              label="Nombre de participants"
            />
            <Flex start>
              <InfosEvalInput
                inputName="eventAddr"
                infosForm={orgEventForm}
                setInfosForm={setEventForm}
                label="Adresse de la manifestation"
              />
            </Flex>
            <Flex start>
              <InfosEvalDropdown
                elmtFormName="eventLoc"
                infosForm={orgEventForm}
                setInfosForm={setEventForm}
                label="Lieu"
                options={locations}
              />
              <InfosEvalCheckbox label="Montrer la carte" />
            </Flex>
            <Flex start>
              <InfosEvalInput
                inputName="activity"
                infosForm={orgEventForm}
                setInfosForm={setEventForm}
                label="Type d'activité sportive"
              />
              <InfosEvalDropdown
                elmtFormName="sportLevels"
                infosForm={orgEventForm}
                setInfosForm={setEventForm}
                label="Niveau sportif"
                options={sportLevels}
              />
            </Flex>
            <Flex start>
              <InfosEvalDatepicker
                elmtFormName="eventStart"
                infosForm={orgEventForm}
                setInfosForm={setEventForm}
                label="Date de début"
              />
              <InfosEvalDatepicker
                elmtFormName="eventEnd"
                infosForm={orgEventForm}
                setInfosForm={setEventForm}
                label="Date de fin"
              />
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
