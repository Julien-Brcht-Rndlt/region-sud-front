import styled from 'styled-components';
import { FlexSpace } from '../../styles/generics/GenericContainers';
import ImageHome from './ImageHome';
import TitleHome from './TitleHome';
import MapHome from './MapHome';
import Testimonials from './Testimonials';

export const StyledHome = styled(FlexSpace)`
  align-items: stretch;
  align-content: space-around;
`;
export const WrapperHome = styled.div``;

export default function Home() {
  return (
    <WrapperHome>
      <ImageHome />
      <StyledHome space-around>
        <TitleHome />
        <MapHome />
      </StyledHome>
      <Testimonials />
    </WrapperHome>
  );
}
