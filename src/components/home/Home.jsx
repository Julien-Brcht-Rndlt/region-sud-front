import styled from 'styled-components';
import ImageHome from './ImageHome';
import TitleHome from './TitleHome';
import MapHome from './MapHome';
import Testimonials from './Testimonials';
import { device } from '../../styles/theme';
import { FlexCol, Flex } from '../../styles/generics/GenericContainers';

export const StyledHome = styled(Flex)`
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
  flex-direction:row;
  justify-content: space-around;
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
      <StyledHome>
        <TitleHome />
        <MapHome />
      </StyledHome>
      <Testimonials />
    </WrapperHome>
  );
}
