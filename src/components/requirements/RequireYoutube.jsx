import styled from 'styled-components';
import { FlexCol } from '../../styles/generics/GenericContainers';
import { StyledRoundedButton } from '../../styles/generics/GenericButtons';
import { StyledTitleH4 } from '../../styles/generics/GenericTitles';
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
  @media ${device.mobileS} {
    width: 300px;
    height: 170px;
    margin-left: 4px;
  }

  @media ${device.mobileM} {
    width: 340px;
    height: 200px;
    margin-left: 10px;
  }

  @media ${device.mobileL} {
    width: 360px;
    height: 250px;
    margin-left: 10px;
  }

  @media ${device.tablet} {
    width: 550px;
    height: 350px;
    margin-left: 20px;
  }

  @media ${device.laptop} {
    width: 600px;
    height: 450px;
    padding-left: 0px;
  }

  @media ${device.laptopL} {
    width: 600px;
    height: 450px;
    padding-left: 0px;
  }
`;

export default function RequireYoutube() {
  return (
    <StyledYoutubeBox hline="center">
      <StyledTitleH4> Comment cela va se passer :</StyledTitleH4>
      <FrameContainer title="This is a unique title" src="https://www.youtube.com/embed/aP0_xJE_bgU" />
      <StyledRoundedButton glassy>Voir les questions fréquentes</StyledRoundedButton>
    </StyledYoutubeBox>
  );
}
