import { useState, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StyledInfosInput } from '../../styles/StyledInfosForms';
import EvalContext from '../../contexts/EvalContext';
import FunnelContext from '../../contexts/FunnelContext';
import {
  MULTIPLE_CHOICE,
  ONE_CHOICE,
  INPUT_ANSWER,
} from '../../constants';
import {
  ADD_MULTIPLE_CHOICE,
  ADD_ONE_CHOICE,
  ADD_INPUT_ANSWER,
  DISPLAY_RECOS,
} from '../../reducers/actions';

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
  const localStKey = `multiansw-${themeId}-${questionId}-${id}`;

  const initLocalSt = () => {
    const localStValue = JSON.parse(localStorage.getItem(localStKey));
    return localStValue;
  };

  const initState = initLocalSt(localStKey);
  const [checked, setChecked] = useState(initState);

  const handleLocalSt = () => {
    setChecked(!checked);
    if (checked) {
      localStorage.removeItem(localStKey);
    } else {
      localStorage.setItem(localStKey, !checked);
    }
  };

  return (
    <div>
      <input
        id={`multiansw-${themeId}-${questionId}-${id}`}
        name={`multiansw-${themeId}-${questionId}`}
        type="checkbox"
        checked={checked}
        onChange={(event) => {
          onChange(event);
          handleLocalSt(localStKey);
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
  selectedOption,
  handleSelectedOption,
  onChange,
}) => (
  <div>
    <input
      id={`oneansw-${themeId}-${questionId}-${id}`}
      type="radio"
      name={`${questionId}`}
      checked={selectedOption === label}
      value={label}
      onChange={(event) => {
        handleSelectedOption(event.target.value, event.target.checked);
        onChange(event);
    }}
    />
    <StyledAnswerLabel htmlFor={`oneansw-${themeId}-${questionId}-${id}`}>{label}</StyledAnswerLabel>
  </div>
  );

const InputAnswer = ({
  id,
  label,
  questionId,
  themeId,
  onChange,
}) => {
  const localStKey = `inansw-${themeId}-${questionId}-${id}`;
  const initLocalSt = () => {
    const localStValue = localStorage.getItem(localStKey) || '';
    return localStValue;
  };

  const initState = initLocalSt();
  const [input, setInput] = useState(initState);

  const handleLocalSt = (value) => {
    if (value === '') {
      localStorage.removeItem(localStKey);
    } else {
      localStorage.setItem(localStKey, value);
    }
  };

  return (
    <div>
      <StyledAnswerInput
        id={`inansw-${themeId}-${questionId}-${id}`}
        type="text"
        value={input}
        onChange={(event) => {
          const { value } = event.target;
          setInput(value);
          onChange(event);
          handleLocalSt(value);
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
  selectedOption,
  handleSelectedOption,
}) {
  const { evalState, evalDispatch, updateDisplay } = useContext(EvalContext);
  const { funnel } = useContext(FunnelContext);

  const handleChange = (event) => {
    if (event.target.type === 'checkbox') {
      evalDispatch({
        type: ADD_MULTIPLE_CHOICE,
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
        type: ADD_ONE_CHOICE,
        payload: {
          answer,
          funnel,
          questionId,
          themeId,
          checked: event.target.checked,
        },
      });
    } else if (event.target.type === 'text' || event.target.type === 'number') {
      evalDispatch({
        type: ADD_INPUT_ANSWER,
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

    const completedTheme = evalState.completedThemes.find((id) => id === themeId);
    if (completedTheme) {
      evalDispatch({
        type: 'COMPUTE_SCORE',
        payload: themeId,
      });
      evalDispatch({
        type: DISPLAY_RECOS,
        payload: themeId,
      });
    }
    updateDisplay();
};

  return (
    <AnswerComponent>
      {answer.answ_type === MULTIPLE_CHOICE && (
      <MultipleChoiceAnswer
        id={answer.id}
        label={answer.label}
        themeId={themeId}
        questionId={questionId}
        onChange={(event) => handleChange(event)}
      />
      )}
      {answer.answ_type === ONE_CHOICE && (
      <OneChoiceAnswer
        id={answer.id}
        label={answer.label}
        themeId={themeId}
        questionId={questionId}
        onChange={(event) => handleChange(event)}
        selectedOption={selectedOption}
        handleSelectedOption={handleSelectedOption}
      />
      )}
      {answer.answ_type === INPUT_ANSWER && (
      <InputAnswer
        id={answer.id}
        label={answer.label}
        themeId={themeId}
        questionId={questionId}
        onChange={(event) => handleChange(event)}
      />
      )}
    </AnswerComponent>
  );
}

Answer.propTypes = {
  answer: PropTypes.func.isRequired,
  questionId: PropTypes.number.isRequired,
  themeId: PropTypes.string.isRequired,
  selectedOption: PropTypes.string.isRequired,
  handleSelectedOption: PropTypes.func.isRequired,
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
  selectedOption: PropTypes.string.isRequired,
  handleSelectedOption: PropTypes.func.isRequired,
};

InputAnswer.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  questionId: PropTypes.number.isRequired,
  themeId: PropTypes.string.isRequired,
};
