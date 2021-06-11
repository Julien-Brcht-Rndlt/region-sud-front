import { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledFormItem } from '../../styles/genericStyles/StyledFormItem';
import {
  StyledInfosInputLabel,
  StyledInfosInput,
} from '../../styles/StyledInfosInputForm';

export default function InfosInputForm({ label, wide }) {
  const [input, setInput] = useState();

  return (
    <StyledFormItem>
      <StyledInfosInputLabel>{label}</StyledInfosInputLabel>
      <StyledInfosInput
        value={input}
        onChange={(event) => setInput(event.target.value)}
        wide={wide}
      />
    </StyledFormItem>
  );
}

InfosInputForm.propTypes = {
  label: PropTypes.string,
  wide: PropTypes.bool,
};

InfosInputForm.defaultProps = {
  label: '',
  wide: false,
};
