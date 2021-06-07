import YouTube from 'react-youtube';
import styled from 'styled-components';

export const StyledYoutubeEmi = styled.div``;

export default function YoutubeEmi() {
  return (
    <StyledYoutubeEmi>
      <h2>Comment cela va se passer :</h2>
      <YouTube videoId="aP0_xJE_bgU" />
    </StyledYoutubeEmi>
  );
}
