import PropTypes from 'prop-types';

const MultipleChoiceAnswer = ({ label }) => (
  <>
    <label htmlFor="oneansw">{label}</label>
    <input id="oneansw" type="checkbox" value="" />
  </>
);
MultipleChoiceAnswer.propTypes = {
  label: PropTypes.string.isRequired,
};

export default function Answer({ answer }) {
  return (
    <div>
      {
        answer.answ_type === 'multiple_choice' && <MultipleChoiceAnswer label={answer.label} />
      }
    </div>
  );
}

Answer.propTypes = {
  answer: PropTypes.arrayOf(PropTypes.object).isRequired,
};
