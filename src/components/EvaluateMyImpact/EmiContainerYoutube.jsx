import YouTube from 'react-youtube';
import styled from 'styled-components';
import EmiListElements from './EmiListElements';
import { StyledRoundedButton } from '../../assets/styles/genericStyles/StyledButtons';

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
        <StyledRoundedButton glassy>
          Voir les questions fréquentes
        </StyledRoundedButton>
      </StyledBoxTitleEtYoutube>
    </StyledBoxYoutubeEtElementsEmi>
  );
}
