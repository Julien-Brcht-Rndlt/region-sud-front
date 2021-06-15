import YouTube from 'react-youtube';
import styled from 'styled-components';
import { FlexCol } from '../../styles/generics/GenericContainers';
import { StyledRoundedButton } from '../../styles/generics/GenericButtons';

export const StyledYoutubeBox = styled(FlexCol)`
  width: auto;
  height: auto;
  padding: 140px;
  padding-top: 100px;
  padding-left: 100px;
`;

export const StyledYoutubeTitle = styled.h4`
  color: ${(props) => props.theme.blueFeatureColor};
  font-size: 20px;
`;

export default function RequireYoutube() {
  return (
    <StyledYoutubeBox hline="center">
      <StyledYoutubeTitle>Comment cela va se passer :</StyledYoutubeTitle>
      <YouTube videoId="aP0_xJE_bgU" />
      <StyledRoundedButton glassy>Voir les questions fréquentes</StyledRoundedButton>
    </StyledYoutubeBox>
  );
}
