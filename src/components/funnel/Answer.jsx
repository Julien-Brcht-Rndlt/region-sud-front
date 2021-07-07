import { useState, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StyledInfosInput } from '../../styles/StyledInfosForms';
import EvalContext from '../../contexts/EvalContext';
import FunnelContext from '../../contexts/FunnelContext';

export const AnswerComponent = styled.div`
  margin: 10px;
`;

export const StyledAnswerLabel = styled.span`
  font-family: ${(props) => props.theme.fontFamilyFeature};
  padding-left: 6px;
`;

export const StyledAnswerInput = styled(StyledInfosInput)`
  width: 60px;
`;

const MultipleChoiceAnswer = ({
  id,
  label,
  questionId,
  themeId,
  onChange,
}) => {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <input
        id={`multiansw-${themeId}-${questionId}-${id}`}
        type="checkbox"
        checked={checked}
        onChange={(event) => {
          onChange(event);
          setChecked(!checked);
      }}
      />
      <StyledAnswerLabel htmlFor={`multiansw-${themeId}-${questionId}-${id}`}>{label}</StyledAnswerLabel>
    </div>
  );
};

const OneChoiceAnswer = ({
  id,
  label,
  questionId,
  themeId,
  onChange,
}) => {
  /* const [checked, setChecked] = useState(false); */
  const [selectedOption, setSelectedOption] = useState();
  return (
    <div>
      <input
        id={`oneansw-${themeId}-${questionId}-${id}`}
        type="radio"
        name={`${questionId}`}
        checked={selectedOption === label}
        value={label}
        onChange={(event) => {
          setSelectedOption(event.target.value);
          onChange(event);
      }}
      />
      <StyledAnswerLabel htmlFor={`oneansw-${themeId}-${questionId}-${id}`}>{label}</StyledAnswerLabel>
    </div>
  );
};

const InputAnswer = ({
  id,
  label,
  questionId,
  themeId,
  onChange,
}) => {
  const [value, setValue] = useState('');
  return (
    <div>
      <StyledAnswerInput
        id={`inansw-${themeId}-${questionId}-${id}`}
        type="number"
        value={value}
        onChange={(event) => {
          onChange(event);
          setValue(event.target.value);
        }}
      />
      <StyledAnswerLabel htmlFor={`inansw-${themeId}-${questionId}-${id}`}>{label}</StyledAnswerLabel>
    </div>
  );
};

export default function Answer({
  answer,
  questionId,
  themeId,
}) {
  const { evalState, evalDispatch } = useContext(EvalContext);
  const { funnel } = useContext(FunnelContext);

  const handleChange = (event) => {
    /* console.log('type', event.target.type);
    console.log('input', event.target.checked);
    console.log('input', event.target.value);
    console.log('funnel', funnel); */
    if (event.target.type === 'checkbox') {
      evalDispatch({
        type: 'MULTI_CHOICE',
        payload: {
          answer,
          funnel,
          questionId,
          themeId,
          checked: event.target.checked,
        },
      });
    } else if (event.target.type === 'radio') {
      evalDispatch({
        type: 'ONE_CHOICE',
        payload: {
          answer,
          funnel,
          questionId,
          themeId,
          checked: event.target.checked,
        },
      });
    } else if (event.target.type === 'number') {
      evalDispatch({
        type: 'INPUT_ANSWER',
        payload: {
          answer,
          funnel,
          questionId,
          themeId,
          value: event.target.value,
        },
      });
    }

    evalDispatch({
      type: 'IS_COMPLETE',
      payload: themeId,
    });

    const completedTheme = evalState.completedThemes.find((id) => {
      console.log('id === parseInt(themeId, 10)', id === themeId);
      console.log('id', id);
      console.log('themeId', themeId);
      return id === themeId;
    });
    console.log('completedTheme', completedTheme);
    if (completedTheme) {
      evalDispatch({
        type: 'COMPUTE_SCORE',
        payload: themeId,
      });
  }
};

  return (
    <AnswerComponent>
      {answer.answ_type === 'multiple_choice' && <MultipleChoiceAnswer id={answer.id} label={answer.label} themeId={themeId} questionId={questionId} onChange={(event) => handleChange(event)} />}
      {answer.answ_type === 'one_choice' && <OneChoiceAnswer id={answer.id} label={answer.label} themeId={themeId} questionId={questionId} onChange={(event) => handleChange(event)} />}
      {answer.answ_type === 'input_answ' && <InputAnswer id={answer.id} label={answer.label} themeId={themeId} questionId={questionId} onChange={(event) => handleChange(event)} />}
    </AnswerComponent>
  );
}

Answer.propTypes = {
  answer: PropTypes.func.isRequired,
  questionId: PropTypes.number.isRequired,
  themeId: PropTypes.string.isRequired,
};

MultipleChoiceAnswer.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  questionId: PropTypes.number.isRequired,
  themeId: PropTypes.string.isRequired,
};

OneChoiceAnswer.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  questionId: PropTypes.number.isRequired,
  themeId: PropTypes.string.isRequired,
};

InputAnswer.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  questionId: PropTypes.number.isRequired,
  themeId: PropTypes.string.isRequired,
};
