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

export default function FunnelDynamicButton({
  type,
  active,
  target,
  action,
  label,
}) {
  const handleClick = () => {
    if (action) {
      action();
    }
  };

  return (
    <>
      {active ? (
        <>
          <HashLink to={target} onClick={() => handleClick()}>
            <StyledButton type={type}>
              {label}
            </StyledButton>
          </HashLink>
        </>
      ) : (
        <DisabledButton disabled>{label}</DisabledButton>
      )}
    </>
  );
}

FunnelDynamicButton.propTypes = {
  type: PropTypes.string,
  action: PropTypes.func,
  active: PropTypes.bool,
  target: PropTypes.string,
  label: PropTypes.string.isRequired,
};

FunnelDynamicButton.defaultProps = {
  type: '',
  action: null,
  active: '',
  target: '',
};
