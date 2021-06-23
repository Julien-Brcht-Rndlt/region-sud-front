import styled from 'styled-components';
import { StyledTitleH6Black } from '../../styles/generics/GenericTitles';
import { Flex, FlexCol } from '../../styles/generics/GenericContainers';
import FaqQuestionsList from './FaqQuestionsList';
import FaqHeadPicture from '../../assets/img/FaqHeadPicture.png';
import Phone from '../../assets/img/FaqPhonePicture.png';
import Mail from '../../assets/img/FaqLetterPicture.png';

export const StyledFaqHeaderContainer = styled(Flex)`
  width: auto;
  height: 80px;
  margin-left: 50px;
`;

export const StyledHeadPicture = styled.img`
  padding: 20px;
  height: 60px;
  width: 60px;
`;

export const StyledTitleHelp = styled.h1`
  color: black;
`;

export const FaqHeader = () => (
  <StyledFaqHeaderContainer start>
    <StyledHeadPicture src={FaqHeadPicture} alt="HeadPciture" />
    <StyledTitleHelp>Aide</StyledTitleHelp>
  </StyledFaqHeaderContainer>
      );

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

export const FaqFooter = () => (
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

export const StyledFaqContainerQuestions = styled(Flex)`
  width: 100%;
  height: 410px;
`;

export const StyledFaqTitleH2Container = styled.div`
  padding: 25px;
  height: 100px;
  margin-left: 50px;
`;

export default function FaqBody() {
  return (
    <>
      <StyledFaqTitleH2Container>
        <StyledTitleH6Black>Foire aux questions</StyledTitleH6Black>
      </StyledFaqTitleH2Container>
      <StyledFaqContainerQuestions>
        <FaqQuestionsList />
      </StyledFaqContainerQuestions>
    </>
  );
}
