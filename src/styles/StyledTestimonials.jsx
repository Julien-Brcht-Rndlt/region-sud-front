import styled from 'styled-components';
import { device } from './theme';
import { Flex } from './generics/GenericContainers';

export const TestimonialsContainer = styled(Flex)`
  @media ${device.mobileS}{
    flex-direction:column;
    padding:0px;
  }

  @media ${device.mobileM}{
    flex-direction:column;
    padding:0;
  }

  @media ${device.mobileL}{
    flex-direction:column;
    padding:0;
  }

  @media ${device.tablet}{
    flex-direction:row;
    padding:0;
  }

  @media ${device.laptop}{
    flex-direction:row;
    justify-content: space-around;
    background-color: ${(props) => props.theme.lightGreyFeatureColor};
    padding: 40px, 20px, 70px, 0;
    padding: 40px, 20px, 70px, 0;
    padding-bottom: 70px;
    align-items: center;
  }
`;

export const TestimonialsTitle = styled.h2`
  color: ${(props) => props.theme.blueFeatureColor};
  background-color: ${(props) => props.theme.lightGreyFeatureColor};
  height: 50px;
  margin: 0;
  padding: 110px 0 0 9rem;
  font-family: ${(props) => props.theme.fontFamilyNormal};
  position: relative;
`;
