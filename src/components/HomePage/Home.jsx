import styled from 'styled-components';
import ImageHome from './ImageHome';
import TitleHome from './TitleHome';
import MapHome from './MapHome';
import Testimonials from './Testimonials';

export const StyledHomePage = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  align-content: space-around;
`;
export const WrapperHomePage = styled.div``;

export default function Home() {
  return (
    <WrapperHomePage>
      <ImageHome />
      <StyledHomePage>
        <TitleHome />
        <MapHome />
      </StyledHomePage>
      <Testimonials />
    </WrapperHomePage>
  );
}
