import { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  StyledFormItem,
  StyledFormItemLabel,
} from '../../assets/styles/genericStyles/StyledFormItem';

export default function InfosDatePickerForm({ label }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <StyledFormItem>
      <StyledFormItemLabel htmlFor={label}>{label}</StyledFormItemLabel>
      <DatePicker
        id={label}
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        dateFormat="LLL"
      />
    </StyledFormItem>
  );
}

InfosDatePickerForm.propTypes = {
  label: PropTypes.string,
};

InfosDatePickerForm.defaultProps = {
  label: '',
};
