import { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

export default function InfosDatePickerForm({ label }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <DatePicker
        id={label}
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
      />
    </div>
  );
}

InfosDatePickerForm.propTypes = {
  label: PropTypes.string,
};

InfosDatePickerForm.defaultProps = {
  label: '',
};
