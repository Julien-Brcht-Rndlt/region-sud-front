import styled from 'styled-components';
import PropTypes from 'prop-types';
import AnswerList from './AnswerList';
import { StyledTitleH3 } from '../../styles/genericStyles/GenericTitles';
import { Flex } from '../../styles/genericStyles/GenericContainers';

export const StyledQuestionContainer = styled(Flex)`
  background-color: #e7ecf4;
  height: 210px;
  margin-bottom:30px;
  margin-left:40px;
  width:60%;
  padding:15px;
  flex-wrap:wrap;
`;

export default function Question({ title, answers }) {
  return (
    <StyledQuestionContainer start>
      <StyledTitleH3>{title}</StyledTitleH3>
      <AnswerList answers={answers} />
    </StyledQuestionContainer>
  );
}

Question.propTypes = {
  title: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.object).isRequired,
};
