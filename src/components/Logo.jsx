import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from '../styles/theme';

const StyledLogoCont = styled.div`
  padding: 1px;
  padding: 30px;
`;

const StyledLogoImg = styled.img`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  @media ${device.mobileS} {
    font-size: 10px;
    width: 110px;
    height: 75px;
  }
`;

export default function Logo({
  src,
  width,
  height,
  alt,
}) {
  return (
    <StyledLogoCont>
      <StyledLogoImg src={src} width={width} height={height} alt={alt} />
    </StyledLogoCont>
  );
}

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
};
