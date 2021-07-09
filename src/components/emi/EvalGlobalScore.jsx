import { /* useState,  */useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { StyledTitleH1, StyledTitleH2 } from '../../styles/generics/GenericTitles';
import { StyledButton } from '../../styles/generics/GenericButtons';
import {
  Flex,
  FlexCol,
  FlexSpace,
  Block,
} from '../../styles/generics/GenericContainers';
import Nuageux from '../../assets/img/nuageux.png';
import OrgContext from '../../contexts/OrgContext';
import EventContext from '../../contexts/EventContext';
import EvalContext from '../../contexts/EvalContext';

export const StyledEvalGlobalContainer = styled(FlexSpace)`
  height: 45rem;
`;

const StyledEvalGlobalLeftCol = styled(Block)`
  padding: 50px;
  padding-left: 90px;
`;

const StyledEvalGlobalRightCol = styled(Block)`
  width: 50%;
`;

const StyledImgContainer = styled(FlexSpace)`
  width: 400px;
  border: blue solid 1px;
  background-color: grey;
  height: 20rem;
  justify-content: center;
  padding: 25px;
  margin-top: 20px;
`;

const StyledEvalGlobalButton = styled(StyledButton)`
  width: 250px;
  margin-top: 50px;
`;

const StyledEvalGlobalImg = styled.img`
  padding: 30px;
`;

const StyledEvalGlobalMoreButton = styled(StyledButton)`
  width: 250px;
  margin-top: 250px;
`;

const StyledShouldListContainer = styled(FlexCol)`
  width: 500px;
  height: 300px;
`;

const StyledYellowLine = styled.div`
  border-bottom: 10px solid ${(props) => props.theme.yellowFeatureColor};
  width: 80px;
  height: auto;
`;
const StyledTitleMyResult = styled(StyledTitleH1)`
  height: 15px;
`;

export default function EvalGlobalScore() {
  // ToDo: adding Morgan for all xhr request

  const { org } = useContext(OrgContext);
  const { orgEvent } = useContext(EventContext);

  const { evalState } = useContext(EvalContext);

  useEffect(() => {
    const saveAboutOrgInfos = async () => {
      try {
        const response = await axios.post('http://localhost:8080/emi/organizations', {
          ...org,
        });
        return response;
      } catch (error) {
        console.error(error);
        return null;
      }
    };

    const saveAboutEventInfos = async (id) => {
      try {
        const response = await axios.post(`http://localhost:8080/emi/organizations/${id}/events`, {
          ...orgEvent,
        });
        return response;
      } catch (error) {
        console.error(error);
        return null;
      }
    };

    const processDataSaving = async () => {
      const orgResponse = await saveAboutOrgInfos();
      const organization = orgResponse.data;
      const orgEventResponse = await saveAboutEventInfos(organization.id);
      const organizationEvent = orgEventResponse.data;
      console.log(organizationEvent);
    };
    processDataSaving();

    // adding axios silmutaneous post request saving data

    // scores post prepared array
    const scoresPostSaving = evalState.themes.map((theme) => {
      axios.post(`http://localhost:8080/emi/evals/0/events/:eventId/themes/${theme.id}/scores`, {
        score: theme.score,  // ToDo: revoir URI des endpoints car pas trop REST: themeId + answerid doivent être passés dans le body
      })
    });

    // eval answers post prepared array
    const evalAnswerPostSaving = null;
    axios.post(`http://localhost:8080/emi/evals/0/events/:eventId/answers/:answerId`, {
      evalValue: '',
      }),
    });

    // fusion des deux tableaux
    const axiosPostRequests = scoresPostSaving.concat(evalAnswerPostSaving);

    axios.all([...axiosPostRequests])
    .then((postResponses) => {
      postResponses.foreach((response) => console.log(response));
    })
    .catch((errors) => console.error(errors));
  }, []);

  return (
    <StyledEvalGlobalContainer around>
      <StyledEvalGlobalLeftCol>
        <StyledTitleMyResult>Mon résultat</StyledTitleMyResult>
        <StyledYellowLine />
        <StyledImgContainer>
          <StyledEvalGlobalImg src={Nuageux} alt="des nuages..." />
        </StyledImgContainer>
        <Flex>
          <Link to="/pdf">
            <StyledEvalGlobalButton>Envoyer par mail</StyledEvalGlobalButton>
            <StyledEvalGlobalButton glassy> Imprimer </StyledEvalGlobalButton>
          </Link>
        </Flex>
      </StyledEvalGlobalLeftCol>
      <StyledEvalGlobalRightCol>
        <StyledShouldListContainer start halign="center">
          <div>Afficher recap icones</div>
          <span>Mes recommandations concernant</span>
          <StyledTitleH2>theme props</StyledTitleH2>
          <span>recommandations props blablabla </span>
          <span>recommandations props blablabla </span>
          <span>recommandations props blablabla </span>
        </StyledShouldListContainer>
        <StyledEvalGlobalMoreButton glassy>
          En savoir +
        </StyledEvalGlobalMoreButton>
      </StyledEvalGlobalRightCol>
    </StyledEvalGlobalContainer>
  );
}
