import PropTypes from 'prop-types';
import Answer from './Answer';
import { FlexCol, FlexWrap } from '../../styles/generics/GenericContainers';

export default function AnswerList({ answers, questionId, themeId }) {
  return (
    <>
      {answers.length === 2 && answers[0].answ_type === 'one_choice' ? (
        <FlexCol>
          {answers.map((answer) => (
            <Answer key={answer.id} answer={answer} questionId={questionId} themeId={themeId} />
          ))}
        </FlexCol>
      ) : (
        <FlexWrap>
          {answers.map((answer) => (
            <Answer key={answer.id} answer={answer} questionId={questionId} themeId={themeId} />
          ))}
        </FlexWrap>
      )}
    </>
  );
}

AnswerList.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.object).isRequired,
  questionId: PropTypes.number.isRequired,
  themeId: PropTypes.number.isRequired,
};
