import styled from 'styled-components';
import { FlexCol } from './genericStyles/GenericContainers';
import { IconeImg } from './genericStyles/GenericComponents';

export const TestimonialContainer = styled(FlexCol)`
  width: 350px;
  background-color: ${(props) => props.theme.lightGreyFeatureColor};
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
  top: ${(props) => (props.opening ? '10px' : '-25px')};
  left: ${(props) => (props.opening ? '-5px' : '140px')};
`;
