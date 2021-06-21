import styled from 'styled-components';
import { Flex, FlexCol } from '../../styles/generics/GenericContainers';
import Phone from '../../assets/img/FaqPhonePicture.png';
import Mail from '../../assets/img/FaqLetterPicture.png';
import { StyledTitleH6Black } from '../../styles/generics/GenericTitles';

export const StyledContainerCol = styled(Flex)`
  width: auto;
  height: 300px;
  margin-left: 50px;
`;

export const StyledColContact = styled(FlexCol)`
  width: 40%;
  height: 250px;
  font-size: 20px;
  margin-left: 25px;
`;

export const StyledColPhone = styled(FlexCol)`
  width: 30%;
  height: 390px;
`;

export const StyledColMail = styled(FlexCol)`
  width: 30%;
  height: 285px;
  margin: top;
`;

export default function FaqFooter() {
  return (
    <StyledContainerCol>
      <StyledColContact stretch>
        <StyledTitleH6Black>Contactez nous !</StyledTitleH6Black>
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
  );
}
