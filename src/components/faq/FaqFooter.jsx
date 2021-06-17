import styled from 'styled-components';
import { Flex, FlexCol } from '../../styles/genericStyles/GenericContainers';
import Phone from '../../assets/img/FaqPhonePicture.png';
import Mail from '../../assets/img/FaqLetterPicture.png';
import { StyledTitleH2Black } from '../../styles/genericStyles/GenericTitles';

export const StyledContainerCol = styled(Flex)`
  width: auto;
  height: 250px;
  margin-left: 50px;
`;

export const StyledColContact = styled.div`
  width: 40%;
  height: 250px;
  padding: 25px;
  font-size: 20px;
`;

export const StyledColPhone = styled(FlexCol)`
  width: 30%;
`;

export const StyledColMail = styled(FlexCol)`
  width: 30%;
  height: 130px;
  margin: top;
`;

export default function FaqFooter() {
  return (
    <>
      <StyledContainerCol>
        <StyledColContact>
          <StyledTitleH2Black>Contactez nous !</StyledTitleH2Black>
          <p>Vous ne trouvez pas la réponse à votre question ?</p>
          <p>Contactez nous.</p>
        </StyledColContact>
        <StyledColPhone center>
          <img src={Phone} width="40px" alt="telephone" />
          <p>04 98 09 38 56</p>
          <p>Du lundi au vendredi</p>
          <p>10h - 12h et 13h - 17h</p>
        </StyledColPhone>
        <StyledColMail center>
          <img src={Mail} width="40px" alt="mail" />
          <p>mail@maregionsud.fr</p>
        </StyledColMail>
      </StyledContainerCol>
    </>
  );
}
