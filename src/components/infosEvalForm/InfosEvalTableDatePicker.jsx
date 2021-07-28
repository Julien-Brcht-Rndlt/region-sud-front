import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DatePicker, { registerLocale } from 'react-datepicker';
import fr from 'date-fns/locale/fr';
import { StyledFormItem, StyledFormItemLabel } from '../../styles/generics/StyledFormItem';
import 'react-datepicker/dist/react-datepicker.css';
import { device } from '../../styles/theme';
import { EVENT_START_DATE_LABEL, EVENT_END_DATE_LABEL } from '../../constants';

const StyledDatePickerInfosForm = styled(DatePicker)`
  border: 1px solid ${(props) => props.theme.blueFeatureColor};
  @media ${device.mobileS} {
    padding: 5px;
  }

  @media ${device.laptop} {
    padding: 15px;
  }
`;

export default function InfosEvalTableDatePicker({
  infosForm,
  setInfosForm,
}) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleStartDateChange = (date) => {
    setInfosForm({ ...infosForm, eventStart: date });
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setInfosForm({ ...infosForm, eventEnd: date });
    setEndDate(date);
  };

  registerLocale('fr', fr);

  return (
    <>
      <StyledFormItem>
        <StyledFormItemLabel
          style={{ color: '#08378c' }}
          htmlFor={EVENT_START_DATE_LABEL}
        >
          {EVENT_START_DATE_LABEL}
        </StyledFormItemLabel>
        <StyledDatePickerInfosForm
          id="eventStart"
          name="eventStart"
          selected={startDate}
          startDate={startDate}
          endDate={endDate}
          onChange={(date) => handleStartDateChange(date)}
          showTimeSelect
          dateFormat="dd MMMM yyyy à HH'h'mm"
          locale="fr"
          selectsStart
        />
      </StyledFormItem>
      <StyledFormItem>
        <StyledFormItemLabel
          style={{ color: '#08378c' }}
          htmlFor={EVENT_END_DATE_LABEL}
        >
          {EVENT_END_DATE_LABEL}
        </StyledFormItemLabel>
        <StyledDatePickerInfosForm
          id="eventEnd"
          name="eventEnd"
          selected={endDate}
          startDate={startDate}
          endDate={endDate}
          onChange={(date) => handleEndDateChange(date)}
          showTimeSelect
          dateFormat="dd MMMM yyyy à HH'h'mm"
          locale="fr"
          selectsEnd
        />
      </StyledFormItem>
    </>
  );
}

InfosEvalTableDatePicker.propTypes = {
  infosForm: PropTypes.objectOf.isRequired,
  setInfosForm: PropTypes.func.isRequired,
};
