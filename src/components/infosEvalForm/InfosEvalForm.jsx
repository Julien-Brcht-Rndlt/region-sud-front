import { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import {
  StyledInfosFormsContainer,
  StyledInfosFormsColsContainer,
  StyledInfosFormsColContainer,
  StyledButtonContainer,
  StyledInfosFormsColLeftContainer,
} from '../../styles/StyledInfosForms';
import InfosEvalDynamicButton from './InfosEvalDynamicButton';
import { Flex } from '../../styles/generics/GenericContainers';
import { StyledTitleH2, StyledTitleH4 } from '../../styles/generics/GenericTitles';
import OrgContext from '../../contexts/OrgContext';
import EventContext from '../../contexts/EventContext';
import { ADD_INFOS } from '../../reducers/actions';
import InfosEvalInput from './InfosEvalInput';
import InfosEvalCheckbox from './InfosEvalCheckbox';
import InfosEvalDropdown from './InfosEvalDropdown';
import InfosEvalTableDatePicker from './InfosEvalTableDatePicker';
import { device } from '../../styles/theme';
import { StyledTitleHomeH2 } from '../home/TitleHome';

import {
  SPORT_AMATEUR,
  SPORT_EXPERT,
  ORG_TITLE_FORM,
  EVENT_TITLE_FORM,
  ORG_NAME_LABEL,
  ORG_STAFF_PAX_LABEL,
  EVENT_NAME_LABEL,
  EVENT_STAFF_PAX_LABEL,
  EVENT_ADDR_LABEL,
  EVENT_LOC_LABEL,
  EVENT_ACTIVITY_LABEL,
  EVENT_SPORT_LEVEL,
} from '../../constants';

export const StyledBorderYellowH1 = styled.div`
  border-bottom: 10px solid ${(props) => props.theme.yellowFeatureColor};
  width: 80px;
`;

export const StyledTitleH2Form = styled(StyledTitleH2)`
  @media ${device.mobileS} {
    font-size: 13px;
    width: 200px;
  }

  @media ${device.mobileM} {
    font-size: 13px;
    width: 230px;
  }

  @media ${device.mobileL} {
    font-size: 16px;
    width: 280px;
  }
  @media ${device.tablet} {
    font-size: 23px;
  }

  @media ${device.desktop} {
    font-size: 25px;
  }
`;
export const StyledContainerYellow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const StyledSpaceBetween = styled.div`
  height: 20px;
`;

export const ContainerDatePicker = styled(Flex)`
  @media ${device.mobileS} {
    flex-direction: column;
  }

  @media ${device.tablet} {
    flex-direction: column;
  }

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const BlackTitle = styled.h3`
  font-family: ${(props) => props.theme.fontFamilyFeature};
  color: black;
  font-weight: 400;
  margin: 5px 0;
`;

const Button = styled(StyledButtonContainer)`
  padding: 1rem 1.5rem;
`;

const mandatoryFields = ['orgName', 'eventName', 'eventAddr', 'eventLoc'];

export default function InfosForm() {
  const [active, setActive] = useState(false);
  const locations = ['Abries', 'Aix en Provence', 'Aubagne', 'Auch', 'Apt', 'Avignon', 'Bandol', 'Cassis', 'La Ciotat', 'Fréjus', 'Hyeres', 'Marignane', 'Marseille', 'Martigues', 'Sanary/mer', 'Toulon'];
  const sportLevels = [SPORT_AMATEUR, SPORT_EXPERT];
  const { org, dispatch } = useContext(OrgContext);
  const { orgEvent } = useContext(EventContext);
  const [orgForm, setOrgForm] = useState(org);
  const [orgEventForm, setEventForm] = useState(orgEvent);

  const infosForm = {
    org: orgForm,
    orgEvent: orgEventForm,
    active,
    setActive,
  };

  useEffect(() => {
    const filledFields = [];
    Object.keys(orgForm).forEach((key) => {
      if (orgForm[key] && orgForm[key] !== '') {
        filledFields.push(key);
      }
    });
    Object.keys(orgEventForm).forEach((key) => {
      if (orgEventForm[key] && orgEventForm[key] !== '') {
        filledFields.push(key);
      }
    });

    setActive(mandatoryFields.every((field) => filledFields.includes(field)));
  }, [orgForm, orgEventForm]);

  const handleSubmit = () => {
    dispatch({ type: ADD_INFOS, payload: { org: orgForm, orgEvent: orgEventForm } });
  };

  return (
    <StyledInfosFormsContainer id="section-form">
      <form>
        <StyledTitleH4>Informations préalables</StyledTitleH4>
        <StyledInfosFormsColsContainer>
          <StyledInfosFormsColLeftContainer>
            <div>
              <StyledContainerYellow>
                <StyledTitleHomeH2 style={{ color: 'black' }}>{ORG_TITLE_FORM}</StyledTitleHomeH2>
                <StyledBorderYellowH1 />
              </StyledContainerYellow>
              <StyledSpaceBetween />
              <InfosEvalInput inputName="orgName" infosForm={infosForm.org} setInfosForm={setOrgForm} label={ORG_NAME_LABEL} wide />
              <InfosEvalInput inputName="orgStaff" infosForm={infosForm.org} setInfosForm={setOrgForm} label={ORG_STAFF_PAX_LABEL} wide />
            </div>
          </StyledInfosFormsColLeftContainer>
          <StyledInfosFormsColContainer>
            <StyledContainerYellow>
              <StyledTitleHomeH2 style={{ color: 'black' }}>{EVENT_TITLE_FORM}</StyledTitleHomeH2>
              <StyledTitleH2Form style={{ display: 'none' }}>{EVENT_TITLE_FORM}</StyledTitleH2Form>
              <StyledBorderYellowH1 />
            </StyledContainerYellow>
            <StyledSpaceBetween />
            <InfosEvalInput inputName="eventName" infosForm={infosForm.orgEvent} setInfosForm={setEventForm} label={EVENT_NAME_LABEL} wide />
            <InfosEvalInput inputName="eventStaff" infosForm={infosForm.orgEvent} setInfosForm={setEventForm} label={EVENT_STAFF_PAX_LABEL} />
            <Flex start>
              <InfosEvalInput inputName="eventAddr" infosForm={infosForm.orgEvent} setInfosForm={setEventForm} label={EVENT_ADDR_LABEL} />
            </Flex>
            <Flex start>
              <InfosEvalDropdown
                elmtFormName="eventLoc"
                infosForm={infosForm.orgEvent}
                setInfosForm={setEventForm}
                label={EVENT_LOC_LABEL}
                options={locations}
              />
              <InfosEvalCheckbox label="Montrer la carte" />
            </Flex>
            <Flex start>
              <InfosEvalInput inputName="activity" infosForm={infosForm.orgEvent} setInfosForm={setEventForm} label={EVENT_ACTIVITY_LABEL} />
              <InfosEvalDropdown
                elmtFormName="sportLevel"
                infosForm={infosForm.orgEvent}
                setInfosForm={setEventForm}
                label={EVENT_SPORT_LEVEL}
                options={sportLevels}
              />
            </Flex>
            <ContainerDatePicker>
              <InfosEvalTableDatePicker
                infosForm={infosForm.orgEvent}
                setInfosForm={setEventForm}
              />
            </ContainerDatePicker>
          </StyledInfosFormsColContainer>
        </StyledInfosFormsColsContainer>
        <Button>
          <InfosEvalDynamicButton active={active} action={handleSubmit} />
        </Button>
      </form>
    </StyledInfosFormsContainer>
  );
}
