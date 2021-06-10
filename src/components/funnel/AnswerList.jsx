import PropTypes from 'prop-types';
import Answer from './Answer';

const AnswerList = ({ answers }) => {
  return (
    <>
      {answers.map((answer) => (
        <>
          {answer.answ_type === 'MULTIPLE_CHOICE' && <Answer />}
          <Answer key={answer.id} {...answer} />
        </>
      ))}
    </>
  );
};

export default AnswerList;

AnswerList.propTypes = {
  question: PropTypes.arrayOf(PropTypes.string).isRequired,
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
};
