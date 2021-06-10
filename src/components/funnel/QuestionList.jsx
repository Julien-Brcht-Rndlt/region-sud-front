import PropTypes from 'prop-types';
import Question from './Question';

const QuestionList = ({ questions }) => {
  return (
    <>
      {questions.map((question) => (
        <Question key={question.id} {...question} />
      ))}
    </>
  );
};

export default QuestionList;

QuestionList.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.string).isRequired,
};
