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
  }
  
  @media ${device.desktop}{
    align-items: stretch;
    align-content: space-around;
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
