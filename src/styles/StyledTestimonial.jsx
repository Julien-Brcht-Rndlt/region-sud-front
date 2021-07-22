import styled from 'styled-components';
import { FlexCol } from './generics/GenericContainers';
import { IconeImg } from './generics/GenericComponents';
import { device } from './theme';

export const TestimonialContainer = styled(FlexCol)`

@media ${device.mobileS}{
    background-color: ${(props) => props.theme.lightGreyFeatureColor};
    }

@media ${device.mobileM}{
     background-color: ${(props) => props.theme.lightGreyFeatureColor};
    }

    @media ${device.mobileL}{
      background-color: ${(props) => props.theme.lightGreyFeatureColor};
    }

    @media ${device.tablet}{
      background-color: ${(props) => props.theme.lightGreyFeatureColor};
    }

    @media ${device.laptop}{
      padding: 50px 100px;
      background-color: ${(props) => props.theme.lightGreyFeatureColor};
    }
`;

export const TestimonialAvatar = styled(IconeImg)`
  border-radius: 50%;
  margin: 0 auto;
  padding: 20px;
  width: 80px;
  height: 80px;
`;

export const TestimonialContent = styled.p`
  color: ${(props) => props.theme.blueFeatureColor};
  font-weight: bold;
  font-family: ${(props) => props.theme.fontFamilyNormal};
  font-size: 1.5rem;
  line-height: 35px;
`;

export const TestimonialAuthor = styled.span`
  color: ${(props) => props.theme.blueFeatureColor};
  font-weight: lighter;
  font-family: ${(props) => props.theme.fontFamilyNormal};
  font-size: 1.5rem;
  padding: 0 15px;
`;

export const TestimonialQuote = styled.img`
  width: 15px;
  height: 15px;
  position: relative;
  top: ${(props) => (props.opening ? '10px' : '-20px')};
  left: ${(props) => (props.opening ? '-5px' : '280px')};
`;
