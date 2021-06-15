import styled from 'styled-components';
import PropTypes from 'prop-types';
import AnswerList from './AnswerList';
import { StyledSubTitleH3 } from '../../styles/genericStyles/StyledSubTitle';

export const StyledQuestionContainer = styled.div`
  background-color: #e7ecf4;
  height: 210px;
  margin-bottom:30px;
  margin-left:40px;
  width:60%;
  padding:15px;
  display:flex;
  flex-wrap:wrap;
  justify-content:flex-start;
`;

export default function Question({ title, answers }) {
  return (
    <StyledQuestionContainer>
      <StyledSubTitleH3>{title}</StyledSubTitleH3>
      <AnswerList answers={answers} />
    </StyledQuestionContainer>
  );
}

Question.propTypes = {
  title: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.object).isRequired,
};
