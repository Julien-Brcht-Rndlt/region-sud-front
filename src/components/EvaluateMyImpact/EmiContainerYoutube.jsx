import YouTube from 'react-youtube';
import styled from 'styled-components';
import EmiListElements from './EmiListElements';
import { StyledButtonEmpty } from '../../assets/styles/genericStyles/StyledButton';

export const StyledBoxYoutubeEtElementsEmi = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
`;

export const StyledBoxTitleEtYoutube = styled.div``;

export default function EmiContainerYoutube() {
  return (
    <StyledBoxYoutubeEtElementsEmi>
      <EmiListElements />
      <StyledBoxTitleEtYoutube>
        <h3>Comment cela va se passer :</h3>
        <YouTube videoId="aP0_xJE_bgU" />
        <StyledButtonEmpty>Voir les questions fréquentes</StyledButtonEmpty>
      </StyledBoxTitleEtYoutube>
    </StyledBoxYoutubeEtElementsEmi>
  );
}
