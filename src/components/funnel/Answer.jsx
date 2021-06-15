import styled from 'styled-components';
import PropTypes from 'prop-types';

export const AnswerComponent = styled.div`
  margin:10px;
`;

const MultipleChoiceAnswer = ({ label }) => (
  <>
    <input id="multiansw" type="checkbox" value="" />
    <label htmlFor="multiansw">{label}</label>
  </>
 );

const OneChoiceAnswer = ({ label }) => (
  <div>
    <input id="oneansw" type="radio" value="" />
    <label htmlFor="oneansw">{label}</label>
  </div>
);

 const InputAnswer = ({ label }) => (
   <>
     <input id="inansw" type="text" value="" />
     <label htmlFor="inansw">{label}</label>
   </>
);

export default function Answer({ answer }) {
  return (
    <AnswerComponent>
      {
        answer.answ_type === 'multiple_choice' && <MultipleChoiceAnswer label={answer.label} />
      }
      {
        answer.answ_type === 'one_choice' && <OneChoiceAnswer label={answer.label} />
      }
      {
        answer.answ_type === 'input_answ' && <InputAnswer label={answer.label} />
      }
    </AnswerComponent>
  );
}

Answer.propTypes = {
  answer: PropTypes.arrayOf(PropTypes.object).isRequired,
};

MultipleChoiceAnswer.propTypes = {
  label: PropTypes.string.isRequired,
};

OneChoiceAnswer.propTypes = {
  label: PropTypes.string.isRequired,
};

InputAnswer.propTypes = {
  label: PropTypes.string.isRequired,
};
