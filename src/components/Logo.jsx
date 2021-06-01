import styled from 'styled-components';

const StyledLogoCont = styled.div`
  padding: 30px;
`;

const StyledLogoImg = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export default function Logo({ src, width, height, alt }) {
  return (
    <StyledLogoCont>
      <StyledLogoImg src={src} width={width} height={height} alt={alt} />
    </StyledLogoCont>
  );
}
