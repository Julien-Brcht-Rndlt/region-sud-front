/*
const MultipleChoiceAnswer = ({ label }) => {
  <>
    <label htmlFor="oneansw">{label}</label>
    <input id="oneansw" type="checkbox" value="" />;
  </>;
};
const OneChoiceAnswer = ({ label }) => {
  <>
    <label htmlFor="oneansw">{label}</label>
    <input id="oneansw" type="radio" value="" />;
  </>;
};

const InputAnswer = ({ label }) => {
  <>
    <label htmlFor="inansw">{label}</label>
    <input id="inansw" type="text" value="" />;
  </>;
};

const getAnswerReactComponent = (answer) => {
  let Answer = null;

  if (answer.answ_type === 'multiple_choice') {
    Answer = <MultipleChoiceAnswer label={answer.label} />;
  } else if (answer.answ_type === 'one_choice') {
    Answer = <OneChoiceAnswer label={answer.label} />;
  } else if (answer.answ_type === 'input_answer') {
    Answer = <InputAnswer label={answer.label} />;
  }
  return Answer;
}; 
*/

export default function Answer() {
  return <div>Answer Here</div>; // ({getAnswerReactComponent(answer)});
}
