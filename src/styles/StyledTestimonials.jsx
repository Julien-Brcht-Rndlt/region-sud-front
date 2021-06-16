import styled from 'styled-components';

export const TestimonialsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${(props) => props.theme.lightGreyFeatureColor};
  padding: 40px, 20px, 70px, 0;
  padding-bottom: 70px;
  align-items: center;
`;

export const TestimonialsTitle = styled.h2`
  color: ${(props) => props.theme.blueFeatureColor};
  background-color: ${(props) => props.theme.lightGreyFeatureColor};
  height: 50px;
  margin: 0;
  padding-left: 9rem;
  padding-top: 40px;
  font-family: ${(props) => props.theme.fontFamilyNormal};
`;
