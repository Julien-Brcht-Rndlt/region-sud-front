import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { StyledFormItem, StyledFormItemLabel } from '../../styles/generics/StyledFormItem';
import 'react-datepicker/dist/react-datepicker.css';
import { device } from '../../styles/theme';

const StyledDatePickerInfosForm = styled(DatePicker)`
  border: 1px solid ${(props) => props.theme.blueFeatureColor};

  @media ${device.mobileS} {
    padding: 5px;
  }

  @media ${device.laptop} {
    padding: 15px;
  }
`;

export default function InfosEvalDatePicker({
  label,
  elmtFormName,
  infosForm,
  setInfosForm,
}) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChange = (date) => {
    setInfosForm({ ...infosForm, [elmtFormName]: date });
    setSelectedDate(date);
  };

  return (
    <StyledFormItem>
      <StyledFormItemLabel htmlFor={label}>{label}</StyledFormItemLabel>
      <StyledDatePickerInfosForm
        id={elmtFormName}
        name={elmtFormName}
        selected={selectedDate}
        onChange={(date) => handleChange(date)}
        showTimeSelect
        timeFormat="HH:mm"
        dateFormat="LLL"
      />
    </StyledFormItem>
  );
}

InfosEvalDatePicker.propTypes = {
  label: PropTypes.string,
  elmtFormName: PropTypes.string.isRequired,
  infosForm: PropTypes.objectOf.isRequired,
  setInfosForm: PropTypes.func.isRequired,
};

InfosEvalDatePicker.defaultProps = {
  label: '',
};
