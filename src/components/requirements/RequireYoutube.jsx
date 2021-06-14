import YouTube from 'react-youtube';
import styled from 'styled-components';
import { FlexCol } from '../../styles/genericStyles/GenericContainers';
import { StyledRoundedButton } from '../../styles/genericStyles/StyledButtons';

export const StyledYoutubeBox = styled(FlexCol)`
  width: 90%;
`;

export const StyledYoutubeTitle = styled.h4``;

export default function RequireYoutube() {
  return (
    <StyledYoutubeBox>
      <StyledYoutubeTitle>Comment cela va se passer :</StyledYoutubeTitle>
      <YouTube videoId="aP0_xJE_bgU" />
      <StyledRoundedButton glassy>
        Voir les questions fréquentes
      </StyledRoundedButton>
    </StyledYoutubeBox>
  );
}
