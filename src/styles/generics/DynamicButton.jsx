import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
        <Link to="/EmiEval/1">
          <StyledButton>Suivant</StyledButton>
        </Link>
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
