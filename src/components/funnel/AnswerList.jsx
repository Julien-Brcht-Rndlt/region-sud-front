import PropTypes from 'prop-types';
import Answer from './Answer';

const AnswerList = ({ answers }) => (
  <>
    {answers.map((answer) => (
      <Answer key={answer.id} answer={answer} />
    ))}
  </>
);

/*

const AnswerList = () => {
  const { themes } = useContext(FunnelContext);

  return (
    <>
      {themes.answers.map((answer) => (
        <Answer key={answer.id} {...answer} />
      ))}
    </>
  );
};

*/

export default AnswerList;

AnswerList.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.object).isRequired,
};
