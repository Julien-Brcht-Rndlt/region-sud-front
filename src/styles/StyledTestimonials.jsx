import styled from 'styled-components';
import { device } from './theme';

export const TestimonialsContainer = styled.div`
@media ${device.mobileS}{
    display: flex;
    flex-direction:column;
    padding:0px;
    }

@media ${device.mobileM}{
    display: flex;
    flex-direction:column;
    padding:0;
    }

    @media ${device.mobileL}{
      display: flex;
      flex-direction:column;
      padding:0;
    }

    @media ${device.tablet}{
      display: flex;
      flex-direction:row;
     padding:0;
    }

    @media ${device.laptop}{
      display: flex;
      flex-direction:row;
      justify-content: space-around;
      background-color: ${(props) => props.theme.lightGreyFeatureColor};
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
  padding-left: 9rem;
  padding-top: 40px;
  font-family: ${(props) => props.theme.fontFamilyNormal};
`;
