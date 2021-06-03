import ImageHomePage from './ImageHomePage';
import Title from './Title';
import MapHome from './MapHome';
import { StyledHomePage } from '../styles/StyledHomePage';

export default function HomePage() {
  return (
    <>
      <ImageHomePage />
      <StyledHomePage>
        <Title />
        <MapHome />
      </StyledHomePage>
    </>
  );
}
