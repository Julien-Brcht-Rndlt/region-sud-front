import YouTube from 'react-youtube';
import styled from 'styled-components';
//  import { FlexCol } from '../../styles/generics/GenericContainers';
import { StyledRoundedButton } from '../../styles/generics/GenericButtons';
import { StyledTitleH4 } from '../../styles/generics/GenericTitles';

export const StyledYoutubeBox = styled.div`
  width: auto;
  height: auto;
  padding: 140px;
  padding-top: 100px;
  padding-left: 100px;
`;

const opts = {
   height: '430',
   width: '360',
};

export default function RequireYoutube() {
  return (
    <StyledYoutubeBox hline="center">
      <StyledTitleH4>Comment cela va se passer :</StyledTitleH4>
      <YouTube opts={opts} videoId="aP0_xJE_bgU" />
      <StyledRoundedButton glassy>Voir les questions fréquentes</StyledRoundedButton>
    </StyledYoutubeBox>
  );
}
