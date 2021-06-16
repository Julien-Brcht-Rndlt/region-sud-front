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
  infosForms,
  }) {
  const [infos, setInfos] = useState(infosForms);

  return (
    <StyledFormItem>
      <StyledInfosInputLabel>{label}</StyledInfosInputLabel>
      <StyledInfosInput
        name={inputName}
        value=""/* {infos.inputName} */
        onChange={(event) => setInfos({ ...infos, inputName: event.target.value })}
        wide={wide}
      />
    </StyledFormItem>
  );
}

InfosEvalInput.propTypes = {
  label: PropTypes.string,
  wide: PropTypes.bool,
  inputName: PropTypes.string.isRequired,
  infosForms: PropTypes.objectOf.isRequired,
};

InfosEvalInput.defaultProps = {
  label: '',
  wide: false,
};
