import styled from 'styled-components';
import { device } from '../theme';

export const StyledButton = styled.button`
  color: ${(props) => (props.glassy ? props.theme.blueFeatureColor : props.theme.secondaryFeatureColor)};
  background-color: ${(props) => (props.glassy ? props.theme.secondaryFeatureColor : props.theme.blueFeatureColor)};
  padding: 20px 25px 20px 25px;
  border: ${(props) => (props.glassy ? `solid 1px ${props.theme.blueFeatureColor}` : 'none')};
  font-size: 1.2em;
  cursor: pointer;
  margin: 10px;
  &:hover {
    background-color: ${(props) => (props.glassy ? props.theme.blueFeatureColor : props.theme.blueFeatureColor)};
    color: ${(props) => (props.glassy ? props.theme.secondaryFeatureColor : props.theme.yellowFeatureColor)};
  }
  @media ${device.mobileS} {
    font-size: 12px;
    padding: 5px;
  }
  @media ${device.mobileM} {
    font-size: 15px;
    padding: 5px;
  }
  @media ${device.mobileL} {
    font-size: 15px;
    padding: 5px;
  }
  @media ${device.tablet} {
    font-size: 18px;
    padding: 5px;
  }
  @media ${device.laptop} {
    font-size: 20px;
  }
  @media ${device.laptopL} {
    font-size: 20px;
  }
  @media ${device.desktop} {
    font-size: 20px;
  }
`;

export const StyledInactiveButton = styled(StyledButton)`
  color: ${(props) => (props.inactive ? props.theme.secondaryFeatureColor : props.theme.secondaryFeatureColor)};
  background-color: ${(props) => (props.inactive ? props.theme.blackFeatureColor : props.theme.blueFeatureColor)};
  &:hover {
    background-color: ${(props) => (props.inactive ? props.theme.greyFeatureColor : props.theme.NavyBlueFeatureColor)};
    color: ${(props) => (props.inactive ? props.theme.blackFeatureColor : props.theme.yellowFeatureColor)};
    transition: 0.4s;
  }
`;
