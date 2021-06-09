import styled from 'styled-components';

export const TestimonialContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  background-color: ${(props) => props.theme.lightGreyFeatureColor};
`;

export const TestimonialAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  align-items: center;
  margin-left: 120px;
  padding: 20px;
`;

export const TestimonialContent = styled.p`
  color: ${(props) => props.theme.lightGreyFeatureColor};
  font-weight: ${(props) => props.theme.fontWeightBold};
  font-family: ${(props) => props.theme.fontFamilyFeature};
`;

export const TestimonialAuthor = styled.span`
  color: ${(props) => props.theme.lightGreyFeatureColor};
`;
