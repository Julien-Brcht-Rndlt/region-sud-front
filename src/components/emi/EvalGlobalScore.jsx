import { useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StyledTitleH1 } from '../../styles/generics/GenericTitles';
import { StyledButton } from '../../styles/generics/GenericButtons';
import {
  Flex,
  FlexSpace,
  Block,
} from '../../styles/generics/GenericContainers';
import ShouldGlobalComp from './ShouldGlobalComp';
import sunny from '../../assets/img/sunny.png';
import OrgContext from '../../contexts/OrgContext';
import EventContext from '../../contexts/EventContext';
import EvalContext from '../../contexts/EvalContext';
import { INPUT_ANSWER } from '../../constants';

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

const StyledYellowLine = styled.div`
  border-bottom: 10px solid ${(props) => props.theme.yellowFeatureColor};
  width: 80px;
  height: auto;
`;
const StyledTitleMyResult = styled(StyledTitleH1)`
  height: 15px;
`;

export default function EvalGlobalScore() {
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

    const saveResultEvals = async (eventId) => {
      try {
        const scoresPostSaving = evalState.themes.map((theme) => (
            axios.post(`http://localhost:8080/emi/evals/events/${eventId}/themes/${theme.id}/scores`, {
            score: theme.score,
            })
        ));

        let evalAnswers = [];
        evalState.themes.forEach((theme) => theme.questions
          .forEach((question) => {
            if (question.givenAnswers) {
              evalAnswers = evalAnswers
                .concat(question.givenAnswers.map((givenAnswer) => givenAnswer));
            }
          }));

        const evalAnswerPostSaving = evalAnswers.map((evalAnswer) => {
          const answId = evalAnswer.id;
          const evalValue = evalAnswer.type === INPUT_ANSWER
            ? evalAnswer.answer_value : evalAnswer.label;
          return axios.post(`http://localhost:8080/emi/evals/0/events/${eventId}/answers/${answId}`, {
            evalValue,
            });
        });

        const axiosPostRequests = scoresPostSaving.concat(evalAnswerPostSaving);

        return Promise.all(axiosPostRequests).then((postResponses) => postResponses);
      } catch (error) {
        console.error(error);
        return null;
      }
    };

    const processDataSaving = async () => {
      const orgResponse = await saveAboutOrgInfos();
      if (orgResponse) {
        const organization = orgResponse.data;
        const orgEventResponse = await saveAboutEventInfos(organization.id);
        if (orgEventResponse) {
          const organizationEvent = orgEventResponse.data;
          const postResponses = saveResultEvals(organizationEvent.id);
          if (postResponses) {
            postResponses.then((responses) => console.log('responses: ', responses));
          }
        }
      }
    };
    processDataSaving();
  }, []);

  return (
    <StyledEvalGlobalContainer around>
      <StyledEvalGlobalLeftCol>
        <StyledTitleMyResult>Mon résultat</StyledTitleMyResult>
        <StyledYellowLine />
        <StyledImgContainer>
          <StyledEvalGlobalImg src={sunny} alt="des nuages..." />
        </StyledImgContainer>
        <Flex>

          <Link to="/pdf">
            <StyledEvalGlobalButton>Envoyer par mail</StyledEvalGlobalButton>
            <StyledEvalGlobalButton glassy> Imprimer </StyledEvalGlobalButton>
            <StyledEvalGlobalButton glassy> En savoir +</StyledEvalGlobalButton>
          </Link>

        </Flex>
      </StyledEvalGlobalLeftCol>
      <StyledEvalGlobalRightCol>
        <ShouldGlobalComp />
      </StyledEvalGlobalRightCol>
    </StyledEvalGlobalContainer>
  );
}
