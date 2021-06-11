import styled from 'styled-components';
import image from '../../assets/img/top_image.jpg';

export const StyledImageContainer = styled.div`
  display: flex;
`;

export const StyledImageHome = styled.img`
  height: 340px;
  width: 100%;
`;

export default function ImageHome() {
  return (
    <StyledImageContainer>
      <StyledImageHome src={image} alt="régate de voiliers" />
    </StyledImageContainer>
  );
}
