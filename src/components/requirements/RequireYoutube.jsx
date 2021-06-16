import YouTube from 'react-youtube';
import styled from 'styled-components';
import { FlexCol } from '../../styles/generics/GenericContainers';
import { StyledRoundedButton } from '../../styles/generics/GenericButtons';
import { StyledTitleH4 } from '../../styles/generics/GenericTitles';

export const StyledYoutubeBox = styled(FlexCol)`
  width: auto;
  height: auto;
  padding: 140px;
  padding-top: 100px;
  padding-left: 100px;
`;

export default function RequireYoutube() {
  return (
    <StyledYoutubeBox hline="center">
      <StyledTitleH4>Comment cela va se passer :</StyledTitleH4>
      <YouTube videoId="aP0_xJE_bgU" />
      <StyledRoundedButton glassy>Voir les questions fréquentes</StyledRoundedButton>
    </StyledYoutubeBox>
  );
}
