import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StyledFormItem, StyledFormItemLabel } from '../../styles/generics/StyledFormItem';

export const StyledInfosCheckBoxLabel = styled(StyledFormItemLabel)`
  font-weight: 600;
  font-family: ${(props) => props.theme.fontFamilyNormal};
  margin-bottom: 10px;
`;

export const StyledInfosCheckBox = styled.input.attrs({ type: 'checkbox' })`
  border: 1px solid ${(props) => props.theme.NavyBlueFeatureColor};
`;

export default function InfosEvalCheckBox({ label, checked }) {
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <StyledFormItem>
      <StyledInfosCheckBoxLabel style={{ color: '#08378c' }}>
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

InfosEvalCheckBox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
};

InfosEvalCheckBox.defaultProps = {
  label: '',
  checked: false,
};
