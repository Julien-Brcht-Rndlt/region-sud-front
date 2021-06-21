import styled from 'styled-components';
import { FlexCol } from './generics/GenericContainers';
import { IconeImg } from './generics/GenericComponents';
import { device } from './theme';

export const TestimonialContainer = styled(FlexCol)`
@media ${device.mobileS}{
 //   width: 320px;
    background-color: ${(props) => props.theme.lightGreyFeatureColor};
    }

@media ${device.mobileM}{
  //   width: 380px;
     background-color: ${(props) => props.theme.lightGreyFeatureColor};
    }

    @media ${device.mobileL}{
    //  width: 429px;
      background-color: ${(props) => props.theme.lightGreyFeatureColor};
    }

    @media ${device.tablet}{
    //  width: 540px;
      background-color: ${(props) => props.theme.lightGreyFeatureColor};
    }

    @media ${device.laptop}{
      width: 350px;
    background-color: ${(props) => props.theme.lightGreyFeatureColor};
    }  

`;

export const TestimonialAvatar = styled(IconeImg)`
  border-radius: 50%;
  align-items: center;
  margin-left: 120px;
  padding: 20px;
`;

export const TestimonialContent = styled.p`
  color: ${(props) => props.theme.darkBlueGreyFeatureColor};
  font-weight: ${(props) => props.theme.fontWeightFeature};
  font-family: ${(props) => props.theme.fontFamilyFeature};
`;

export const TestimonialAuthor = styled.span`
  color: ${(props) => props.theme.darkBlueGreyFeatureColor};
`;

export const TestimonialQuote = styled.img`
  width: 15px;
  height: 15px;
  position: relative;
  top: ${(props) => (props.opening ? '10px' : '-20px')};
  left: ${(props) => (props.opening ? '-5px' : '280px')};
`;
