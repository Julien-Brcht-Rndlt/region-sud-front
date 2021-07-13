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
  active,
  action,
}) {
  return (
    <>
      {active ? (
        <>
          <HashLink to="/EmiEval/1#section-theme" onClick={() => action()}>
            <StyledButton type={type}>
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
};

InfosEvalDynamicButton.defaultProps = {
  type: '',
  action: null,
  active: '',
};
