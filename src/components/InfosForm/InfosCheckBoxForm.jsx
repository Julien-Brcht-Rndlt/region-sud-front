import { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledFormItem } from '../../assets/styles/genericStyles/StyledFormItem';
import {
  StyledInfosCheckBoxLabel,
  StyledInfosCheckBox,
} from '../../assets/styles/StyledInfosCheckBoxForm';

export default function InfosCheckBoxForm({ label, checked }) {
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <StyledFormItem>
      <StyledInfosCheckBoxLabel>
        <StyledInfosCheckBox
          type="checkbox"
          checked={isChecked}
          onChange={(event) => setIsChecked(event.target.checked)}
        />
        {label}
      </StyledInfosCheckBoxLabel>
    </StyledFormItem>
  );
}

InfosCheckBoxForm.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
};

InfosCheckBoxForm.defaultProps = {
  label: '',
  checked: false,
};
