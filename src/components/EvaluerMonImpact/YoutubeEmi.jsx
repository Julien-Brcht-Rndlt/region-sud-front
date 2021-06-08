import YouTube from 'react-youtube';
import styled from 'styled-components';
import ElementsEmi from './ElementsEmi';
import ButtonEmpty from '../ButtonEmpty';

export const StyledBoxYoutubeEtElementsEmi = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
`;

export const StyledBoxTitleEtYoutube = styled.div``;

export default function YoutubeEmi() {
  return (
    <StyledBoxYoutubeEtElementsEmi>
      <ElementsEmi />
      <StyledBoxTitleEtYoutube>
        <h3>Comment cela va se passer :</h3>
        <YouTube videoId="aP0_xJE_bgU" />
        <ButtonEmpty text="Voir les questions fréquentes" />
      </StyledBoxTitleEtYoutube>
    </StyledBoxYoutubeEtElementsEmi>
  );
}
