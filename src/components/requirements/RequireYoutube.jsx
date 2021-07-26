import styled from 'styled-components';
import { FlexCol } from '../../styles/generics/GenericContainers';
import { StyledButton } from '../../styles/generics/GenericButtons';
import { device } from '../../styles/theme';

export const StyledYoutubeBox = styled(FlexCol)`
  width: auto;
  height: auto;
  @media ${device.laptopL} {
    padding-left: 10px;
  }

  @media ${device.laptop} {
    padding-left: 10px;
  }

  @media ${device.tablet} {
    padding-left: 20px;
  }
`;

export const FrameContainer = styled.iframe`
  margin: 1rem 0;
  
  @media ${device.mobileS} {
    width: 300px;
    height: 170px;
  }

  @media ${device.mobileM} {
    width: 340px;
    height: 200px;
  }

  @media ${device.mobileL} {
    width: 360px;
    height: 250px;
  }

  @media ${device.tablet} {
    width: 550px;
    height: 350px;
  }

  @media ${device.laptop} {
    width: 600px;
    height: 450px;
  }

  @media ${device.laptopL} {
    width: 600px;
    height: 450px;
  }
`;

const Title = styled.h1`
  font-family: ${(props) => props.theme.fontFamilyFeature};
  color: #0a40a2;
  font-weight: 400;
  font-size: 1.6rem;
`;

const Button = styled(StyledButton)`
  padding: 1rem 1.5rem;
  border-radius: 3px;
  font-family: ${(props) => props.theme.fontFamilyFeature};
  font-size: 1.6rem;
`;

export default function RequireYoutube() {
  return (
    <StyledYoutubeBox hline="center">
      <Title> En savoir plus</Title>
      <FrameContainer title="This is a unique title" src="https://www.youtube.com/embed/aP0_xJE_bgU" />
      <Button glassy>Voir les questions fréquentes</Button>
    </StyledYoutubeBox>
  );
}
