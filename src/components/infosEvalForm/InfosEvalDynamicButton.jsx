import PropTypes from 'prop-types';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import { StyledButton } from '../../styles/generics/GenericButtons';

export const DisabledButton = styled(StyledButton)`
  background-color: ${(props) => (props.glassy ? props.theme.blueFeatureColor : props.theme.greycendreColor)};
  color: ${(props) => (props.glassy ? props.theme.blueFeatureColor : props.theme.blackFeatureColor)};
  &:hover {
    background-color: ${(props) => (props.glassy ? props.theme.blueFeatureColor : props.theme.greycendreColor)};
    color: ${(props) => (props.glassy ? props.theme.secondaryFeatureColor : props.theme.blackFeatureColor)};
  }
`;

export default function InfosEvalDynamicButton({
  type,
  action,
  active,
  handleSubmit,
}) {
  return (
    <>
      {active ? (
        <>
          <HashLink to="/EmiEval/1#section-theme" onChange={(event) => handleSubmit(event)}>
            <StyledButton type={type} onClick={action}>
              Suivant
            </StyledButton>
          </HashLink>
        </>
      ) : (
        <DisabledButton disabled>Suivant</DisabledButton>
      )}
    </>
  );
}

InfosEvalDynamicButton.propTypes = {
  type: PropTypes.string,
  action: PropTypes.func,
  active: PropTypes.bool,
  handleSubmit: PropTypes.func,
};

InfosEvalDynamicButton.defaultProps = {
  type: '',
  action: null,
  active: '',
  handleSubmit: '',
};
