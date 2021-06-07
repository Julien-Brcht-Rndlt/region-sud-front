import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyledInfosInputLabel,
  StyledInfosInput,
} from '../../assets/styles/StyledInfosInputForm';

export default function InfosInputForm({ label }) {
  const [input, setInput] = useState();

  return (
    <div>
      <StyledInfosInputLabel>
        {label}
        <StyledInfosInput
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </StyledInfosInputLabel>
    </div>
  );
}

InfosInputForm.propTypes = {
  label: PropTypes.string,
};

InfosInputForm.defaultProps = {
  label: '',
};
