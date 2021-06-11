import styled from 'styled-components';

export const StyledButton = styled.button`
  color: ${(props) =>
    props.glassy
      ? props.theme.blueFeatureColor
      : props.theme.secondaryFeatureColor};
  background-color: ${(props) =>
    props.glassy
      ? props.theme.secondaryFeatureColor
      : props.theme.blueFeatureColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 20px 25px 20px 25px;
  border: ${(props) =>
    props.glassy ? `solid 1px ${props.theme.blueFeatureColor}` : 'none'};
  font-size: 1.2em;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.glassy
        ? props.theme.blueFeatureColor
        : props.theme.NavyBlueFeatureColor};
    color: ${(props) =>
      props.glassy
        ? props.theme.secondaryFeatureColor
        : props.theme.yellowFeatureColor};
    transition: 0.4s;
  }
`;

export const StyledRoundedButton = styled(StyledButton)`
  border-radius: 10px;
`;
