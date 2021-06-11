import styled from 'styled-components';
import PropTypes from 'prop-types';

export const StyledQuestionTitle = styled.div``;
export const StyledH2 = styled.h2``;

export default function QuestionTitle({ title }) {
  return (
    <StyledQuestionTitle>
      <StyledH2> {title} </StyledH2>
    </StyledQuestionTitle>
  );
}

QuestionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
