import PropTypes from 'prop-types';
import Question from './Question';

export default function QuestionList({ questions }) {
  return (
    <>
      {questions.map((question) => (
        <Question key={question.id} {...question} />
      ))}
    </>
  );
}

QuestionList.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
