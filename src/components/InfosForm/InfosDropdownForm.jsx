import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyledInfosDropdownLabel,
  StyledInfosDropdown,
} from '../../assets/styles/StyledInfosDropdownForm';

export default function InfosDropdownForm({ label, options = [] }) {
  const [selectedItem, setSelectedItem] = useState();

  const handleSelectedOption = (event) => {
    console.log(`event.target.value:${event.target.value}`);
    setSelectedItem(event.target.value); // event.label
  };

  return (
    <div>
      <StyledInfosDropdownLabel>{label}</StyledInfosDropdownLabel>
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
    </div>
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
