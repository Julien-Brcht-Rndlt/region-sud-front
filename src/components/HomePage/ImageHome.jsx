import styled from 'styled-components';
import image from '../../assets/img/image.jpg';

export const StyledImageContainer = styled.div`
  display: flex;
`;

export const StyledImageHomePage = styled.img`
  height: 340px;
  width: 100%;
`;

export default function ImageHome() {
  return (
    <StyledImageContainer>
      <StyledImageHomePage src={image} alt="régate de voiliers" />
    </StyledImageContainer>
  );
}
