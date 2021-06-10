import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  StyledFormItem,
  StyledFormItemLabel,
} from '../../assets/styles/genericStyles/StyledFormItem';

const StyledDatePickerInfosForm = styled(DatePicker)`
  padding: 15px;
  border: 1px solid ${(props) => props.theme.blueFeatureColor};
`;

export default function InfosDatePickerForm({ label }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChange = (date) => {
    console.log(date);
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
  label: PropTypes.string,
};

InfosDatePickerForm.defaultProps = {
  label: '',
};
