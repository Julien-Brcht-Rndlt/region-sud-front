import PropTypes from 'prop-types';
import Question from './Question';

export default function QuestionList({ questions, themeId }) {
  return (
    <>
      {questions.map((question) => (
        <Question key={question.id} {...question} themeId={themeId} />
      ))}
    </>
  );
}

QuestionList.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  themeId: PropTypes.number.isRequired,
};
