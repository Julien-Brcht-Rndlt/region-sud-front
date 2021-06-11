import styled from 'styled-components';
import PropTypes from 'prop-types';
import QuestionTitle from './QuestionTitle';
import AnswerList from './AnswerList';

export const StyledQuestionContainer = styled.div`
  background-color: #e7ecf4;
  height: 200px;
`;

export const StyledQuestionTitle = styled.h2`
  color: ${(props) => props.theme.blueFeatureColor};
`;

export default function Question({ title, answers }) {
  return (
    <StyledQuestionContainer>
      <QuestionTitle title={title} />
      <AnswerList answers={answers} />
    </StyledQuestionContainer>
  );
}

Question.propTypes = {
  title: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.object).isRequired,
};
