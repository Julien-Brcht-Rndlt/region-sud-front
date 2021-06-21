import styled from 'styled-components';
import { Flex, FlexCol } from '../../styles/generics/GenericContainers';
import Testimonial from './Testimonial';
import { StyledButton } from '../../styles/generics/GenericButtons';
import { TestimonialsContainer, TestimonialsTitle } from '../../styles/StyledTestimonials';
import { device } from '../../styles/theme';

export const StyledButtonTestimonial = styled(Flex)`
  height: 90px;
  width: auto;
  background-color: ${(props) => props.theme.lightGreyFeatureColor};
  padding: 50px;
`;
export const StyledBorderYellowH1 = styled.div`
  @media ${device.mobileS}{
    border-bottom: 0;
  }

  @media ${device.mobileL}{
    border-bottom: 6px solid ${(props) => props.theme.yellowFeatureColor};
    height:7px;
    padding-right: 40px;
    margin: 65px;
    margin-left: 140px;
    position: absolute;
    }
  
  @media ${device.tablet}{
    border-bottom: 8px solid ${(props) => props.theme.yellowFeatureColor};
    height:6px;
    padding-right: 90px;
    margin: 65px;
    margin-left: 145px;
    position: absolute;
  }
  
  @media ${device.desktop}{
  border-bottom: 10px solid ${(props) => props.theme.yellowFeatureColor};
  height: 10px;
  padding-right: 90px;
  margin: 65px;
  margin-left: 145px;
  position: absolute;
  }
`;

export const StyledContainerYellow = styled(FlexCol)`
  width: 100%;
`;

export default function Testimonials() {
  const testimonials = [
    {
      avatar: '',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum exercitationem accusantium eligendi repellendus est sed non nemo adipisci. Et laudantium aperiam temporibus dolorem voluptatem nihil, obcaecati exercitationem facere animi necessitatibus.',
      author: "M. Régate,  Anoi club de voile d'Istres",
    },
    {
      avatar: '',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum exercitationem accusantium eligendi repellendus est sed non nemo adipisci. Et laudantium aperiam temporibus dolorem voluptatem nihil, obcaecati exercitationem facere animi necessitatibus.',
      author: 'Mme. Voile, Club Nautique BERROIS',
    },
    {
      avatar: '',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum exercitationem accusantium eligendi repellendus est sed non nemo adipisci. Et laudantium aperiam temporibus dolorem voluptatem nihil, obcaecati exercitationem facere animi necessitatibus.',
      author: 'M. Marée Club Nautique Marignais',
    },
  ];

  return (
    <>
      <StyledContainerYellow>
        <TestimonialsTitle>ILS L&apos;ONT UTILIS&Eacute;</TestimonialsTitle>
        <StyledBorderYellowH1 />
      </StyledContainerYellow>
      <TestimonialsContainer>
        {testimonials.map((testimony) => (
          <Testimonial {...testimony} />
        ))}
      </TestimonialsContainer>
      <StyledButtonTestimonial center>
        <StyledButton>
          Je m&apos;engage moi aussi !
        </StyledButton>
      </StyledButtonTestimonial>
    </>
  );
}
