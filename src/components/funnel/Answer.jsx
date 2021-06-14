import PropTypes from 'prop-types';

const MultipleChoiceAnswer = ({ label }) => (
  <>
    <label htmlFor="multiansw">{label}</label>
    <input id="multiansw" type="checkbox" value="" />
  </>
 );

const OneChoiceAnswer = ({ label }) => (
  <>
    <label htmlFor="oneansw">{label}</label>
    <input id="oneansw" type="radio" value="" />
  </>
);

 const InputAnswer = ({ label }) => (
   <>
     <label htmlFor="inansw">{label}</label>
     <input id="inansw" type="text" value="" />
   </>
);

export default function Answer({ answer }) {
  return (
    <div>
      {
        answer.answ_type === 'multiple_choice' && <MultipleChoiceAnswer label={answer.label} />
      }
      {
        answer.answ_type === 'one_choice' && <OneChoiceAnswer label={answer.label} />
      }
      {
        answer.answ_type === 'input_answ' && <InputAnswer label={answer.label} />
      }
    </div>
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
