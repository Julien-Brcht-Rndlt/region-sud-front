import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StyledFormItem, StyledFormItemLabel } from '../../styles/generics/StyledFormItem';

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

export default function InfosEvalDropdown({
  label,
  options = [],
  elmtFormName,
  infosForm,
  setInfosForm,
  }) {
  const [selected, setSelected] = useState();

  const handleSelectedOption = (event) => {
    setInfosForm(({ ...infosForm, [event.target.name]: event.target.value }));
    setSelected(event.target.value);
  };

  return (
    <StyledFormItem>
      <StyledInfosDropdownLabel htmlFor={label}>
        {label}
      </StyledInfosDropdownLabel>
      <StyledInfosDropdown
        name={elmtFormName}
        value={selected}
        onChange={(event) => handleSelectedOption(event)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </StyledInfosDropdown>
    </StyledFormItem>
  );
}

InfosEvalDropdown.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  elmtFormName: PropTypes.string.isRequired,
  infosForm: PropTypes.objectOf.isRequired,
  setInfosForm: PropTypes.func.isRequired,
};

InfosEvalDropdown.defaultProps = {
  label: '',
  options: [],
};
