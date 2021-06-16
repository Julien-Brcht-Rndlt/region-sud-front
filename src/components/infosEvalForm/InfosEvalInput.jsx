import styled from 'styled-components';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledFormItem, StyledFormItemLabel } from '../../styles/generics/StyledFormItem';
import { StyledInfosInput } from '../../styles/StyledInfosForms';

export const StyledInfosInputLabel = styled(StyledFormItemLabel)`
  color: ${(props) => props.theme.blueFeatureColor};
  font-family: ${(props) => props.theme.fontFamilyNormal};
  font-weight: 600;
  width: 30rem;
`;

export default function InfosEvalInput({
  label,
  wide,
  inputName,
  infosForm,
  setInfosForm,
  }) {
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInfosForm(({ ...infosForm, [event.target.name]: event.target.value }));
    setInput(event.target.value);
  };

  return (
    <StyledFormItem>
      <StyledInfosInputLabel>{label}</StyledInfosInputLabel>
      <StyledInfosInput
        name={inputName}
        value={input}
        onChange={(event) => handleInputChange(event)}
        wide={wide}
      />
    </StyledFormItem>
  );
}

InfosEvalInput.propTypes = {
  label: PropTypes.string,
  wide: PropTypes.bool,
  inputName: PropTypes.string.isRequired,
  infosForm: PropTypes.objectOf.isRequired,
  setInfosForm: PropTypes.func.isRequired,
};

InfosEvalInput.defaultProps = {
  label: '',
  wide: false,
};
