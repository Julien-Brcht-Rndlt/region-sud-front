import styled from 'styled-components';
import PropTypes from 'prop-types';

export const StyledContainerQuestions = styled.div`
  margin-left: 25px;
  padding: 8px;
`;
export const StyledLinesQuestions = styled.div`
  width: 80%;
  border: solid 1px black;
`;

export default function FaqQuestionItem({ title }) {
  return (
    <StyledContainerQuestions>
      <h5>{title}</h5>
      <StyledLinesQuestions />
    </StyledContainerQuestions>
  );
}
FaqQuestionItem.propTypes = {
  title: PropTypes.string,
};

FaqQuestionItem.defaultProps = {
  title: '',
};
