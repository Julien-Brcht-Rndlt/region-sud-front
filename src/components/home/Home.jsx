import styled from 'styled-components';
import { FlexSpace, FlexCol } from '../../styles/generics/GenericContainers';
import ImageHome from './ImageHome';
import TitleHome from './TitleHome';
import MapHome from './MapHome';
import Testimonials from './Testimonials';
import { device } from '../../styles/theme';

export const StyledHome = styled(FlexSpace)`

 @media ${device.mobileS}{
    flex-direction: column;
  }

  @media ${device.tablet}{
    flex-direction:row;
    justify-content: space-around;
    align-items: stretch;
    align-content: space-around;
    padding: 4rem 10rem;
  }

  @media ${device.desktop}{
    flex-direction:row;
    align-items: stretch;
    align-content: space-around;
    padding: 7rem 8rem;
  }
`;

export const WrapperHome = styled(FlexCol)`
  `;

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
