import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StyledFormItem, StyledFormItemLabel } from '../../styles/genericStyles/StyledFormItem';

export const StyledInfosDropdownLabel = styled(StyledFormItemLabel)`
  font-weight: 600;
  font-family: ${(props) => props.theme.fontFamilyNormal};
  margin-bottom: 0px;
  padding-bottom: 10px;
`;

export const StyledInfosDropdown = styled.select`
  border: 1px solid ${(props) => props.theme.blueFeatureColor};
  background-color: ${(props) => props.theme.secondaryFeatureColor};
  padding: 10px 15px 15px 15px;
  width: 60%;
  margin-bottom: 25px;
`;

export default function InfosDropdownForm({ label, options = [] }) {
  const [selectedItem, setSelectedItem] = useState();

  const handleSelectedOption = (event) => {
    setSelectedItem(event.target.value);
  };

  return (
    <StyledFormItem>
      <StyledInfosDropdownLabel htmlFor={label}>
        {label}
      </StyledInfosDropdownLabel>
      <StyledInfosDropdown
        value={selectedItem}
        onChange={(event) => handleSelectedOption(event)}
      >
        {/* change event is triggered on the <select> element */}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </StyledInfosDropdown>
    </StyledFormItem>
  );
}

InfosDropdownForm.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
};

InfosDropdownForm.defaultProps = {
  label: '',
  options: [],
};
