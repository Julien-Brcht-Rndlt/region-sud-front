import {
  StyledImageContainer,
  StyledImageHomePage,
} from '../styles/StyledImageHomePage';

import image from './image.jpg';

export default function ImageHomePage() {
  return (
    <StyledImageContainer>
      <StyledImageHomePage src={image} alt="régate de voiliers" />
    </StyledImageContainer>
  );
}
