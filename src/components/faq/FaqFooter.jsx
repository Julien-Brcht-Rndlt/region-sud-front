import styled from 'styled-components';
import FaqFooterText from './FaqFooterText';

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
  width: 100%;
  height: 120px;
`;
export const StyledLetterPicture = styled.img`
  width: 40px;
  height: 40px;
`;

export const StyledPhonePicture = styled.img`
  width: 40px;
  height: 40px;
`;

export const StyledImageContainer = styled.div`
  display: flex;
  width: auto;
`;

export default function FaqFooter() {
  const footerTextContent = [
    {
      img: '',
      title: 'Contactez-nous',
      lines: ['Vous ne trouvez pas la réponse à votre question ?', 'Contactez nous'],
    },
    {
      img: '../../assets/img/FaqPhonePicture.png',
      alt: 'telephone',
      title: '',
      lines: ['04 98 09 38 56', 'Du lundi au vendredi', '10h - 12h et 13h - 17h'],
    },
    {
      img: '../../assets/img/FaqLetterPicture.png',
      alt: 'courriel',
      title: '',
      lines: ['mail@maregionsud.fr'],
    },
  ];
  return (
    <>
      <StyledFaqFooterContainer>
        <StyledFooterTextContainer>
          {footerTextContent.map((content) => (
            <FaqFooterText title={content.title} lines={content.lines} image={content.image} />
          ))}
        </StyledFooterTextContainer>
      </StyledFaqFooterContainer>
    </>
  );
}
