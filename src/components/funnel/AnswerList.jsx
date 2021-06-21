import PropTypes from 'prop-types';
import Answer from './Answer';
import { FlexCol, FlexWrap } from '../../styles/generics/GenericContainers';

const AnswerList = ({ answers }) => (
  <>
    {answers.length === 2 && answers[0].answ_type === 'one_choice' ? (
      <FlexCol>
        {answers.map((answer) => (
          <Answer key={answer.id} answer={answer} />
        ))}
      </FlexCol>
    ) : (
      <FlexWrap>
        {answers.map((answer) => (
          <Answer key={answer.id} answer={answer} />
        ))}
      </FlexWrap>
    )}
  </>
);

export default AnswerList;

AnswerList.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.object).isRequired,
};
