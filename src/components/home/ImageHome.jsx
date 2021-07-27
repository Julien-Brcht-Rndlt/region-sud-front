import styled from 'styled-components';
import { Flex } from '../../styles/generics/GenericContainers';
import image from '../../assets/img/michael-held-unsplash.jpg';
import { device } from '../../styles/theme';

export const StyledImageHome = styled.img`
@media ${device.mobileS}{
      height:200px;
      width:100%;
    }

    @media ${device.tablet}{
      height:400px;
    }

    @media ${device.laptop}{    
  height: 620px;
    }
`;

export default function ImageHome() {
  return (
    <Flex>
      <StyledImageHome src={image} alt="régate de voiliers" />
    </Flex>
  );
}
