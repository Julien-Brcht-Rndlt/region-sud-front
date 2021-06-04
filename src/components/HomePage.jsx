import ImageHomePage from './ImageHomePage';
import Title from './Title';
import MapHome from './MapHome';
import { StyledHomePage, WrapperHomePage } from '../styles/StyledHomePage';
import Testimonies from './Testimonies';

export default function HomePage() {
  return (
    <WrapperHomePage>
      <ImageHomePage />
      <StyledHomePage>
        <Title />
        <MapHome />
      </StyledHomePage>
      <Testimonies />
    </WrapperHomePage>
  );
}
