import styled from 'styled-components';
import FaqFooterText from './FaqFooterText';
import mail from '../../assets/img/FaqLetterPicture.png';
import phone from '../../assets/img/FaqPhonePicture.png';

export const StyledFaqFooterContainer = styled.div`
  display: flex;
  border: 5px solid brown;
  width: 100%;
  height: 130px;
`;

export const StyledFooterTextContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-around;
  padding-left: 15px;
  width: 95%;
  height: 120px;
`;
export const StyledLetterPicture = styled.img`
  width: 40px;
  height: 40px;
`;

export const StyledPhonePicture = styled.img`
  width: 40px;
  height: 40px;
  padding-left: 35px;
`;

export const StyledImageContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
  justify-content: space-around;
  width: 100%;
`;

export default function FaqFooter() {
  const footerTextContent = [
    {
      title: '',
      lines: ['Vous ne trouvez pas la réponse à votre question ?', 'Contactez nous'],
    },
    {
      title: '',
      lines: ['04 98 09 38 56', 'Du lundi au vendredi', '10h - 12h et 13h - 17h'],
    },
    {
      title: '',
      lines: ['mail@maregionsud.fr'],
    },
  ];
  return (
    <>
      <StyledImageContainer>
        <h4>Contactez nous !</h4>
        <img src={phone} alt="" />
        <img src={mail} alt="" />
      </StyledImageContainer>
      <StyledFaqFooterContainer>
        <StyledFooterTextContainer>
          {footerTextContent.map((content) => (
            <FaqFooterText title={content.title} lines={content.lines} FaqPic={content.FaqPic} />
          ))}
        </StyledFooterTextContainer>
      </StyledFaqFooterContainer>
    </>
  );
}
