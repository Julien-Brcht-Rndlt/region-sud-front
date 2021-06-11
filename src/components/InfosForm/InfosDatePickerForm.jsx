import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import {
  StyledFormItem,
  StyledFormItemLabel,
} from '../../styles/genericStyles/StyledFormItem';
import 'react-datepicker/dist/react-datepicker.css';

const StyledDatePickerInfosForm = styled(DatePicker)`
  padding: 15px;
  border: 1px solid ${(props) => props.theme.blueFeatureColor};
`;

/* const initialState = {
  startDate: null,
  endDate: null,
  focusedInput: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'focusChange':
      return { ...state, focusedInput: action.payload };
    case 'dateChange':
      return action.payload;
    default:
      throw new Error();
  }
} */

export default function InfosDatePickerForm({ label }) {
  /* const [state, dispatch] = useReducer(reducer, initialState); */
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <StyledFormItem>
      <StyledFormItemLabel htmlFor={label}>{label}</StyledFormItemLabel>
      <StyledDatePickerInfosForm
        id={label}
        selected={selectedDate}
        onChange={(date) => handleChange(date)}
        showTimeSelect
        timeFormat="HH:mm"
        dateFormat="LLL"
      />
    </StyledFormItem>
  );
}

InfosDatePickerForm.propTypes = {
  label: PropTypes.string.isRequired,
};

/*  <DateRangeInput
      onDatesChange={(data) => dispatch({ type: 'dateChange', payload: data })}
      onFocusChange={(focusedInput) =>
        dispatch({ type: 'focusChange', payload: focusedInput })
      }
      startDate={state.startDate} // Date or null
      endDate={state.endDate} // Date or null
      focusedInput={state.focusedInput} // START_DATE, END_DATE or null
    /> */
