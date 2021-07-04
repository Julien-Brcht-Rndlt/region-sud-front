import PropTypes from 'prop-types';
import Question from './Question';

export default function QuestionList({ questions, themeId }) {
  let count = 0;
  return (
    <>
      {questions.map((question) => {
        count += 1;
        return (
          count === questions.length ? (
            <Question key={question.id} {...question} themeId={themeId} last />
          ) : (
            <Question key={question.id} {...question} themeId={themeId} />
          )
        );
        })}
    </>
  );
}

QuestionList.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  themeId: PropTypes.number.isRequired,
};
