import styled from 'styled-components';
import ImageHome from './ImageHome';
import TitleHome from './TitleHome';
import MapHome from './MapHome';
import Testimonials from './Testimonials';

export const StyledHome = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  align-content: space-around;
`;
export const WrapperHome = styled.div``;

export default function Home() {
  return (
    <WrapperHome>
      <ImageHome />
      <StyledHome>
        <TitleHome />
        <MapHome />
      </StyledHome>
      <Testimonials />
    </WrapperHome>
  );
}
