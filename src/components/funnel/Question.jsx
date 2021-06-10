import styled from 'styled-components';
import QuestionTitle from './QuestionTitle';
import AnswerList from './AnswerList';

export const StyledQuestionContainer = styled.div`
  background-color: #e7ecf4;
  height: 200px;
`;

export const StyledQuestionTitle = styled.h2`
  color: ${(props) => props.theme.blueFeatureColor};
`;

export default function Question(id, title, answers) {
  return (
    <div>
      <QuestionTitle title={title} />
      <AnswerList answers={answers} />
    </div>
  );
  /* <StyledQuestionContainer>
      <StyledQuestionTitle>
        <QuestionTitle title="" />
      </StyledQuestionTitle>
     
    </StyledQuestionContainer> */
}
