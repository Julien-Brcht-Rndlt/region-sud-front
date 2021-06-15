import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StyledFormItem, StyledFormItemLabel } from '../../styles/genericStyles/StyledFormItem';

export const StyledInfosCheckBoxLabel = styled(StyledFormItemLabel)`
  font-weight: 600;
  font-family: ${(props) => props.theme.fontFamilyNormal};
  margin-bottom: 10px;
`;

export const StyledInfosCheckBox = styled.input.attrs({ type: 'checkbox' })`
  border: 1px solid ${(props) => props.theme.blueFeatureColor};
`;

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
