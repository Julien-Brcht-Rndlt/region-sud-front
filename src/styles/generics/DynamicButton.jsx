import PropTypes from 'prop-types';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import { StyledButton } from './GenericButtons';

export const DisabledButton = styled(StyledButton)`
  background-color: ${(props) => (props.glassy ? props.theme.blueFeatureColor : props.theme.greycendreColor)};
  color: ${(props) => (props.glassy ? props.theme.blueFeatureColor : props.theme.blackFeatureColor)};
  &:hover {
    background-color: ${(props) => (props.glassy ? props.theme.blueFeatureColor : props.theme.greycendreColor)};
    color: ${(props) => (props.glassy ? props.theme.secondaryFeatureColor : props.theme.blackFeatureColor)};
  }
`;

export default function DynamicButton({ active }) {
  return (
    <>
      {active ? (
        <HashLink to="/EmiEval/0#section-theme">
          <StyledButton>Suivant</StyledButton>
        </HashLink>
      ) : (
        <DisabledButton disabled>Suivant</DisabledButton>
      )}
    </>
  );
}

DynamicButton.propTypes = {
  active: PropTypes.bool,
};

DynamicButton.defaultProps = {
  active: '',
};
