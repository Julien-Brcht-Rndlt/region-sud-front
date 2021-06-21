import styled from 'styled-components';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledFormItem, StyledFormItemLabel } from '../../styles/generics/StyledFormItem';
import { StyledInfosInput } from '../../styles/StyledInfosForms';
import { device } from '../../styles/theme';

export const StyledInfosInputLabel = styled(StyledFormItemLabel)`
  @media ${device.mobileS}{
      font-size:13px;
      width:200px;
    }

    @media ${device.mobileM}{
      font-size:13px;
      width:230px;
    }

    @media ${device.mobileL}{
      font-size:16px;
      width:280px;
    }
    @media ${device.tablet}{
      font-size:15px;
    }

    @media ${device.desktop}{
      color: ${(props) => props.theme.blueFeatureColor};
      font-family: ${(props) => props.theme.fontFamilyNormal};
      font-weight: 600;
      width: 30rem;
      font-size:18px;
    }
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
