import styled from 'styled-components';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledFormItem, StyledFormItemLabel } from '../../styles/generics/StyledFormItem';

export const StyledInfosInputLabel = styled(StyledFormItemLabel)`
  color: ${(props) => props.theme.blueFeatureColor};
  font-family: ${(props) => props.theme.fontFamilyNormal};
  font-weight: 600;
  width: 30rem;
`;

export const StyledInfosInput = styled.input`
  border: 1px solid #005aff;
  background: ${(props) => props.theme.secondaryFeatureColor};
  padding: 10px 15px 15px 15px;
  width: ${(props) => (props.wide ? '100%' : '70%')};
  margin-bottom: 20px;
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
        value={infos.inputName}
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
